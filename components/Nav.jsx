"use client"
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex justify-between px-3 py-2 items-center">
        <div>
          <Image
            src="/logo_r.png"
            alt="logo"
            width={40}
            height={40}
            className="object-cover"
            priority
          />
        </div>
        <div className="hidden md:flex gap-4">
          <Button className="bg-white border h3 text-sm text-gray-700 hover:bg-sub hover:text-white rounded-sm">
            Start free trial
          </Button>
          <Button className="bg-sub h3 text-sm hover:bg-white hover:text-sub rounded-sm">
            Start free trial
          </Button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-gray-800 mb-1.5"
            />
            <motion.div
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-gray-800 mb-1.5"
            />
            <motion.div
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-gray-800"
            />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-100 p-4"
          >
            <div className="flex flex-col gap-2">
              <Button className="bg-white border h3 text-sm text-gray-700 hover:bg-sub hover:text-white rounded-sm w-full">
                Start free trial
              </Button>
              <Button className="bg-sub h3 text-sm hover:bg-white hover:text-sub rounded-sm w-full">
                Start free trial
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
