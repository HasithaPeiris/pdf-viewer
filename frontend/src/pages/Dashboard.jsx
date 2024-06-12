import React, { useState } from "react";

const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  const submitFile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    console.log(title, file);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-10 bg-base-200">
      <div className="card w-full max-w-md mx-auto bg-base-100 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Upload PDF Files
        </h1>
        <form onSubmit={submitFile}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              File Name
            </label>
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered w-full"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Upload Files
            </label>
            <input
              type="file"
              accept="application/pdf"
              className="file-input file-input-bordered w-full"
              required
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="mb-4">
            <button className="btn w-full" type="submit">
              Upload
            </button>
          </div>
        </form>
      </div>
      <div className="w-full max-w-md mx-auto mt-6">
        <div className="card bg-base-100 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">Uploaded Files</h2>
          <ul className="list-disc list-inside">
            <li className="text-gray-700">File name</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
