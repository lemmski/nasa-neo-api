import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";
import { zonedTimeToUtc } from "date-fns-tz";
import {
  eachMonthOfInterval,
  eachIntervalStartDateForMonth,
  eachIntervalEndDateForMonth,
} from "../utils/date-functions";

interface NearEarthObject {
  absolute_magnitude_h: number;
  close_approach_data: CloseApproach[];
  estimated_diameter: EstimatedDiameter;
  id: string;
  is_potentially_hazardous_asteroid: boolean;
  is_sentry_object: boolean;
  links: NearEarthObjectLinks;
  name: string;
  nasa_jpl_url: string;
  neo_reference_id: string;
}

interface FeedResponse {
  element_count?: number | null;
  links?: FeedResponseLinks | null;
  near_earth_objects?: NearEarthObjectsByDate | null;
}

interface NearEarthObjectsByDate {
  [index: string]: NearEarthObject[] | null | undefined;
}

interface FeedResponseLinks {
  next: string;
  prev: string;
  self: string;
}

interface CloseApproach {
  close_approach_date: string;
  close_approach_date_full: string;
  epoch_date_close_approach: bigint;
  miss_distance: MissDistance;
  orbiting_body: string;
  relative_velocity: RelativeVelocy;
}

interface RelativeVelocy {
  kilometers_per_hour: string;
  kilometers_per_second: string;
  miles_per_hour: string;
}

interface EstimatedDiameter {
  feet: DiameterMeasurement;
  kilometers: DiameterMeasurement;
  meters: DiameterMeasurement;
  miles: DiameterMeasurement;
}

interface NearEarthObjectLinks {
  self: string;
}

interface MissDistance {
  astronomical: string;
  kilometers: string;
  lunar: string;
  miles: string;
}

interface DiameterMeasurement {
  estimated_diameter_max: number;
  estimated_diameter_min: number;
}

export default class NasaNeoAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.nasa.gov/";
  }

  minimumApproach(nearEarthObject: NearEarthObject) {
    return Math.min(
      ...nearEarthObject?.close_approach_data.map((closeApproach) =>
        parseFloat(
          closeApproach?.miss_distance?.astronomical ?? Infinity.toString()
        )
      )
    );
  }

  async getAsteroidClosestToEarthInRange(
    startDate: string,
    endDate: string
  ): Promise<NearEarthObject> {
    const data: FeedResponse = await this.get("neo/rest/v1/feed", {
      start_date: startDate,
      end_date: endDate,
    });
    return Object.values(data?.near_earth_objects ?? {})
      .flatMap(
        (nearEarthObject: NearEarthObject[] | null | undefined) =>
          nearEarthObject ?? []
      )
      .filter((neo) => neo)
      .reduce((closestNeo, currentNeo) =>
        this.minimumApproach(closestNeo) < this.minimumApproach(currentNeo)
          ? closestNeo
          : currentNeo
      );
  }

  async getLargestNearEarthObjectByMonth(
    startYear: string,
    endYear: string
  ): Promise<Promise<NearEarthObject[]>[]> {
    const largestNeoByMonth = await Promise.all(
      this.generateRangeIntervals(startYear, endYear).map(
        async (monthIntervals, index) => {
          // Timeout is needed or we get HTTP code 429: 'Too many requests' response
          await new Promise((res) => setTimeout(res, index * 15000));
          const largestNeosForSingleMonth: any = await Promise.all(
            monthIntervals.map(async ([startDate, endDate]) => {
              process.env.DEBUG && console.log(
                "Calling fetch at:",
                new Date(),
                "start:",
                startDate.toISOString().slice(0, 10),
                "end:",
                endDate.toISOString().slice(0, 10)
              );
              /* There are responses from many dates, so we want to flatten
               * the structure to single array from array of arrays before
               * we reduce it to largest */
              const feedResponse = await (this.get("neo/rest/v1/feed", {
                start_date: startDate.toISOString().slice(0, 10),
                end_date: endDate.toISOString().slice(0, 10),
              }) as any);
              return Object.values(feedResponse.near_earth_objects)
                .flat()
                .filter((neo) => neo)
                .reduce(this.largestNeoReducer);
            })
          );
          process.env.DEBUG && console.log(
            "Single month response:",
            largestNeosForSingleMonth.reduce(this.largestNeoReducer)
          );
          return largestNeosForSingleMonth.reduce(this.largestNeoReducer);
        }
      )
    );
    process.env.DEBUG && console.log(
      "Largest in full response:",
      largestNeoByMonth.reduce(this.largestNeoReducer).name,
      "min:",
      largestNeoByMonth.reduce(this.largestNeoReducer).estimated_diameter.kilometers
        .estimated_diameter_min,
      "max:",
      largestNeoByMonth.reduce(this.largestNeoReducer).estimated_diameter.kilometers
        .estimated_diameter_max
    );
    return largestNeoByMonth;
  }

  largestNeoReducer(largestNeo: any, currentValue: any) {
    const {
      estimated_diameter: {
        kilometers: {
          estimated_diameter_min: largestMinDiameter,
          estimated_diameter_max: largestMaxDiameter,
        },
      },
    } = largestNeo;
    const {
      estimated_diameter: {
        kilometers: {
          estimated_diameter_min: currentMinDiameter,
          estimated_diameter_max: currentMaxDiameter,
        },
      },
    } = currentValue;
    /* Use average of the min and max diameter to determine the size */
    return (largestMinDiameter + largestMaxDiameter) / 2 >
      (currentMinDiameter + currentMaxDiameter) / 2
      ? largestNeo
      : currentValue;
  }

  generateRangeIntervals(startYear: string, endYear: string) {
    /* Create all intervals we want to fetch data for */
    return eachMonthOfInterval(
      new Date(`${startYear}-01-01`),
      new Date(`${endYear}-12-31`)
    ).map((firstDayOfMonth) =>
      eachIntervalEndDateForMonth(
        eachIntervalStartDateForMonth(firstDayOfMonth)
      )
    );
  }

  willSendRequest(request: RequestOptions): void {
    request.params.set("api_key", process.env.NASA_API_KEY ?? "DEMO_KEY");
  }
}
