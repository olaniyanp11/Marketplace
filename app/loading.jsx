import Image from "next/image";

export default function Loading() {
  return (
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

      {/* Loader Content */}
      <div className="w-[200px] relative flex justify-center flex-col gap-4 z-10">
        {/* Logo */}
        <Image 
          src="/logo (1).png" 
          alt="Logo" 
          width={200} 
          height={100} 
          priority 
        />

        {/* Actual Loader (Animated Spinner) */}
        <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin mx-auto"></div>
      </div>      
    </div>
  );
}
