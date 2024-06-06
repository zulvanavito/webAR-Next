import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const Section4 = () => {
  return (
    <div id="komunitas" className="bg-gradient-to-br from-indigo-900 via-blue-900 to-fuchsia-900 rounded-3xl p-16 text-center text-white flex flex-col items-center py-16 m-12">
      <h2 className="text-3xl font-bold mb-4">Join the community today</h2>
      <p className="text-center mb-4 px-4 md:px-4">
        Web AR dan VR adalah teknologi baru yang menarik yang membuka dunia
        kemungkinan baru. Dengan Web AR dan VR, Anda dapat membuat pengalaman
        imersif yang memungkinkan pengguna untuk berinteraksi dengan konten
        digital di dunia nyata.
      </p>
      <span className="text-center mb-8 px-4 md:px-4">
        Jika Anda tertarik dengan Web AR dan VR, kami mengundang Anda untuk
        bergabung dengan komunitas kami!
      </span>
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
