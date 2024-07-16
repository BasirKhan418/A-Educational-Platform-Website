import Title from '@/components/title';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Events = () => {
  const event = [
    {
      "event": "Felicitation",
      "description": "Lorem ipsum is placeholder text commonly used in the graphic, print mockups.",
      "image": "/event/feliciation.jpeg"
    },
    {
      "event": "Children's Day",
      "description": "Lorem ipsum is placeholder text commonly used in the graphic, print mockups.",
      "image": "/event/children.jpeg"
    },
    {
      "event": "Garba Night",
      "description": "Lorem ipsum is placeholder text commonly used in the graphic, print mockups.",
      "image": "/event/garba.jpeg"
    },
    {
      "event": "Picnic",
      "description": "Lorem ipsum is placeholder text commonly used in the graphic, print mockups.",
      "image": "/event/picnic.jpeg"
    },
    {
      "event": "Diwali",
      "description": "Lorem ipsum is placeholder text commonly used in the graphic, print mockups.",
      "image": "https://s3-alpha-sig.figma.com/img/8949/7328/664c60ad2bc301a4e7b821092a5075c0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ESsX-uV~xWZJhfBnJxLLmEHXO1CYtKWOK0Dx529Jgs~IYl2gm~~-2rwmhgD90lIEM6d5Ztr0cKj3q4ilqmgNDMaAEREqxG-Q7UhtaBajYJpBmk9pUeL5oacoMA~hc8H6vUbMLPTwQMT6himqr24JtY8YP7MxKDom0nTTOKNhn9WL1a6nVxFeBjzRZSV65ipCrhihHuwaFKrCIocl9JEHIxnpaVgALhuTY0fzxLKiBJB5NjhcvdRJzfHjAGt6xR~7vGWR99Xkw73ZMfCzrR-PvLbG1PTfkFkFXpXu09yOeSb85neDEsHNQLClAPNrGK~vxSW88cMjV7cP~TY-wmItPQ__"
    },
    {
      "event": "Farewell",
      "description": "Lorem ipsum is placeholder text commonly used in the graphic, print mockups.",
      "image": "/event/farewell.jpeg"
    }
  ]
  
  return (
    <section id="event" className='section-width space-y-4 poppins-bold'>
    <Title title="Our Event" className='lg:mx-2'/>
      <div >
      <p className="text-gray-600 max-w-4xl text-md poppins-medium lg:mx-8 my-10">
      Lorem ipsum is placehold text commonly .Lorem ipsum is placeholder text commonly  is placeholder text commo
      Lorem ipsum is placehold text commonly .Lorem ipsum is placeholder text commonly  is placeholder text commo
      Lorem ipsum is placehold text commonly .Lorem ipsum is placeholder text commonly  is placeholder text commo
      </p>
      </div>
      <div className="flex justify-center items-center flex-col w-full">
      <div className='flex justify-center items-center flex-col'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6   ">
        {event.map((item, index) => (
          <div key={index} className="bg-white rounded-lg  text-center lg:h-[426px] lg:w-[360px] md:h-[426px] md:w-[360px] h-[400px] w-[320px]  roboto-medium my-4 mx-2" style={{borderLeft:"1px solid #02B3E4",borderRight:"1px solid #02B3E4"}}>
            <img
              src={item.image}
              alt={item.event}
              style={{borderLeft:"1px solid #02B3E4",borderRight:"1px solid #02B3E4"}}
              className=" object-cover mb-4 rounded-lg h-[227px] w-[360px]"
            />
            <h3 className="text-xl font-bold  text-left px-4">{item.event}</h3>
            <p className="text-gray-400 text-left px-4 text-sm my-2">16 January 2017</p>
            <p className="text-gray-400 poppins-medium  px-3 w-[321px] text-left">
             {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex lg:justify-between md:justify-between xl:justify-between justify-center mt-16 items-center">
        <a href="#" className="text-bgcust inter-bold mx-2 text-2xl hidden lg:block md:block md:text-xl">View All Courses</a>
        <div className='h-[2px] bg-gray-600 w-[54vw] hidden lg:block md:block md:text-xl mx-3'></div>
        <button  className="text-bgcust inter-medium mx-2 text-sm border-2 p-4 rounded-full border-bgcust lg:mr-10 md:mr-10 w-full md:w-36 lg:w-36">All Courses <span>&rarr;</span></button>
      </div>
      </div>
      </div>
      </section>
  );
};

export default Events;
