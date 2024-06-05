import Image from "next/image";
import ArrowRight from "../ui/ArrowRight";

const Section1 = () => {
  return (
    <div id="solutions" className="flex justify-between mx-12 ">
      <div className="mt-36 mb-36 w-fit p-10 ">
        <Image
          className=""
          src="/images/Left.png"
          alt="Gambar Kiri"
          width={900}
          height={500}
        />
      </div>

      <div className="mt-36 ml mb-36 w-2/5">
        <p className="mt-12 font-extrabold text-5xl">
          Nikmati waktumu untuk membuat AR!
        </p>
        <p className="mt-14 text-justify">
          Nikmati fitur yang membangun kreatifitasmu tanpa batas melalui
          pembuatan AR yang simpel dan mudah. Efisiensikan waktumu lewat
          Platform kami
        </p>

        <ArrowRight />
      </div>
    </div>
  );
};

export default Section1;
