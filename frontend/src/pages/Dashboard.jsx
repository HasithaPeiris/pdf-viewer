import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const savedFiles = JSON.parse(localStorage.getItem("uploadedFiles")) || [];
    setUploadedFiles(Array.isArray(savedFiles) ? savedFiles : []);
  }, []);

  const saveFilesToLocalStorage = (files) => {
    localStorage.setItem("uploadedFiles", JSON.stringify(files));
  };

  const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const submitFile = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (file && file.size > 5 * 1024 * 1024) {
      setErrorMessage(
        "File size exceeds 5MB limit. Please choose a smaller file."
      );
      return;
    }

    if (title && file) {
      const base64File = await readFileAsBase64(file);
      const newFile = {
        title,
        file: base64File,
        name: file.name,
      };
      const updatedFiles = [...uploadedFiles, newFile];
      setUploadedFiles(updatedFiles);
      saveFilesToLocalStorage(updatedFiles);
      setTitle("");
      setFile(null);
    }
  };

  const deleteFile = (index) => {
    const updatedFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(updatedFiles);
    saveFilesToLocalStorage(updatedFiles);
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
          {errorMessage && (
            <div className="mb-4 text-red-500">{errorMessage}</div>
          )}
          <div className="mb-4">
            <button className="btn w-full" type="submit">
              Upload
            </button>
          </div>
        </form>
      </div>
      <div className="w-full max-w-md mx-auto mt-6">
        {uploadedFiles.length > 0 && (
          <div className="bg-base-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Uploaded Files</h2>
            <ul className="list-disc list-inside">
              {uploadedFiles.map((uploadedFile, index) => (
                <li
                  key={index}
                  className="text-gray-700 flex justify-between items-center mb-4"
                >
                  <span>{uploadedFile.title}</span>
                  <div>
                    <Link
                      to={`/viewer/${index}`}
                      className="btn btn-sm btn-primary mr-2"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => deleteFile(index)}
                      className="btn btn-sm btn-outline btn-error"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
