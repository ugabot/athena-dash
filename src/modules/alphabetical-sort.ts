import { User } from "../api/types";

export const getFirstName = (fullName: string) =>
  fullName.split(" ").slice(0, -1).join(" ");

const getLastName = (fullName: string) =>
  fullName.split(" ").slice(-1).join(" ");

/**
 *
 * @param users - given an array of User objects
 * @returns the array of User objects sorted alphabetically
 *          by last name.
 */
export const alphabeticalSort = (users: User[]) =>
  users.length > 0
    ? users.sort((userA: User, userB: User) => {
        return getLastName(userA.full_name).localeCompare(
          getLastName(userB.full_name)
        );
      })
    : undefined;
