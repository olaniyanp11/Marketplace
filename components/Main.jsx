"use client";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Main() {
  return (
    <>
      <main className="w-full h-[90vh] relative">
        <Image
          src={"/hero.png"}
          alt="main"
          className="absolute top-10 z-[-1]"
          fill
          style={{ objectFit: "cover" }} // Ensure the image covers the area
        />
        <div className="w-full h-full flex flex-col justify-center pl-4 sm:pl-10 items-start gap-4 sm:gap-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]">
            Welcome to Marketplaceng
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            culpa voluptatem officiis architecto omnis quibusdam doloremque unde
            tempora dolorem eius!
          </p>
          <Button className="bg-sub text-white px-6 rounded-sm py-3 sm:py-4 md:py-5 lg:py-6 text-base sm:text-lg md:text-xl">
            Start free trial
          </Button>
        </div>
      </main>
    </>
  );
}
