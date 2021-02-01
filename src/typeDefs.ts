import { gql } from "apollo-server";
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

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

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    closestNearEarthObject: NearEarthObject
  }
`;
export default typeDefs;
