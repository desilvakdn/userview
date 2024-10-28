import React from "react";
import useGetUsers from "../hooks/useGetUsers";
import UserCard from "./userCard";
import Loading from "./loading";
import UsersNotFound from "./userList/usersNotFound";

const UserList = () => {
  const { isLoading, users } = useGetUsers();

  if (isLoading) return <Loading />;
  if (!users) return <UsersNotFound />;
  return (
    <div className="container mx-auto px-4 mt-10 max-w-[1000px]">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto rounded overflow-hidden">
          <thead className="bg-gray-800 text-white text-left">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2 hidden md:block">Email</th>
            </tr>
          </thead>
          <tbody className="">
            {users.map((user) => (
              <UserCard key={user.id} userinfo={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
