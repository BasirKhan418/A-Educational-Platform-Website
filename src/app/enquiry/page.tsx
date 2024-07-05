import React from 'react'
import EnquiryForm from '@/utils/Enquiry'
const page = () => {
  return (
    <div className=''>
      <div className='w-full h-full flex justify-center items-center lg:mt-0 md:mt-0 mt-[70px] '>
        <img src="/enqsvg.svg" alt="" className='w-full relative' />
        <h1 className='text-white text-4xl absolute poppins-bold lg:top-[145px] md:top-[100px]'>
          Enquiry Form
        </h1>
      <div className='h-1 w-full absolute bg-white lg:top-[200px] hidden lg:block '></div>
      </div>
     <EnquiryForm/>
    </div>
  )
}

export default page
