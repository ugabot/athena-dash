import { User } from "../api/types";

/**
 *
 * @param users - given an array of User objects.
 * @returns an arary of users with an income that
 *          is greater than 250_000
 */
export const incomeFilter = (users: User[]) =>
  users.length > 0 ? users?.filter(({ income }) => income > 250000) : undefined;
