import Image from "next/image";
import React from "react";
import ArrowRight from "../ui/ArrowRight";

const Section3 = () => {
  return (
    <div id="about" className="flex justify-between mx-12 ">
      <div className="mt-36 mb-36 w-fit p-10 ">
        <Image
          className=""
          src="/images/Desktop.png"
          alt="Gambar Kiri"
          width={900}
          height={500}
        />
      </div>

      <div className="mt-36 ml mb-36 w-2/5">
        <p className="mt-12 font-extrabold text-5xl">
        Improve your skill
        </p>
        <p className="mt-14 text-justify">
        Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
        </p>

        <ArrowRight />
      </div>
    </div>
  );
};

export default Section3;
