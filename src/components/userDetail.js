import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetUser from "../hooks/useGetUser";
import UserInfoContainer from "./userDetail/userInfoContainer";
import UserNotFound from "./userDetail/userNotFound";
import Loading from "./loading";

const UserDetail = () => {
  const { userid } = useParams();
  const navigate = useNavigate();
  const { isLoading, user } = useGetUser(userid);

  const handleNavigation = () => {
    return navigate("/");
  };

  if (isLoading) return <Loading />;

  return (
    <div className="mt-10 inline-flex items-center justify-center w-full">
      <div className="w-full max-w-[600px] min-h-[400px]">
        <button
          onClick={handleNavigation}
          className="bg-gray-800 px-4 text-white rounded"
        >
          {"Back"}
        </button>
        <div className="p-4 w-full rounded-lg mt-4 border border-gray-300">
          {user ? <UserInfoContainer user={user} /> : <UserNotFound />}
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
