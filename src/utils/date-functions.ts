export function eachMonthOfInterval(startDate: Date, endDate: Date) {
  const endTime = endDate.getTime();
  const dates = [];

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError("Invalid interval");
  }

  const currentDate = startDate;
  // Adjust for DST and UTC offset, 15 is a safe bet
  currentDate.setHours(15, 0, 0, 0);
  currentDate.setDate(1);

  while (currentDate.getTime() <= endTime) {
    dates.push(new Date(currentDate));
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  return dates;
}

/* Create start dates for intervals of maximum 7 days spanning the whole month e.g. 1, 8, 15, 22 and 29 */
export function eachIntervalStartDateForMonth(startDate: date) {
  const intervalStartDates = [];
  intervalStartDates.push(startDate);
  const nextDate = new Date(startDate);
  nextDate.setDate(startDate.getDate() + 7);
  while (nextDate.getMonth() === startDate.getMonth()) {
    intervalStartDates.push(new Date(nextDate));
    nextDate.setDate(nextDate.getDate() + 7);
  }
  return intervalStartDates;
}

/* create end date for each start date e.g. 1-7, 8-14, 15-21, 22-28 and 29-30 */
export function eachIntervalEndDateForMonth(startDates: Date[]) {
  return startDates.map((startDate) => {
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);
    while (endDate.getMonth() !== startDate.getMonth())
      endDate.setDate(endDate.getDate() - 1);
    return [startDate, endDate];
  });
}
