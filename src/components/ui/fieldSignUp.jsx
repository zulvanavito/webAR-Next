import React from "react";
import { Button } from "./button";
import { Checkbox } from "./checkbox";

const FieldSignUp = () => {
  return (
    <form>
      <div className="flex justify-center gap-4 justify-items-center mb-4">
        <div className="mb-4 ">
          <label className="block text-gray-700 mb-1" htmlFor="email">
            Name<sup className="text-red-500"> *</sup>
          </label>
          <input
            className="shadow-md w-full px-3 py-2 border rounded-md"
            type="name"
            required
            id="name"
            name="name"
          />
        </div>
        <div className="mb-4 ">
          <label className="block text-gray-700 mb-1" htmlFor="email">
            Email<sup className="text-red-500"> *</sup>
          </label>
          <input
            className="shadow-md w-full px-3 py-2 border rounded-md"
            type="email"
            required
            id="email"
            name="email"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1" htmlFor="password">
          Password<sup className="text-red-500"> *</sup>
        </label>
        <input
          className="shadow-md w-full px-3 py-2 border rounded-md"
          type="password"
          required
          id="password"
          name="password"
        />
      </div>
      <div className="flex items-center justify-start mt-5 mb-6">
        <Checkbox />
        <label>
          <span className="ml-2 text-sm text-gray-700">
            I agree to terms & condition
          </span>
        </label>
      </div>
      <Button
        type="submit"
        className="w-full shadow-lg text-white py-2 px-4 rounded-md hover:bg-primaryCustom-700"
      >
        Sign Up
      </Button>
    </form>
  );
};

export default FieldSignUp;
