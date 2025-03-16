import Image from "next/image";
import { Button } from "./ui/button";

export default function Waitlist() {
    return (
        <>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-y-5  relative py-10 h1 place-items-center justify-center px-10">
                <div className="flex flex-col gap-2 items-start">
                    <h2 className="text-2xl text-sub font-bold sm:text-left text-center">Lorem ipsum dolor sit.</h2>
                    <p className="text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, obcaecati.</p>
                    <Button className="bg-sub px-10 rounded-sm">Join the Waitlist</Button>
                </div>
                <Image src={"/mqn.png"} width={400} height={700} />
            </div>
    </>
    );
}
