import CONFIG from "../config/config";
import { toast } from "react-toastify";
import ERROR from "../lib/errorMessages";

export const getUsers = async () => {
  try {
    const response = await fetch(`${CONFIG.api}/users`);

    if (!response.ok) throw new Error(ERROR.usersNotFound);

    const users = await response.json();
    return users;
  } catch (error) {
    toast(error.message);
    return null;
  }
};

export const getUser = async (userid) => {
  try {
    const response = await fetch(`${CONFIG.api}/users/${userid}`);

    if (!response.ok) throw new Error(ERROR.userNotFound);

    const user = await response.json();
    return user;
  } catch (error) {
    toast(error.message);
    return null;
  }
};
