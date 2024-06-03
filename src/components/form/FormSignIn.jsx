import React from "react";
import { Button } from "../ui/button";

const FormSignIn = () => {
  return (
    <div className="container mx-auto max-w-md p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-left font-extrabold mb-8 text-4xl">Sign In</h1>

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
    </div>
  );
};

export default FormSignIn;
