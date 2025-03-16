"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function loading() {
  return (
    <div className="flex justify-center items-center w-full h-screen ">
      {/* Background Image */}
      <Image
        src="/bg.jpg"
        alt="Background"
        fill
        className="object-cover absolute top-0 right-0 w-full h-full"
        priority
      />

      <Image
        src="/red overl.png"
        alt="Red Overlay"
        fill
        className="object-cover"
        priority
      />

      {/* Logo and Loader */}
      <div className="w-[150px] relative flex justify-center flex-col gap-4 z-10">
        <Image
          src="/logo (1).png"
          alt="Logo"
          width={200}
          height={100}
          priority
        />
        <motion.div className="w-full border border-white rounded-xl relative ">
          <motion.div
            className="bg-white h-full rounded-xl p-1"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 5, // Adjust for speed
              ease: "easeIn",
              repeat: Infinity, // If you want it to loop
              repeatType: "reverse", // Makes it bounce back
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
