import React from "react";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ResultData = [
  {
    name: "Sanchi Ramteke",
    score: "99.0%",
    school: "Vincent Pallotti School, Nagpur",
    img: "/result/aadya.png",
  },
  {
    name: "Aryan Ukudde",
    score: "98.6%",
    school: "Somalwar High School, Nagpur",
    img: "/result/aryan.png",
  },
  {
    name: "Koyna Agrawal",
    score: "98.2%",
    school: "Priyadarshini Nagpur Public",
    img: "/result/aryan2.png",
  },
  {
    name: "Shamit Bundela",
    score: "97.8%",
    school: "Centre Point School, Katol",
    img: "/result/charmi.png",
  },
  {
    name: "Bhavik Katariya",
    score: "97.8%",
    school: "Bhavan's Bhagwandas Purohit",
    img: "/result/devyani.png",
  },
];

const Result = () => {
  return (
    <section id="result" className="container section-width poppins-bold w-full my-20 space-y-8">
      <Title title="Our Results" />
      <div className="flex flex-col items-center justify-center lg:mr-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 justify-center items-center mt-8 mb-8">
          {ResultData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center mx-2 my-2 text-center"
              style={{ borderRadius: "20px" }}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center md:justify-between lg:justify-space xl:justify-space max-w-full">
          <a
            href="#"
            className="inter-bold mx-2 hidden text-2xl text-bgcust md:block md:text-xl lg:block"
          >
            View All Results
          </a>
          <div className="mx-3 hidden h-[0.75px] w-[52vw] bg-black md:block md:text-xl lg:block"></div>
          <Button variant={"outline"} className="rounded-full text-lg">
            <span>All Results </span>
            <ArrowRight strokeWidth={1} size={14} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Result;
