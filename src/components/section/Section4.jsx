import { Container } from "postcss";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const Section4 = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-fuchsia-900 rounded-3xl p-16 text-center text-white flex flex-col items-center py-16 m-12">
      <h2 className="text-3xl font-bold mb-4">Join the community today</h2>
      <p className="text-center mb-8 px-4 md:px-0">Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
      <Link href={"/signup"}>
          <Button className="bg-primaryCustom-500 font-sans rounded-lg font-medium hover:bg-primaryCustom-700">
            Sign Up Free
            <MoveRight className="ml-2" color="#F5F7F8" strokeWidth={2} />
          </Button>
        </Link>
    </div>
  );
};

export default Section4;
