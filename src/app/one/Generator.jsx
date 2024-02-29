"use client";
import React from "react";

const Generator = () => {
  return (
    <div className=" flex flex-col">
      <div className="flex bg-blue-500 justify-center w-full">
        <h1 className="flex justify-center text-white">ID Card generator</h1>
      </div>
      <div className="flex bg-slate-500">
      <div className="flex flex-col w-1/2 items-center text-lg">
    <h1>Imput Form</h1>
      </div>
      <div className="flex flex-col w-1/2 items-center text-lg">
    <h1>Generated Card</h1>
      </div>
      </div>
    </div>
  );
};

export default Generator;
