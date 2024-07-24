import React from "react";
import Lesson from "../../..//public/about/lesson.png";
import Image from "next/image";
import Audio from "../../../public/about/audio.png";
import Live from "../../../public/about/live.png";
import Recorded from "../../../public/about/recorded.png";
import Pattern from "../../../public/about/Pattern.png";

const Session = () => {
  return (
    <div className="mt-16 flex h-max w-full flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="inter-bold text-5xl ">
          What's in the class at Educare?
        </h1>
        <p className="poppins-medium text-justify  text-xl text-gray-400">
          Online classes with teachers, continuous questions and answers during
          class if you do <br /> not understand. At the end of the session, the
          lesson is recorded for your child to review
        </p>
      </div>
      <div className="flex items-center justify-center rounded-xl bg-[#02B3E4] px-8 py-3">
        <button className="flex items-center justify-center font-bold text-white">
          Free trial lesson
        </button>
      </div>
      <div className="relative">
        <Image
          src={Pattern}
          alt="Pattern"
          className="absolute right-0 top-0 z-10 h-24 w-24 -translate-y-8 translate-x-8 md:h-32 md:w-32 md:-translate-y-16 md:translate-x-16" // Ensuring pattern is behind
          width={128}
          height={128}
        />
        <Image
          src={Lesson}
          alt="Lesson"
          className="z-20 rounded-lg object-cover shadow-xl"
          width={900}
          height={900}
        />
      </div>

      <div className="mb-32 mt-12 flex flex-col gap-8 md:flex-row">
        <div className="flex items-center justify-center gap-8 rounded-xl bg-white p-2 shadow-md">
          <Image
            src={Audio}
            alt="Audio"
            className="rounded-lg object-cover"
            width={70}
            height={70}
          />
          <p className="inter-bold text-2xl">Audio Classes</p>
        </div>
        <div className="flex items-center justify-center gap-8 rounded-xl bg-white p-2 shadow-md">
          <Image
            src={Live}
            alt="Live"
            className="rounded-lg object-cover"
            width={70}
            height={70}
          />
          <p className="inter-bold text-2xl">Live Classes</p>
        </div>
        <div className="flex items-center justify-center gap-8 rounded-xl bg-white p-2 shadow-md">
          <Image
            src={Recorded}
            alt="Recorded"
            className="rounded-lg object-cover"
            width={70}
            height={70}
          />
          <p className="inter-bold text-2xl">Recorded Classes</p>
        </div>
      </div>
    </div>
  );
};

export default Session;
