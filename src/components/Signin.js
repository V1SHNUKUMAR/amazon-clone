import React from "react";
import { useEffect } from "react";

const Signin = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-3 pb-0 w-full min-h-[90vh] bg-white">
      <div className="space-y-2 mx-auto max-w-sm pt-4 pb-10">
        <form
          action=""
          onSubmit={handleSubmit}
          className="px-4 py-8 border space-y-5 rounded-lg sm:p-7"
        >
          <h1 className="text-2xl sm:text-3xl">Sign in</h1>
          <div className="space-y-1">
            <label
              className="font-semibold sm:text-sm"
              htmlFor="EmailOrPhoneNo"
            >
              Email or mobile phone number
            </label>
            <input
              className="w-full border border-gray-500 outline-sky-300 p-2.5 rounded-md sm:text-sm sm:p-1.5 sm:px-2 sm:rounded-sm"
              type="text"
              minLength="4"
              required
              placeholder="Enter your email or phone number"
            />
          </div>
          <button
            className="SUBMIT w-full bg-yellow-300 p-2.5 rounded-lg drop-shadow-md hover:bg-yellow-400 transition-colors sm:p-1.5 sm:text-sm"
            type="submit"
          >
            Continue
          </button>
          <p className="text-sm sm:leading-5 sm:text-xs">
            By continuing, you agree to Amazon's{" "}
            <span className="text-blue-800 cursor-pointer hover:underline hover:text-orange-700">
              Conditions of Use
            </span>{" "}
            and{" "}
            <span className="text-blue-800 cursor-pointer hover:underline hover:text-orange-700">
              Privacy Notice.
            </span>
          </p>
          <div className="w-fit space-x-2 pt-2 text-sm text-blue-800 cursor-pointer hover:underline hover:text-orange-700">
            <i className="fa-solid fa-caret-right text-gray-500"></i>
            <span>Need Help?</span>
          </div>
        </form>
        <div className="flex justify-between items-center gap-4 pt-6 pb-2">
          <div className="RAY flex-1 border"></div>
          <span className=" text-gray-500 text-sm sm:text-xs">
            New to Amazon?{" "}
          </span>
          <div className="RAY flex-1 border"></div>
        </div>
        <button className="bg-white w-full border border-gray-300 p-2.5 text-sm rounded-lg drop-shadow-md hover:bg-gray-50 sm:p-1.5">
          Create your Amazon Account
        </button>
      </div>
      <hr />
      <footer className="w-full space-y-3 pt-10 pb-32 text-xs bg-gradient-to-r from-white via-gray-50 to-white p-4">
        <div className="flex justify-center items-center gap-6">
          <p className="text-blue-800 cursor-pointer hover:underline hover:text-orange-700">
            Conditions of Use
          </p>
          <p className="text-blue-800 cursor-pointer hover:underline hover:text-orange-700">
            Privacy notice
          </p>
          <p className="text-blue-800 cursor-pointer hover:underline hover:text-orange-700">
            Help
          </p>
        </div>
        <div className="text-center">
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </div>
      </footer>
    </div>
  );
};

export default Signin;
