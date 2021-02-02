// Resolvers define the technique for fetching the types defined in the
// schema.
const resolvers = {
  Query: {
    closestNearEarthObject: async (
      _source: any,
      { startDate, endDate }: { startDate: string; endDate: string },
      { dataSources }: { dataSources: any }
    ) => {
      return dataSources.nasaNeoApi.getAsteroidClosestToEarthInRange(
        startDate,
        endDate
      );
    },
  },
};
export default resolvers;
