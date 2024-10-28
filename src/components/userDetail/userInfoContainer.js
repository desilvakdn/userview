import React from "react";

const UserInfoContainer = ({ user }) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center sm:justify-between border-b pb-4">
        <div className="flex flex-col items-start">
          <h2>{user.name}</h2>
          <span>@{user.username}</span>
          <a
            href="mailto:{{ email }}"
            className="text-blue-500 hover:underline"
          >
            {user.email}
          </a>
        </div>
      </div>

      <div className="mt-4 border-b pb-4">
        <h5>Address</h5>
        <p className="text-gray-600">
          {user.address.street}, {user.address.suite} <br />
          {user.address.city}, {user.address.zipcode}
        </p>
        <p className="text-gray-600 mt-2">
          <strong>Latitude:</strong> {user.address.geo.lat} <br />
          <strong>Longitude:</strong> {user.address.geo.lng}
        </p>
      </div>

      <div className="mt-4 border-b pb-4 ">
        <h5>Contact Info</h5>
        <p className="text-gray-600">
          <strong>Phone:</strong> {user.phone}
        </p>
      </div>

      <div className="mt-4">
        <h5>Company</h5>
        <p className="text-gray-600">
          <strong>{user.company.name}</strong> <br />
          {user.company.catchPhrase} <br />
          {user.company.bs}
        </p>
      </div>
    </>
  );
};

export default UserInfoContainer;
