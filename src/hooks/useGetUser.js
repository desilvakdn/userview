import { useEffect, useState } from "react";
import { getUser } from "../utils/user";

const useGetUser = (userid) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser(userid).then((response) => {
      setIsLoading(false);
      if (!response) {
        setIsError(true);
        return;
      }

      setUser(response);
    });
  }, [userid]);

  return { isLoading, isError, user };
};

export default useGetUser;
