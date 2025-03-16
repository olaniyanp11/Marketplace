import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="relative w-full pt-16 pb-0 sm:pb-16 flex sm:flex-row justify-center items-center flex-col-reverse gap-y-7">
        <Image
          width={300}
          height={600}
          src={"/woman.png"}
          className="z-30 left-0 bottom-0 sm:absolute relative"
          alt="woman"
        />
        <Image src={"/Background.png"} fill className="z-[-1] " alt="background" />
        <div className="bg-white sm:px-24 px-7 text-center py-10 rounded-3xl rounded-tr-3xl sm:rounded-tr-[150px] place-content-center w-[90%] sm:w-[60%]">
          <h2 className="text-3xl pb-3 text-center">
            <span className="text-sub text-3xl font-semibold">
              Marketplaceng
            </span>{" "}
            - About Us
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi
            nisi aperiam numquam qui facilis quibusdam est, facere quae ipsum
            consequuntur veniam a, delectus labore recusandae laborum odit
            perspiciatis eius veritatis provident reiciendis quisquam tenetur
            quasi placeat. Dolores dicta minima repellat veritatis harum cum,
            quis neque maiores, quidem accusamus voluptatem!
          </p>
          <p className="text-sm text-gray-600 py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            aperiam.
          </p>
        </div>
      </div>
    </>
  );
}
