import React from 'react'
import { Button } from '@/components/ui/button'
import BannerImage from "../../public/footer/banner.png"

const Banner = () => {
  return (
    <div className='bg-cover bg-center rounded-lg shadow-lg overflow-hidden w-[1160px] h-[171px] opacity-100 absolute top-[-85px] z-10 hidden lg:block' style={{ backgroundImage: `url('https://s3-alpha-sig.figma.com/img/9250/c89e/f18f33d783fef5055204ced5370bafac?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=klNFNvi5HAVuSdEoWb3whhFS47CNDzbFhR5xqIcjuSzm~Lh3Sca7owtK3jHGxi4c4rrsJbTmfmcu0iYg-XtavA-mgh0DORqs8IAKRtG0YAL9sG-RgDh5oZcAin6z8lB5ZVWgSgWvkmQQZI3sf5gIny~NXzXwiSWUfP7ExG3~EoB-egAu3PYLVB5YRPvHeoKgMOCo8tx1Q--0avpohmDT~Txtg9LD4SdrNh4VTmskXcnWS9GT3zXtxAQ~LpSnerETXisax8eXufN4gCxhptaDpn1KOByu2IhOkM5DOCSLos5Nj58nZdHemzK14iiUqae9g80R-icg1BlDOhulJUbQsA__')` }}>
      <div className='relative w-full h-full' style={{ backgroundImage: `url(${BannerImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 1 }}>
        <div className='flex justify-center items-center w-full h-full'>
          <h1 className='text-3xl text-white poppins-bold'>
            Admission is open for the next year batch
          </h1>
          <Button className='rounded-full my-2 mx-4 text-bgcust bg-white inter-bold flex justify-center items-center hover:text-white'>
            Get Started &rarr;
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Banner
