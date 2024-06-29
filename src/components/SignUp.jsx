import React from "react";
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";

function SignUp() {
  return (
    <div className="flex items-center justify-center mt-8 ">
      <div className="w-full max-w-sm p-6 bg-gray-800 rounded-lg">
        <h2 className="text-center text-white mb-4">
          Welcome To Codepen <span>🚀</span>
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-400">
              Email
            </label>
            <div className="flex items-center mt-1">
              <span className="inline-block bg-gray-700 p-3.5 rounded-l">
              <IoMdMail />
              </span>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 text-gray-200 bg-gray-700 border border-gray-600 rounded-r focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm text-gray-400">
              Password
            </label>
            <div className="flex items-center mt-1">
              <span className="inline-block bg-gray-700 p-3.5 rounded-l">
              <RiLockPasswordFill />
              </span>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 text-gray-200 bg-gray-700 border border-gray-600 rounded-r focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-gray-400 mt-4">
          Already have an account?{" "}
          <a href="#" className="text-green-500 hover:underline">
            Login here
          </a>
        </p>
        <div className="flex items-center justify-center mt-4">
          <div className="w-full border-b border-gray-600" />
          <span className="text-gray-400 mx-2">OR</span>
          <div className="w-full border-b border-gray-600" />
        </div>
        <button className="mt-4 w-full px-4 py-2 text-gray-900 bg-gray-300 rounded flex items-center justify-center hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/google.svg"
            alt="Google icon"
            className="w-6 h-6 mr-2"
          />
          Sign in with Google
        </button>
        <div className="flex items-center justify-center mt-4">
          <div className="w-full border-b border-gray-600" />
          <span className="text-gray-400 mx-2">OR</span>
          <div className="w-full border-b border-gray-600" />
        </div>
        <button className="mt-4 w-full px-4 py-2 text-gray-900 bg-gray-300 rounded flex items-center justify-center hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/github.svg"
            alt="Github icon"
            className="w-6 h-6 mr-2"
          />
          Sign in with Github
        </button>
      </div>
    </div>
  );
}

export default SignUp;
