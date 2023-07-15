import React from "react";

const Signin = () => {
  return (
    <div className=" bg-white py-10">
      <div className="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-md py-6">
        <p className="text-xs md:text-sm">See personalized recommendations</p>
        <button className="w-60 bg-amber-300 border border-amber-500 py-1.5 rounded-md font-semibold hover:bg-amber-400 md:text-sm">
          Sign in
        </button>
        <p className="text-xs">
          New Customer?
          <span className="cursor-pointer ml-2 text-sky-900 hover:underline">
            Start here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
