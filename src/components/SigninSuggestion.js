import React from "react";
import { Link } from "react-router-dom";

const SigninSuggestion = () => {
  return (
    <div className=" bg-white py-10">
      <div className="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-md py-6">
        <p className="text-xs md:text-sm">See personalized recommendations</p>
        <Link to={"/sign-in"}>
          {" "}
          <button className="w-60 bg-amber-300 border border-amber-500 py-1.5 drop-shadow-md rounded-md font-semibold hover:bg-amber-400 md:text-sm">
            Sign in
          </button>
        </Link>
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

export default SigninSuggestion;
