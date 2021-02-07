import {
  eachMonthOfInterval,
  eachIntervalStartDateForMonth,
  eachIntervalEndDateForMonth,
} from "../date-functions";
describe("[date-functions.eachMonthOfInterval]", () => {
  it("should generate every month between start year and end year", async () => {
    const intervals = eachMonthOfInterval(
      new Date("2017-01-01"),
      new Date("2019-12-31")
    );
    expect(intervals).toMatchSnapshot();
    const sameYearIntervals = eachMonthOfInterval(
      new Date("2017-01-01"),
      new Date("2017-12-31")
    );
    expect(sameYearIntervals).toMatchSnapshot();
  });
});
describe("[date-functions.eachIntervalStartDateForMonth]", () => {
  it("should generate start dates for max 7 days intervals of the months for January 2017", async () => {
    const date = new Date("2017-01-01t13:00:00.000z");
    const januaryMonthsIntervalStartDates = eachIntervalStartDateForMonth(date);
    expect(januaryMonthsIntervalStartDates).toMatchSnapshot();
  });
  it("should generate start dates for max 7 days intervals of the months for February 2017", async () => {
    const date = new Date("2017-02-01t13:00:00.000z");
    const februaryMonthsIntervalStartDates = eachIntervalStartDateForMonth(
      date
    );
    expect(februaryMonthsIntervalStartDates).toMatchSnapshot();
  });
  it("should generate start dates for max 7 days intervals of the months for April 2017", async () => {
    const date = new Date("2017-04-01t13:00:00.000z");
    const aprilMonthsIntervalStartDates = eachIntervalStartDateForMonth(date);
    expect(aprilMonthsIntervalStartDates).toMatchSnapshot();
  });
  it("should generate start dates for max 7 days intervals of the months for February 2020 (leap year)", async () => {
    const date = new Date("2020-02-01t13:00:00.000z");
    const leapYearMonthsIntervalStartDates = eachIntervalStartDateForMonth(
      date
    );
    expect(leapYearMonthsIntervalStartDates).toMatchSnapshot();
  });
});
describe("[date-functions.eachIntervalEndDateForMonth]", () => {
  it("should generate end dates for max 7 days intervals of the months for January 2017", async () => {
    const januaryIntervalsWithStartAndEndDate = eachIntervalEndDateForMonth(
      eachIntervalStartDateForMonth(new Date("2017-01-01t13:00:00.000z"))
    );
    expect(januaryIntervalsWithStartAndEndDate).toMatchSnapshot();
  });
  it("should generate end dates for max 7 days intervals of the months for February 2017", async () => {
    const februaryIntervalsWithStartAndEndDate = eachIntervalEndDateForMonth(
      eachIntervalStartDateForMonth(new Date("2017-02-01t13:00:00.000z"))
    );
    expect(februaryIntervalsWithStartAndEndDate).toMatchSnapshot();
  });
  it("should generate end dates for max 7 days intervals of the months for April 2017", async () => {
    const aprilIntervalsWithStartAndEndDate = eachIntervalEndDateForMonth(
      eachIntervalStartDateForMonth(new Date("2017-04-01t13:00:00.000z"))
    );
    expect(aprilIntervalsWithStartAndEndDate).toMatchSnapshot();
  });
  it("should generate end dates for max 7 days intervals of the months for February 2020 (leap year)", async () => {
    const leapYearIntervalsWithStartAndEndDate = eachIntervalEndDateForMonth(
      eachIntervalStartDateForMonth(new Date("2020-02-01t13:00:00.000z"))
    );
    expect(leapYearIntervalsWithStartAndEndDate).toMatchSnapshot();
  });
});
