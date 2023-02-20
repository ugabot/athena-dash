import { User } from "../api/types";

/**
 *
 * @param users - given an array of User objects.
 * @returns an array of the users' full names;
 */
export const getUsers = (users: User[]) =>
  users.length > 0 ? users.map((user) => user.full_name) : undefined;
