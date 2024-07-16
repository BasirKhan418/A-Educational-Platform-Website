"use client"
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
      <style jsx>
        {`
        

        `}
      </style>
      <nav
        className={`fixed top-0 z-50 w-[100vw] h-20 flex justify-center items-center rounded  ${
          scrolling &&!isOpen? "bg-white " : ""
        
        } ${isOpen == true ? "dark:bg-black bg-white " : ""} ${pathname=="/enquiry"?"bg-bgcust":"bg-transparent"}`}
        id="navbar"
      >
        <div className="container px-6 py-4 mx-auto ">
          <div className="lg:flex lg:items-center lg:justify-between">
            <motion.div
              className="flex items-center justify-between"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <Link href={"/"}>
                
                  <img src="https://s3-alpha-sig.figma.com/img/3a45/7a59/a344c7df92387190a0c3dac850d8e0c2?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OQDE3h0shDEnSBu76c1I2N1-UqplFunfty-AfrN6KabvEQZve9OpItbXyAe4esBHQ8KWVwZjfQKNTFPpBZ6av6Vk0Y7yWRRY~SU6ixGWh3DPACGTI6xE1wO3a-hY0Z0O9rD10iLlp4izXM9OR6ZyKL4uKuDk~Jbkg3uaaW0rFdzFGZcENc17tI5y50La~md9~JrFMUXFYIk0j3oB6rsCNPu9bxK2tQf7b~xVbiiiN3W4jnkZUS-pI0ut9bKNVtIF7Si9gGo3S1rN8Xq2blHsb7HF1iNxG2gDqANosap0QwUigF3UTTo61ETXqEDv0YQBOFXqtSqSeBsmJawwdxdw~A__" alt="" className="lg:w-14 lg:h-14 md:w-14 md:h-14 w-14 h-14 lg:h-16 lg:w-16 object-fit lg:mx-16  md:mx-4 mx-2" />
              
              </Link>

              <div className="flex lg:hidden ">
                <button
                  onClick={handleclick}
                  type="button"
                  className={`dark:text-gray-200 text-white hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 `}
                  aria-label="toggle menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                     stroke="currentColor"
                    className={`w-10 h-10  dark:fill-white ${
                      isOpen == false ? "block" : "hidden"
                    }`}
                  >
                    <rect
                      width="80"
                      height="10"
                      x="10"
                      y="20"
                      rx="5"
                      
                    />
                    <rect
                      width="80"
                      height="10"
                      x="10"
                      y="45"
                      rx="5"
                      
                    />
                    <rect
                      width="80"
                      height="10"
                      x="10"
                      y="70"
                      rx="5"
                      
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-10 h-10 ${
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
                  ? "translate-x-0 opacity-100 border2 border2 w-full h-[100vh] bg-opacity-80 backdrop-filter backdrop-blur-xl "
                  : "opacity-0 translate-x-full"
              } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out dark:bg-black bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center  `}
            >
              <motion.div
                className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <Link href={"/"}>
                  <motion.li
                  className={` list-none px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0 ${pathname=="/enquiry"?"text-white":"text-primary"}
                    text-lg lg:text-base md:text-base sm:text-lg  ${data2?"inter-bold text-black":"roboto-medium text-gray-500 font-semibold"} text-gray-800`}
                    whileTap={{ scale: 0.9, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    onMouseEnter={() => {
                      setData2(true);
                    }}
                    onMouseLeave={() => {
                      setData2(false);
                    }}
                    onClick={() =>setIsOpen(false)}
                  >
                    
                    Home
                  
                    {data2 && (
                      <motion.div
                        className="h-1 bg-bgcust rounded-full "
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 30, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 250 }}
                      ></motion.div>
                    )}
                  </motion.li>
                  </Link>
                  <Link href="/about">
                  <motion.li
                  className={` list-none px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0 ${pathname=="/enquiry"?"text-white":"text-primary"}
                    text-lg lg:text-base md:text-base sm:text-lg  ${data6?"inter-bold text-black":"roboto-medium text-gray-500 font-semibold"} text-gray-800`}
                    whileTap={{ scale: 0.9, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    onMouseEnter={() => {
                      setData6(true);
                    }}
                    onMouseLeave={() => {
                      setData6(false);
                    }}
                    onClick={() =>setIsOpen(false)}
                  >
                   About
                    {data6 && (
                      <motion.div
                        className="h-1 bg-bgcust rounded-full "
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 30, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 250 }}
                        onClick={() =>setIsOpen(false)}
                      ></motion.div>
                    )}
                  </motion.li>
                  </Link>
                <Link href={"/#acievement"}>
                  <motion.li
                      className={` list-none px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0 ${pathname=="/enquiry"?"text-white":"text-primary"}
                        text-lg lg:text-base md:text-base sm:text-lg  ${data1?"inter-bold text-black":"roboto-medium text-gray-500 font-semibold"} text-gray-800`}
                    whileTap={{ scale: 0.9, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    onMouseEnter={() => {
                      setData1(true);
                    }}
                    onMouseLeave={() => {
                      setData1(false);
                    }}
                    onClick={() =>setIsOpen(false)}
                  >
                  Achievement
                   
                    {data1 && (
                      <motion.div
                        className="h-1 bg-bgcust rounded-full "
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 60, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 250 }}
                      ></motion.div>
                    )}
                  </motion.li>
                </Link>

                <Link href={"/events"}>
                  <motion.li
                  className={` list-none px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0 ${pathname=="/enquiry"?"text-white":"text-primary"}
                    text-lg lg:text-base md:text-base sm:text-lg  ${data3?"inter-bold text-black":"roboto-medium text-gray-500 font-semibold"} text-gray-800`}
                    whileTap={{ scale: 0.9, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    onMouseEnter={() => {
                      setData3(true);
                    }}
                    onMouseLeave={() => {
                      setData3(false);
                    }}
                    onClick={() =>setIsOpen(false)}
                  >
                    Events
                    {data3 && (
                      <motion.div
                        className="h-1 bg-bgcust rounded-full "
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 30, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 250 }}
                      ></motion.div>
                    )}
                  </motion.li>
                </Link>
               <Link  href={"/#course"}>
                  <motion.li
                               className={` list-none px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0 ${pathname=="/enquiry"?"text-white":"text-primary"}
                                text-lg lg:text-base md:text-base sm:text-lg  ${data4?"inter-bold text-black":"roboto-medium text-gray-500 font-semibold"} text-gray-800`}
                    whileTap={{ scale: 0.9, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    onMouseEnter={() => {
                      setData4(true);
                    }}
                    onMouseLeave={() => {
                      setData4(false);
                    }}
                    onClick={() =>setIsOpen(false)}
                  >
                    Courses
                    {data4 && (
                      <motion.div
                        className="h-1 bg-bgcust rounded-full "
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