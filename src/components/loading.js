import React from "react";
import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
  return (
    <div className="mt-10 inline-flex items-center justify-center w-full">
      <div className="p-4 w-full max-w-[600px] min-h-[300px] rounded-lg border border-gray-300 flex flex-col justify-center items-center ">
        <h4>Please Wait</h4>
        <label>We are Fetching Your User Data</label>
        <HashLoader className="mt-4" />
      </div>
    </div>
  );
};

export default Loading;
