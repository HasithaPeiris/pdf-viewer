import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Viewer = () => {
  const { id } = useParams();
  const uploadedFiles = JSON.parse(localStorage.getItem("uploadedFiles")) || [];
  const file = uploadedFiles[id];
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  if (!file) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-start pt-10 bg-gray-100">
        <div className="w-full max-w-md mx-auto bg-white p-6 sm:px-4 rounded-md shadow-md">
          <h1 className="text-2xl font-bold mb-4 text-center">
            File not found
          </h1>
          <Link to="/dashboard" className="btn w-full">
            Back
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-5 bg-base-200">
      <div className="w-max mx-auto bg-white p-6 sm:px-4 rounded-md shadow-lg mb-12">
        <div className="flex items-center justify-start">
          <Link to="/dashboard" className="btn btn-sm mr-4">
            Back
          </Link>
          <h1 className="text-2xl font-bold">{file.title}</h1>
        </div>
        <div className="mb-4 text-center">
          <div className="join mb-4">
            <button className="join-item btn btn-xs">{pageNumber}</button>
            <button className="join-item btn btn-xs btn-active">
              {numPages}
            </button>
          </div>

          <Document file={file.file} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.apply(null, Array(numPages))
              .map((x, i) => i + 1)
              .map((page) => {
                return (
                  <Page
                    pageNumber={page}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    className="mb-3"
                  />
                );
              })}
          </Document>
        </div>
      </div>
    </div>
  );
};

export default Viewer;
