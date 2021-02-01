// Resolvers define the technique for fetching the types defined in the
// schema.
const resolvers = {
  Query: {
    closestNearEarthObject: async (
      _source: any,
      _args: any,
      { dataSources }: { dataSources: any }
    ) => {
      return dataSources.nasaNeoApi.getAsteroidClosestToEarthInRange(
        "2015-09-07",
        "2015-09-08"
      );
    },
  },
};
export default resolvers;
