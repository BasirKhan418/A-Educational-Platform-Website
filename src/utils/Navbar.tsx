"use client";
import React, { use, useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [data1, setData1] = useState(false);
  const [data2, setData2] = useState(false);
  const [data3, setData3] = useState(false);
  const [data4, setData4] = useState(false);
  const [data6, setData6] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleclick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <style jsx>{``}</style>
      <nav
        className={`fixed top-0 z-50 flex h-20 w-[100vw] items-center justify-center rounded  ${
          scrolling && !isOpen ? "bg-white " : ""
        } ${isOpen == true ? "bg-white dark:bg-black " : ""} ${pathname == "/enquiry" ? "bg-bgcust" : "bg-transparent"}`}
        id="navbar"
      >
        <div className="container max-w-navbar mx-auto px-6 py-4">
          <div className="lg:flex lg:items-center lg:justify-between">
            <motion.div
              className="flex items-center justify-between"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <Link href={"/"}>
                <img
                  src="/logo.png"
                  alt=""
                  className="object-fit mx-2 h-14 w-14 md:mx-4 md:h-14 md:w-14 lg:mx-16 lg:h-14 lg:h-16  lg:w-14 lg:w-16"
                />
              </Link>

              <div className="flex lg:hidden ">
                <button
                  onClick={handleclick}
                  type="button"
                  className={`text-white hover:text-gray-400 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:focus:text-gray-400 `}
                  aria-label="toggle menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    stroke="currentColor"
                    className={`h-10 w-10  dark:fill-white ${
                      isOpen == false ? "block" : "hidden"
                    }`}
                  >
                    <rect width="80" height="10" x="10" y="20" rx="5" />
                    <rect width="80" height="10" x="10" y="45" rx="5" />
                    <rect width="80" height="10" x="10" y="70" rx="5" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-10 w-10 ${
                      isOpen == true ? "block" : "hidden"
                    }`}
                    fill="#FFFFFF"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
            <div
              className={` ${
                isOpen == true
                  ? "border2 border2 h-[100vh] w-full translate-x-0 bg-opacity-80 opacity-100 backdrop-blur-xl backdrop-filter "
                  : "translate-x-full opacity-0"
              } absolute inset-x-0 z-20 w-full bg-white px-6 py-4 transition-all duration-300 ease-in-out dark:bg-black lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100  `}
            >
              <motion.div
                className="-mx-6 flex flex-col lg:mx-8 lg:flex-row lg:items-center"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <Link href={"/"}>
                  <motion.li
                    className={` mx-3 mt-2 transform list-none rounded-md  px-3 py-2 transition-colors duration-300 lg:mt-0 ${pathname == "/enquiry" ? "text-white" : "text-primary"}
                    text-lg sm:text-lg md:text-base lg:text-base  ${data2 ? "inter-bold text-black" : "roboto-medium font-semibold text-gray-500"} text-gray-800`}
                    whileTap={{ scale: 0.9, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    onMouseEnter={() => {
                      setData2(true);
                    }}
                    onMouseLeave={() => {
                      setData2(false);
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                    {data2 && (
                      <motion.div
                        className="h-1 rounded-full bg-bgcust "
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 30, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 250 }}
                      ></motion.div>
                    )}
                  </motion.li>
                </Link>
                <Link href="/about">
                  <motion.li
                    className={` mx-3 mt-2 transform list-none rounded-md  px-3 py-2 transition-colors duration-300 lg:mt-0 ${pathname == "/enquiry" ? "text-white" : "text-primary"}
                    text-lg sm:text-lg md:text-base lg:text-base  ${data6 ? "inter-bold text-black" : "roboto-medium font-semibold text-gray-500"} text-gray-800`}
                    whileTap={{ scale: 0.9, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    onMouseEnter={() => {
                      setData6(true);
                    }}
                    onMouseLeave={() => {
                      setData6(false);
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    About
                    {data6 && (
                      <motion.div
                        className="h-1 rounded-full bg-bgcust "
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 30, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 250 }}
                        onClick={() => setIsOpen(false)}
                      ></motion.div>
                    )}
                  </motion.li>
                </Link>
                <Link href={"/#acievement"}>
                  <motion.li
                    className={` mx-3 mt-2 transform list-none rounded-md  px-3 py-2 transition-colors duration-300 lg:mt-0 ${pathname == "/enquiry" ? "text-white" : "text-primary"}
                        text-lg sm:text-lg md:text-base lg:text-base  ${data1 ? "inter-bold text-black" : "roboto-medium font-semibold text-gray-500"} text-gray-800`}
                    whileTap={{ scale: 0.9, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    onMouseEnter={() => {
                      setData1(true);
                    }}
                    onMouseLeave={() => {
                      setData1(false);
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    Achievement
                    {data1 && (
                      <motion.div
                        className="h-1 rounded-full bg-bgcust "
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 60, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 250 }}
                      ></motion.div>
                    )}
                  </motion.li>
                </Link>

                <Link href={"/events"}>
                  <motion.li
                    className={` mx-3 mt-2 transform list-none rounded-md  px-3 py-2 transition-colors duration-300 lg:mt-0 ${pathname == "/enquiry" ? "text-white" : "text-primary"}
                    text-lg sm:text-lg md:text-base lg:text-base  ${data3 ? "inter-bold text-black" : "roboto-medium font-semibold text-gray-500"} text-gray-800`}
                    whileTap={{ scale: 0.9, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    onMouseEnter={() => {
                      setData3(true);
                    }}
                    onMouseLeave={() => {
                      setData3(false);
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    Events
                    {data3 && (
                      <motion.div
                        className="h-1 rounded-full bg-bgcust "
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 30, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 250 }}
                      ></motion.div>
                    )}
                  </motion.li>
                </Link>
                <Link href={"/#course"}>
                  <motion.li
                    className={` mx-3 mt-2 transform list-none rounded-md  px-3 py-2 transition-colors duration-300 lg:mt-0 ${pathname == "/enquiry" ? "text-white" : "text-primary"}
                                text-lg sm:text-lg md:text-base lg:text-base  ${data4 ? "inter-bold text-black" : "roboto-medium font-semibold text-gray-500"} text-gray-800`}
                    whileTap={{ scale: 0.9, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    onMouseEnter={() => {
                      setData4(true);
                    }}
                    onMouseLeave={() => {
                      setData4(false);
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    Courses
                    {data4 && (
                      <motion.div
                        className="h-1 rounded-full bg-bgcust "
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 40, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 210 }}
                      ></motion.div>
                    )}
                  </motion.li>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
