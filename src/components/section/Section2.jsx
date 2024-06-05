import Image from "next/image";
import ArrowRight from "../ui/ArrowRight";

const Section2 = () => {
  return (
    <div id="services" className="flex justify-between mx-12 ">
      <div className="mt-36 mb-36 w-fit p-10 ">
        <p className="mt-12 font-extrabold text-5xl">
          Dapatkan semua fitur yang Anda butuhkan!
        </p>
        <p className="mt-14 text-justify">
        Dengan fitur yang memudahkan anda dalam merancang kebutuhan AR anda bersama
        </p>
        <ArrowRight />
      </div>

      <div className="mt-36  mb-36">
        <Image
          className=""
          src="/images/singa.png"
          alt="Gambar Kiri"
          width={900}
          height={500}
        />
      </div>
    </div>
  );
};

export default Section2;
