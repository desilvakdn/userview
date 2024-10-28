import { useEffect, useState } from "react";
import { getUsers } from "../utils/user";

const useGetUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getUsers().then((response) => {
      setIsLoading(false);
      if (!response) {
        setIsError(true);
        return;
      }

      setUsers(response);
    });
  }, []);

  return { isLoading, isError, users };
};

export default useGetUsers;
