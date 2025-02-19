import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <img src='/bg.jpg' alt="" className=" w-full h-screen object-cover absolute top-0 right-0" />
        <img src='/red overl.png' alt="" className="w-full h-screen object-cover absolute  top-0 right-0" />
        <div className=" w-[200px] relative flex justify-center flex-col gap-4 ">
          <img src='/logo (1).png' alt="" className="w-full " />
          <img src='/Loader.png' alt="" className="w-full " />
        </div>      
      </div>
    </>
  );
}
