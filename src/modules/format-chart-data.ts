import { getFirstName } from "./alphabetical-sort";
import { eligibleAgeSort } from "./eligible-age-sort";
import { Data, User } from "../api/types";

/**
 *
 * @param users - given an array of users
 * @returns an object of arrays of the names, income,
 *    and age of the TWO qualifying OLDEST and ELIGIBLE
 *    users in a format suitable for the chart library
 *    (anychart-react).
 */
export const formatChartData = (users: User[]) => {
  const chartData: Data = [];
  const legendData: Data = [];
  const eligibleUsers = users.length > 0 ? eligibleAgeSort(users) : [];
  const qualifiedUsers = eligibleUsers?.slice(1).slice(-2);
  if (qualifiedUsers && qualifiedUsers.length > 0) {
    qualifiedUsers.forEach((user) => {
      let firstName = getFirstName(user.full_name);
      chartData.push([firstName, user.income]);
      legendData.push([firstName, user.age]);
    });
  }
  return { chartData, legendData };
};
