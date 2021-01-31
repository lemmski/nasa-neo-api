import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

interface FeedResponse {
  element_count: number
  links: FeedResponseLinks
  near_earth_objects: NearEarthObjectsByDate
}

interface NearEarthObjectsByDate {
  [index: string]: NearEarthObject[];
}

interface FeedResponseLinks {
  next: string
  prev: string
  self: string
}

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
  feet: number
  kilometers: number
  meters: number
  miles: number
}

interface NearEarthObjectLinks {
  self: string
}

interface MissDistance {
  astronomical: string
  kilometers: string
  lunar: string
  miles: string
}

interface DiamaterMeasurement {
  estimated_diameter_max: number
  estimated_diameter_min: number
}

export default class NasaNeoAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.nasa.gov/";
  }

  smallestDistanceFilteredValue(nearEarthObject: NearEarthObject): number {
    // We might have multiple passes in the date range
    return Math.min(
      ...nearEarthObject.close_approach_data
        .map((closeApproach) =>
          parseFloat(closeApproach.miss_distance.astronomical)
        )
        .filter(
          (astronomicalDistance) =>
            astronomicalDistance !== Infinity &&
            astronomicalDistance !== -Infinity &&
            !isNaN(astronomicalDistance)
        )
    );
  }

  async getAsteroidClosestToEarthInRange(startDate: string, endDate: string) {
    const data: FeedResponse = await this.get("neo/rest/v1/feed", {
      start_date: startDate,
      end_date: endDate,
    });
    return Object.values(data?.near_earth_objects)
      .flatMap((nearEarthObject: NearEarthObject[]) => nearEarthObject)
      .sort((a, b) => {
        return (
          this.smallestDistanceFilteredValue(a) - this.smallestDistanceFilteredValue(b)
        );
      })[0];
  }

  willSendRequest(request: RequestOptions) {
    request.params.set("api_key", process.env.NASA_API_KEY ?? "DEMO_KEY");
  }
}
