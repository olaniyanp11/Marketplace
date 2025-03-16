import Image from "next/image";

export default function How() {
    return (
        <>
            <div  className="py-10">
                <h2 className="text-center font-medium h1 text-[35px] pb-10 "> How it Works </h2>
                <div className="grid sm:grid-cols-3 grid-cols-1 sm:px-16 px-3 pb-16 items-center gap-y-10 place-items-center">
                    <div className="flex relative flex-col items-center border-2 border-gray-300  rounded-md px-3 text-center pb-4 w-[80%] sm:w-[60%] ">
                        <Image src={"/1.png"} width={80} height={60} className="mt-[-30px]" />
                        <h2 className="font-bold pt-3 ">How it works </h2>
                        <p className="text-sm text-gray-600 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, facere! Lorem ipsum dolor sit.</p>
                    </div>
                    <div className="flex relative flex-col items-center border-2 border-gray-300  rounded-md px-3 text-center pb-4 w-[80%] sm:w-[60%] ">
                        <Image src={"/3.png"} width={80} height={60} className="mt-[-30px]"/>
                        <h2 className="font-bold pt-3">How it works </h2>
                        <p className="text-sm text-gray-600 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, facere! Lorem ipsum dolor sit.</p>
                    </div>
                    <div className="flex relative flex-col items-center border-2 border-gray-300  rounded-md px-3 text-center pb-4 w-[80%] sm:w-[60%] ">
                        <Image src={"/2.png"} width={80} height={60} className="mt-[-30px]"/>
                        <h2 className="font-bold pt-3">How it works </h2>
                        <p className="text-sm text-gray-600 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, facere! Lorem ipsum dolor sit.</p>
                    </div>
                </div>
            </div>
        </>
    )
}