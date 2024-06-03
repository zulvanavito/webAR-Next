import React from "react";
import { Button } from "../ui/button";

const FormSignIn = () => {
  return (
    <div className="container mx-auto flex flex-row">
      <h1 className="">Sign In</h1>
      <h1>Sign in with</h1>
      <div>
        <Button>Sign in with Google</Button>
        <Button>Sign in with Facebook</Button>
      </div>
    </div>
  );
};

export default FormSignIn;
