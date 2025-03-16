"use client"
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="px-20 py-40 flex gap-y-10 justify-between sm:items-start flex-col md:flex-row items-center bg-gray-100">
        <div className="flex flex-col gap-5 text-black">
          <h1 className="h1 font-bold ">TRADE</h1>
          <Link href={""}>
            <small>&copy; 2010-2020</small>
          </Link>
          <Link href={""}>
            <small>Privacy-Terms</small>
          </Link>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 w-[60%] gap-y-10  ">
          <div className="flex flex-col gap-5 text-black">
            <h1 className="h1 font-bold ">Product</h1>
            <Link href={""}>
              <small>Product</small>
            </Link>
            <Link href={""}>
              <small>Product</small>
            </Link>
            <Link href={""}>
              <small>Product</small>
            </Link>
          </div>
          <div className="flex flex-col gap-5 text-black">
            <h1 className="h1 font-bold ">Resources</h1>
            <Link href={""}>
              <small>Resources</small>
            </Link>
            <Link href={""}>
              <small>Resources</small>
            </Link>
            <Link href={""}>
              <small>Resources</small>
            </Link>
          </div>
          <div className="flex flex-col gap-7 text-black">
            <h1 className="h1 font-bold ">Company</h1>
            <Link href={""}>
              <small>Company</small>
            </Link>
            <Link href={""}>
              <small>Company</small>
            </Link>
            <Link href={""}>
              <small>Company</small>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
