import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const Section = () => {
  return (
    <section id="product" className="mx-14 text-center mt-8">
      <h1 className="text-[65px] mb-2 font-black">Platform AR & WebAR</h1>
      <p className="mb-5">
        Alat pembuatan AR yang mudah digunakan. <br></br>Pengembangan WebAR yang
        intuitif.
      </p>
      <div className="flex mb-4 justify-center space-x-4">
        <Link href={'/signup'}>
          <Button className="bg-primaryCustom-500 hover:bg-primaryCustom-700 text-white rounded-lg">
            Join Now
          </Button>
        </Link>
      </div>
      <div className="flex justify-center">
        <Image
          className="size-2/5 mt-2"
          src="/images/section.png"
          alt="Gambar Section"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
};

export default Section;
