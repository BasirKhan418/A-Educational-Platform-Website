import React from "react";
import VectorImage from "./VectorImage";
import FelicitationContent from "./Content";
import FalicitationImage from "./FalicitationImage";
import ChildrenImage from "./ChildrenImage";
import GarbaImage from "./GarbaImage";
import FarewellImage from "./FarewellImage";
import PicnicImage from "./PicnicImage";

const EventPage = () => {
  const felicitationImagePath = "/event/Felicitation.png";
  const childrenImagePath = "/event/Children.png";
  const garbaImagePath = "/event/Garba.png";
  const farewellImagePath = "/event/Farewell.png";
  const picnicImagePath = "/event/Picnic.png";
  const felicitationContent = {
    title: "Felicitation",
    imagePath: "/event/Frame.png",
    description: `At Gour's Educare Plus, we believe in recognizing and celebrating
      the outstanding achievements of our students. Our annual
      Felicitation Ceremony is a prestigious event where we honor academic
      excellence, personal growth, and exceptional talents.`,
  };
  const childrenContent = {
    title: "Children's Day",
    imagePath: "/event/Frame.png",
    description: `At Gour's Educare Plus, we believe every child is special. 
    Our Children's Day celebration is a vibrant testament to the spirit of childhood 
    and the potential of our young learners. This day is dedicated to fostering happiness, 
    creativity, and a sense of belonging among our students.`,
  };
  const garbaContent = {
    title: "Garba Night",
    imagePath: "/event/Frame.png",
    description: `Experience the vibrant spirit of Gujarat at Gour's Educare 
    Plus's annual Garba Night! This dazzling event brings together students, 
    parents, and staff for an evening of traditional dance, music, and festivities.`,
  };
  const Farewell = {
    title: "Farewell",
    imagePath: "/event/Frame.png",
    description: `At Gour's Educare Plus, our annual Farewell ceremony is a heartfelt tribute 
    to our graduating students. This event marks the culmination of their journey with us and the exciting start of their next chapter.`,
  };
  const Picnic = {
    title: "Picnic",
    imagePath: "/event/Frame.png",
    description: `Gour's Educare Plus believes in the power of experiential learning. Our annual school 
    picnic is a day filled with excitement, exploration, and strengthening friendships outside the classroom environment.`,
  };

  return (
    <div className="section-width flex min-h-screen flex-col items-center justify-center gap-12">
      <div className="my-24 flex flex-col items-center justify-center bg-white p-4 md:flex-row">
        <h2 className="inter-bold text-center text-5xl font-bold text-bgcust">
          Our Events
        </h2>
      </div>
      <div className="relative flex w-full flex-col justify-center lg:flex-row">
        <VectorImage imagePath={felicitationImagePath} />
        <FelicitationContent
          title={felicitationContent.title}
          imagePath={felicitationContent.imagePath}
          description={felicitationContent.description}
        />
      </div>
      <FalicitationImage />
      <div className="relative flex w-full flex-col justify-center lg:flex-row">
        <VectorImage imagePath={childrenImagePath} />
        <FelicitationContent
          title={childrenContent.title}
          imagePath={childrenContent.imagePath}
          description={childrenContent.description}
        />
      </div>
      <ChildrenImage />
      <div className="relative flex w-full flex-col justify-center lg:flex-row">
        <VectorImage imagePath={garbaImagePath} />
        <FelicitationContent
          title={garbaContent.title}
          imagePath={garbaContent.imagePath}
          description={garbaContent.description}
        />
      </div>
      <GarbaImage />
      <div className="relative flex w-full flex-col justify-center lg:flex-row">
        <VectorImage imagePath={farewellImagePath} />
        <FelicitationContent
          title={Farewell.title}
          imagePath={Farewell.imagePath}
          description={Farewell.description}
        />
      </div>
      <FarewellImage />
      <div className="relative flex w-full flex-col justify-center lg:flex-row">
        <VectorImage imagePath={picnicImagePath} />
        <FelicitationContent
          title={Picnic.title}
          imagePath={Picnic.imagePath}
          description={Picnic.description}
        />
      </div>
      <PicnicImage />
    </div>
  );
};

export default EventPage;
