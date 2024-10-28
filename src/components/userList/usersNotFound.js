import React from "react";

const UsersNotFound = () => {
  return (
    <div className="container mx-auto px-4 mt-10 max-w-[1000px]">
      <div className="overflow-x-auto flex flex-col items-center justify-center opacity-50">
        <h3>Something Went Wrong!</h3>
        <label>
          It looks like there is a problem with server! Please try again
        </label>
      </div>
    </div>
  );
};

export default UsersNotFound;
