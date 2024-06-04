import React from "react";
import { Button } from "./button";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  return (
    <>
      <Button className="bg-transparent border shadow-md rounded-full hover:bg-primaryCustom-100 max-w-fit">
        <ArrowLeft className="text-black justify-start"/>
      </Button>
    </>
  );
};

export default BackButton;
