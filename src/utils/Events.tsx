import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Events = () => {
  const event = [
    {
      event: "Felicitation",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print mockups.",
      image: "/event/feliciation.jpeg",
    },
    {
      event: "Children's Day",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print mockups.",
      image: "/event/children.jpeg",
    },
    {
      event: "Garba Night",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print mockups.",
      image: "/event/garba.jpeg",
    },
    {
      event: "Picnic",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print mockups.",
      image: "/event/picnic.jpeg",
    },
    {
      event: "Diwali",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print mockups.",
      image:
        "https://s3-alpha-sig.figma.com/img/8949/7328/664c60ad2bc301a4e7b821092a5075c0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ESsX-uV~xWZJhfBnJxLLmEHXO1CYtKWOK0Dx529Jgs~IYl2gm~~-2rwmhgD90lIEM6d5Ztr0cKj3q4ilqmgNDMaAEREqxG-Q7UhtaBajYJpBmk9pUeL5oacoMA~hc8H6vUbMLPTwQMT6himqr24JtY8YP7MxKDom0nTTOKNhn9WL1a6nVxFeBjzRZSV65ipCrhihHuwaFKrCIocl9JEHIxnpaVgALhuTY0fzxLKiBJB5NjhcvdRJzfHjAGt6xR~7vGWR99Xkw73ZMfCzrR-PvLbG1PTfkFkFXpXu09yOeSb85neDEsHNQLClAPNrGK~vxSW88cMjV7cP~TY-wmItPQ__",
    },
    {
      event: "Farewell",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print mockups.",
      image: "/event/farewell.jpeg",
    },
  ];

  return (
    <section id="event" className="section-width poppins-bold space-y-4">
      <Title title="Our Event" className="" />
      <div>
        <p className="text-md poppins-medium my-10 max-w-4xl text-gray-600">
          Beyond Textbooks: Celebrating Growth, Culture, and Community Through
          Unforgettable Events That Enrich the Learning Journey.
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3   ">
            {event.map((item, index) => (
              <div
                key={index}
                className="roboto-medium mx-2  my-4 h-[400px] w-[320px] rounded-lg bg-white text-center md:h-[426px]  md:w-[360px] lg:h-[426px] lg:w-[360px]"
                style={{
                  borderLeft: "1px solid #02B3E4",
                  borderRight: "1px solid #02B3E4",
                }}
              >
                <img
                  src={item.image}
                  alt={item.event}
                  style={{
                    borderLeft: "1px solid #02B3E4",
                    borderRight: "1px solid #02B3E4",
                  }}
                  className=" mb-4 h-[227px] w-[360px] rounded-lg object-cover"
                />
                <h3 className="px-4 text-left  text-xl font-bold">
                  {item.event}
                </h3>
                <p className="my-2 px-4 text-left text-sm text-gray-400">
                  16 January 2017
                </p>
                <p className="poppins-medium w-[321px]  px-3 text-left text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 flex items-center justify-center md:justify-between lg:justify-between xl:justify-between">
            <a
              href="#"
              className="inter-bold mx-2 hidden text-2xl text-bgcust md:block md:text-xl lg:block"
            >
              View All Events
            </a>
            <div className="mx-3 hidden h-[2px] w-[54vw] bg-gray-600 md:block md:text-xl lg:block"></div>
            <button className="inter-medium mx-2 w-full rounded-full border-2 border-bgcust p-4 text-sm text-bgcust md:mr-10 md:w-36 lg:mr-10 lg:w-36">
              All Events <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
