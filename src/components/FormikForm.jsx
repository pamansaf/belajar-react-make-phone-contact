import React from "react";
import Navbar from "./Navbar";

const FormikForm = () => {
  return (
    <div className="w-1/2 min-h-screen mx-auto">
      <Navbar />
      <div className="w-[65%] py-4 px-8 mx-auto bg-indigo-50 border rounded-lg shadow-md my-8">
        <h3 className="font-bold text-color text-2xl py-3 text-center">
          Register Form
        </h3>
        <form className="flex flex-col gap-4 py-2">
          <div className="flex flex-col gap-1 text-sm">
            <label htmlFor="name" className="font-semibold">
              Username *
            </label>
            <input
              id="name"
              type="text"
              className="outline-1 outline-indigo-200 border border-indigo-200 py-1 px-3 rounded "
            />
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <label htmlFor="email" className="font-semibold">
              Email *
            </label>
            <input
              id="email"
              type="email"
              className="outline-1 outline-indigo-200 border border-indigo-200 py-1 px-3 rounded"
            />
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <label htmlFor="password" className="font-semibold">
              Password *
            </label>
            <input
              id="password"
              type="password"
              className="outline-1 outline-indigo-200 border border-indigo-200 py-1 px-3 rounded"
            />
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <label htmlFor="confirmPassword" className="font-semibold">
              Confirm Password *
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="outline-1 outline-indigo-200 border border-indigo-200 py-1 px-3 rounded"
            />
          </div>
          <div className="flex gap-3 text-sm">
            <input
              id="agreement"
              type="checkbox"
              className="outline-1 outline-indigo-200 border border-indigo-200 py-1 px-3 rounded"
            />
            <label htmlFor="agreement" className="font-semibold">
              I agree to Term ogf Services *
            </label>
          </div>
          <button type="submit" className="btn-register">
            Register
          </button>
          <p className="text-sm mx-auto">
            Do you have an account ?{" "}
            <span className="text-color font-semibold hover:underline cursor-pointer">
              Sign In
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default FormikForm;
