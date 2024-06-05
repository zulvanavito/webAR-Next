"use client";
import { useForm } from "react-hook-form";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import Link from "next/link";

const FieldSignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-center gap-2 justify-items-center mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="email">
            Name<sup className="text-red-500"> *</sup>
          </label>
          <input
            className="shadow-md px-3 py-2 border rounded-md"
            type="name"
            id="name"
            {...register("name", { required: true })}
          />
          <div>
            {errors.name && (
              <span className="text-red-500 text-xs">Nama harus di isi!</span>
            )}
          </div>
        </div>
        <div className="mb-4 ">
          <label className="block text-gray-700 mb-1" htmlFor="email">
            Email<sup className="text-red-500"> *</sup>
          </label>
          <input
            className="shadow-md w-full px-3 py-2 border rounded-md"
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
          <div>
            {errors.email && (
              <span className="text-red-500 text-xs">Email harus di isi!</span>
            )}
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex justify-between font-medium">
        <label className="block text-gray-700 mb-1" htmlFor="password">
          Password<sup className="text-red-500"> *</sup>
        </label>
        <span className="text-red-500 hover:text-red-400 hover:underline text-sm">Forgot Password?</span>
        </div>
        <input
          className="shadow-md w-full px-3 py-2 border rounded-md"
          type="password"
          id="password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-red-500 text-xs">Password harus di isi!</span>
        )}
      </div>
      <div className="flex items-center justify-start mt-5">
        <Checkbox />
        <label>
          <span className="ml-2 text-sm text-gray-700">
            I agree to terms & condition
          </span>
          <div></div>
        </label>
      </div>

      <Button
        type="submit"
        className="w-full mt-6 shadow-lg text-white py-2 px-4 rounded-md hover:bg-primaryCustom-700"
      >
        Sign Up
      </Button>
      <div className="flex justify-center justify-items-center mt-5">
        <p className="font-medium text-sm">
          Do you already have an account?
          <Link href={"/login"}>
            <span className="font-medium text-sm ml-1 text-primaryCustom-500 hover:text-primaryCustom-400 hover:underline">
              Log in
            </span>
          </Link>
        </p>
      </div>
    </form>
  );
};

export default FieldSignUp;
