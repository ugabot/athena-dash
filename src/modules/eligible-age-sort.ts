import { User } from "../api/types";

/**
 *
 * @param users - given an array of User objects.
 * @returns an array of Users who are eligible sorted
 *          by age.
 */
export const eligibleAgeSort = (users: User[]) =>
  users.length > 0
    ? users
        .filter(({ eligible }) => eligible)
        .sort((userA: any, userB: any) => userA.age - userB.age)
    : undefined;
