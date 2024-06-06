import { React } from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MenuNav from "../menu-nav/MenuNav";

export default function NavBar() {
  return (
    <nav className="flex justify-between mx-5 mt-3 items-center bg-white">
      <Image
        alt="Logo Ganesha Inovasi Teknologi"
        src="/images/test_logo.png"
        width={100}
        height={100}
      />
      <MenuNav />
      <div className="flex justify-start gap-2">
        <div className="group">
          <Link href={"/login"}>
            <Button className="bg-transparent font-sans rounded-lg font-medium text-primaryCustom-500 group-hover:bg-transparent group-hover:font-medium group-hover:outline group-hover:outline-1">
              Sign In
            </Button>
          </Link>
        </div>
        <Link href={"/signup"}>
          <Button className="bg-primaryCustom-500 font-sans rounded-lg font-medium hover:bg-primaryCustom-700">
            Sign Up Free
            <MoveRight className="ml-2" color="#F5F7F8" strokeWidth={2} />
          </Button>
        </Link>
      </div>
    </nav>
  );
}
