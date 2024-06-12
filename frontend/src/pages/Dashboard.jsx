import React from "react";

const Dashboard = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Title"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="file"
        className="file-input file-input-bordered w-full max-w-xs"
      />
    </>
  );
};

export default Dashboard;
