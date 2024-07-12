import React from "react";
import { Button } from "../ui/button";
import Google from "../ui/svg/Google";
import Facebook from "../ui/svg/Facebook";
import BackButton from "../ui/BackButton";
import Link from "next/link";
import FieldSignIn from "../ui/fieldSignIn";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-self-center">
      <div className="container max-w-md w-fit p-6 ">
        <Link href={"/"}>
          <BackButton />
        </Link>
        <div className="flex flex-col justify-start gap-2">
          <span className="mt-4 text-left font-font-montserrat font-extrabold text-6xl tracking-wide">
            Sign In
          </span>
        </div>
        <div className="flex justify-start items-center mt-6 mb-6">
          <hr className="border-2 w-24 border-primaryCustom-500 rounded-lg " />
          <span className="ml-2 text-primaryCustom-500 font-montserrat font-medium text-lg tracking-wide">
            Sign in with
          </span>
        </div>
        <div className="mt-4 flex justify-center group gap-4">
          <Button className="shadow-md w-1/2 bg-transparent tracking-wide border border-primaryCustom-100 text-black  hover:bg-primaryCustom-100">
            <Google />
            Sign in with Google
          </Button>
          <Button className="shadow-md w-1/2 bg-transparent tracking-wide border border-primaryCustom-100 text-black  hover:bg-primaryCustom-100">
            <Facebook />
            Sign in with Facebook
          </Button>
        </div>
        <div className="flex items-center mt-6 mb-4">
          <div className="flex-grow border-t border-primaryCustom-100"></div>
          <span className="mx-4 text-primaryCustom-200">Or</span>
          <div className="flex-grow border-t border-primaryCustom-100"></div>
        </div>
        <FieldSignIn />
        <div className="flex justify-center mt-5">
          <Link
            className="font-medium text-primaryCustom-500 text-sm hover:text-primaryCustom-400 hover:underline"
            href={"/signup"}
          >
            <p>Create an account?</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
