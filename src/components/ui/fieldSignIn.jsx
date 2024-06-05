"use client";
import Link from "next/link";
import { Button } from "./button";
import { Switch } from "./switch";
import { useForm } from "react-hook-form";

const FieldSignIn = () => {
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
      <div className="mb-4">
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
              <span className="text-red-500 text-xs">
                Email tidak boleh kosong!
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1" htmlFor="password">
          Password<sup className="text-red-500"> *</sup>
        </label>
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
      <div className="flex justify-between items-center mt-5 mb-6">
        <label>
          <span className="flex items-center gap-2 text-sm text-gray-700">
            <Switch />
            Remember Me
          </span>
        </label>
        <Link href={""} className="group">
          <span className="text-sm text-red-500 group-hover:text-red-400 group-hover:underline ">
            Forget Password?
          </span>
        </Link>
      </div>
      <Button
        type="submit"
        className="w-full shadow-lg text-white py-2 px-4 rounded-md hover:bg-primaryCustom-700"
      >
        Sign In
      </Button>
    </form>
  );
};

export default FieldSignIn;
