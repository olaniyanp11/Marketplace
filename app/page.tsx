import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen relative">
        {/* Background Image */}
        <Image
          src="/bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay Image */}
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
          <Image
            src="/Loader.png"
            alt="Loader"
            width={200}
            height={100}
            priority
          />
        </div>
      </div>
    </>
  );
}
