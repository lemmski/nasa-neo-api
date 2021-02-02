import { gql } from "apollo-server";
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type DiameterMinMax {
    estimated_diameter_min: Float
    estimated_diameter_max: Float
  }

  type NearEarthObjectLinks {
    self: String
  }

  type EstimatedDiameters {
    feet: DiameterMinMax
    kilometers: DiameterMinMax
    meters: DiameterMinMax
    miles: DiameterMinMax
  }

  type MissDistances {
    astronomical: String
    kilometers: String
    lunar: String
    miles: String
  }

  type RelativeVelocities {
    kilometers_per_hour: String
    kilometers_per_second: String
    miles_per_hour: String
  }

  type CloseApproach {
    close_approach_date: String
    close_approach_date_full: String
    epoch_date_close_approach: Int
    miss_distance: MissDistances
    orbiting_body: String
    relative_velocity: RelativeVelocities
  }

  type NearEarthObject {
    absolute_magnitude_h: Float
    close_approach_data: [CloseApproach]
    estimated_diameter: EstimatedDiameters
    id: ID
    is_potentially_hazardous_asteroid: Boolean
    is_sentry_object: Boolean
    links: NearEarthObjectLinks
    name: String
    nasa_jpl_url: String
    neo_reference_id: ID
  }

  type Query @cacheControl(maxAge: 6000) {
    closestNearEarthObject(
      startDate: String!
      endDate: String!
    ): NearEarthObject
  }
`;
export default typeDefs;
