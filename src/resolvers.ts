// Resolvers define the technique for fetching the types defined in the
// schema.
const resolvers = {
  Query: {
    closestNearEarthObject: async (
      _source: any,
      { startDate, endDate }: { startDate: string; endDate: string },
      { dataSources }: { dataSources: any }
    ) =>
      dataSources.nasaNeoApi.getAsteroidClosestToEarthInRange(
        startDate,
        endDate
      ),
    largestNearEarthObjectsByMonth: async (
      _source: any,
      { startYear, endYear }: { startYear: string; endYear: string },
      { dataSources }: { dataSources: any }
    ) =>
      dataSources.nasaNeoApi.getLargestNearEarthObjectByMonth(
        startYear,
        endYear
      ),
  },
};
export default resolvers;
