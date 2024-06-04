// "use client";
import React from "react";
import Google from "../ui/svg/Google";
import BackButton from "../ui/BackButton";
import { Button } from "../ui/button";
import Facebook from "../ui/svg/Facebook";
import Link from "next/link";
import FieldSignUp from "../ui/fieldSignUp";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-self-center">
      <div className="container max-w-md w-fit p-6 ">
        <div className="flex flex-col justify-start gap-2">
          <Link href={"/"}>
            <BackButton />
          </Link>
          <span className="mt-4 text-left font-font-montserrat font-extrabold text-6xl tracking-wide">
            Sign Up
          </span>
        </div>
        <div className="flex justify-start items-center mt-6 mb-6">
          <hr className="border-2 w-24 border-primaryCustom-500 rounded-lg " />
          <span className="ml-2 text-primaryCustom-500 font-montserrat font-medium text-lg tracking-wide">
            Sign up with
          </span>
        </div>
        <div className="mt-4 flex justify-center group gap-4">
          <Button className="shadow-md w-1/2 bg-transparent tracking-wide border border-primaryCustom-100 text-black  hover:bg-primaryCustom-100">
            <Google />
            Sign up with Google
          </Button>
          <Button className="shadow-md w-1/2 bg-transparent tracking-wide border border-primaryCustom-100 text-black  hover:bg-primaryCustom-100">
            <Facebook />
            Sign up with Facebook
          </Button>
        </div>
        <div className="flex items-center mt-6 mb-6">
          <div className="flex-grow border-t border-primaryCustom-100"></div>
          <span className="mx-4 text-primaryCustom-200">Or</span>
          <div className="flex-grow border-t border-primaryCustom-100"></div>
        </div>
        <FieldSignUp/>
      </div>
    </div>
  );
};

export default SignUp;
