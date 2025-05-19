import React from "react";

const NotFound = () => {
  return (
    <>
      <div  className="flex  border-s-4 justify-center border-red-700 bg-red-50 p-4 w-full">
        <div className="flex gap-2 flex-col justify-center items-center text-red-700">
          <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24"fill="currentColor"className="size-5"></svg>
          <strong className="flex font-medium text-center"> Something went wrong </strong>
          
        <a href="/" className="bg-red-400 text-white px-2 py-1 rounded-md transition hover:bg-red-950">Go Back</a>
        </div>
        </div>

  
    </>
  );
};

export default NotFound;
