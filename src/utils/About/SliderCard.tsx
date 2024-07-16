"use client"
import React, { useState } from 'react';

const teachers = [
  { name: 'Yagni Rajput', subject: 'Maths (10th)', image: 'https://s3-alpha-sig.figma.com/img/62a8/7063/cb6692d78231927a3c6503ee0526047c?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nZYeve7Z4j~mlZmByFBi8xs0pE3-1ulMcIJQfDtCRdMCkW0IqgtVePRos-kf01e3Q6z4YJIMa~pQ37hPv3o42FHKtAO1wZDkeIOv9XBAJ3oBf0i1-2tvGqaJpYdEYVQdtiyReFxInFhK0Ubek9YVBtq-Z6aFpdZttPQFKNYecSesie8Dp-yBBYfOMIBnC61WhA42XBNz2EAA279JlEkIOKCSklzTasaSgKqzHtmqlAu-OQPtU6beGPeYNzV-2hVYxFe0Uh3~iAd1FFTNcf5gNdL2Ym7qW3Hrq7turw9cveKMOM2IGo5L7KGtwgqau-ZacMnEZT0I79oO3fsxNKgPPg__' },
  { name: 'Yagni Rajput', subject: 'Maths (10th)', image: 'https://s3-alpha-sig.figma.com/img/e075/1b22/24b9a68402884a8f8b48f50360f215cf?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jfuoLWHpkgha7ULZRdylAcdfICfWkmlORbI2IeIb329K1D1y8TEcMeojoGECnZJXjRFnaAfo-J1t12x0JfR6LpPXl97-Qi3NQZtCUZDSVMXuTzpcjHoi9x9ZRDKzJzV6o1b52GsFhFA54WCgNoCmJCHJonXIrb3RrNS2zGb9TJ9q6n~L6OPByc~VBIHrBPa2xE2Qi715IYoV20lU9TVdjTvQlx-Hay3APWl32qaPVvVqq1lotD0f3a3DokNdt2wRQqjviSOg3cwfxSlpIaJnnj1bIxxOJ5fh2H1qdpkcg~d~DZhIkAMvXNtaVsvPNu1CA0djpR1S2B~vZezHNdie3g__' },
  { name: 'Yagni Rajput', subject: 'Maths (10th)', image: 'https://s3-alpha-sig.figma.com/img/1540/5784/a68d3c348b4bd16883cc7d5606e68a94?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LDytvStKkbpe1taa4hYsSzZs91ts9NRb1IX2uBGh4kNqhsCDdVaW96bPBsDv7m7JSgCpcsVowWo8ZlayaUUvlaf2hcc3t3DecgauSCH9IyFUMiP62DgsSRPHeIFAq8AyruU5r2LKvdDzLmOsGDpl4hyz3~m~zj2vh6LYnWVqLJclsQQ5bQ8J8WgSJMbM1f5GTinln25Fc0LZ8H9GY36dG1fLQvsB9JJGNuHWHHa0DHc0mHszTwgddzxeAynrDY0zEqddxDEF08ajEBAIpth0ATBNGKQgs30KGq1-F4eWVVSGPX14PySAyBPM6hFPcVOoNwdldY~oRLrMByYvMLXmYQ__' },
  

  // Add more teachers as needed
];

const SliderCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teachers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teachers.length) % teachers.length);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 mb-14">
      <h2 className="text-4xl font-bold text-bgcust mb-4 poppins-bold">Teachers</h2>
      <div className='h-1 bg-bgcust w-20 rounded'>

      </div>
      <div className="relative flex items-center justify-between">
        <button
          onClick={prevSlide}
          className="absolute left-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none z-50"
        >
          &#8592;
        </button>
        <div className="flex overflow-hidden w-full justify-center items-center z-20">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}>
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className={`rounded-lg w-full md:w-1/3 flex-shrink-0 p-2 transition-transform duration-500 ${index === currentIndex + 1 ? 'transform scale-110 ' : 'transform scale-95 '}`}
                style={{ transformOrigin: 'center center' }}
              >
                <div className="bg-white rounded-lg shadow-xl overflow-hidden w-[290px] h-[360px] mx-4">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 flex flex-col justify-center items-center">
                    <h3 className="text-xl font-bold poppins-bold">{teacher.name}</h3>
                    <p className="text-gray-500 poppins-medium">{teacher.subject}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none z-50"
        >
          &#8594;
        </button>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {teachers.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${Math.floor(currentIndex / cardsToShow) === Math.floor(index / cardsToShow) ? 'bg-bgcust' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderCard;

