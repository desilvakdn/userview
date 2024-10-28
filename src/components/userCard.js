import React from "react";
import { useNavigate } from "react-router-dom";

const UserCard = ({ userinfo }) => {
  const navigate = useNavigate();
  const { id, name, username, email } = userinfo;

  const handleRouting = () => {
    navigate(`/user/${id}`);
  };

  return (
    <tr
      onClick={handleRouting}
      className="border-b select-none cursor-pointer hover:bg-gray-200 transition"
      role="button"
    >
      <td className="px-4 py-2">{id}</td>
      <td className="px-4 py-2">{name}</td>
      <td className="px-4 py-2">{username}</td>
      <td className="px-4 py-2 hidden md:block">{email}</td>
    </tr>
  );
};

export default React.memo(UserCard);
