import React from "react";
import { Button } from "../ui/button";

const SignIn = () => {
  return (
    <div className="container mx-auto max-w-fit p-6 bg-slate-50 rounded-lg shadow-lg">
      <h1 className="text-left font-font-montserrat font-extrabold mb-8 text-6xl tracking-wide w-1/2">
        Sign In
      </h1>
      <div className="flex justify-start items-center mb-4">
        <hr className="border-2 w-24 border-primaryCustom-500 rounded-lg " />
        <h1 className="ml-2 text-primaryCustom-500 font-montserrat font-semibold text-lg tracking-wide">
          Sign in with
        </h1>
      </div>
      <div className="mt-4 flex justify-center group border gap-4">
        <Button className="bg-transparent tracking-wide border-2 border-primaryCustom-100 text-black hover:bg-primaryCustom-100 w-6/12">
          <svg
            className="size-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          Sign in with Google
        </Button>
        <Button className="bg-transparent tracking-wide border-2 border-primaryCustom-100 w-1/2 text-black hover:bg-primaryCustom-100">
          <svg
            className="size-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <path
              fill="#039be5"
              d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
            ></path>
            <path
              fill="#fff"
              d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
            ></path>
          </svg>
          Sign in with Facebook
        </Button>
      </div>
      <div className="mt-5 gap-2 flex justify-start items-center">
        <hr className="border-2 w-1/2 border-slate-200 rounded-lg " />
        <h1 className="text-primaryCustom-200 font-montserrat font-semibold text-lg tracking-wide">
          Or
        </h1>
        <hr className="border-2 w-1/2 border-slate-200 rounded-lg " />
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <div className="mb-4">
          <label for="username" className="block mb-2 text-sm font-medium">
            Username :
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label for="username" className="block mb-2 text-sm font-medium">
            Password :
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
