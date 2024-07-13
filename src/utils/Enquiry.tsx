/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Toaster,toast } from 'sonner';
import React, { useState } from 'react';
const EnquiryForm = () => {
    const [enqform,setEnqForm] = useState({
        firstName:'',
        lastName:'',
        email:'',
        address:'',
        comment:'',
        standard:''
    })
    const [loading,setLoading] = useState(false)
    const handleChange = (e:any) => {
        setEnqForm({
            ...enqform,
            [e.target.name]:e.target.value
        })
    }
    //handle submit
    const handleSubmit = async(e:any) => {
        e.preventDefault()
        if(enqform.firstName === '' || enqform.lastName === '' || enqform.email === '' || enqform.address === '' || enqform.comment === '' || enqform.standard === ''){
            toast.error('Please fill all the fields')
            return;
        }
        try{
            setLoading(true)
        const res = await fetch(`https://script.google.com/macros/s/AKfycbwW-Zm1X-C0igI4LioNO7KoDfxyr2xtVIduF7UE0PO30JRoimxnysuHuYZSofSdV3bzYA/exec`, {
            method: 'POST',
            redirect: "follow",
            headers: {
              "Content-Type": "text/plain;charset=utf-8",
            },
            body: JSON.stringify(enqform)
          })
          const result = await res.json()
          setLoading(false)
          if(result.status=="success"){
            toast.success('Form submitted successfully')
             setEnqForm({
            firstName:'',
            lastName:'',
            email:'',
            address:'',
            comment:'',
            standard:''
             })
          }
          else{
            toast.error('Something went wrong.Please try again later.')
          
          }
        }
        catch(err){
            console.log(err)
        }
    }
  return (
    <>
    <Toaster position="top-center" expand={false}/>
    <div className="flex justify-center items-center min-h-screen poppins-medium ">
      <form className="w-full max-w-2xl bg-white p-8 rounded-lg relative mb-32" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            name="firstName"
            onChange={handleChange}
            value={enqform.firstName}
            placeholder="First Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            name="lastName"
            onChange={handleChange}
            value={enqform.lastName}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            value={enqform.email}
            placeholder="e.g. mary@example.com"
          />
          <p className="text-gray-600 text-xs ">Confirmation email will be sent to this address</p>
          <div className='h-4 w-4 rounded-full bg-bgcust absolute -left-52 top-10 hidden lg:block '>

          </div>
          <div className='h-2 w-2 rounded-full bg-bgcust absolute -right-52 top-20 hidden lg:block '>

          </div>
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            name="address"
            onChange={handleChange}
            value={enqform.address}
            placeholder="Address"
          />
           <div className='h-4 w-4 rounded-full bg-bgcust absolute -right-20 top-20 hidden lg:block '>

</div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">
            Comment
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="comment"
            placeholder="Write here"
            name="comment"
            onChange={handleChange}
            value={enqform.comment}
          />
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2">Standard</label>
          <div className="flex items-center">
            <input
              className="mr-2 leading-tight"
              type="radio"
              id="standard8"
                name="standard"
                onChange={handleChange}
                checked={enqform.standard === '8th'}

                value="8th"
            />
            <label className="text-gray-700" htmlFor="standard8">
              8th
            </label>
          </div>
          <div className="flex items-center">
            <input
              className="mr-2 leading-tight"
              type="radio"
              id="standard9"
              name="standard"
                onChange={handleChange}
                checked={enqform.standard === '9th'}
              value="9th"
            />
            <label className="text-gray-700" htmlFor="standard9">
              9th
            </label>
            <div className='h-4 w-4 rounded-full bg-bgcust absolute -right-96 bottom-0 hidden lg:block '>

</div>
            <div className='h-3 w-3 rounded-full bg-bgcust absolute -left-40 bottom-0 hidden lg:block '>

</div>
        <div className='h-3 w-3 rounded-full bg-bgcust absolute -left-40 bottom-0 hidden lg:block '>

</div>

          </div>
          <div className="flex items-center">
            <input
              className="mr-2 leading-tight"
              type="radio"
              id="standard10"
              name="standard"
                onChange={handleChange}
                checked={enqform.standard === '10th'}
                
              value="10th"
            />
            <label className="text-gray-700" htmlFor="standard10">
              10th
            </label>
          </div>
        </div>
        <div className='h-[2px] bg-bgcust w-full mb-4'></div>
        <div className="flex items-center justify-start relative">
          <button
            className="bg-bgcust hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {loading ? 'Submitting....' : 'Continue'}
          </button>
          <div className="flex items-center mx-4">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              id="rememberMe"
            />
            <label className="text-gray-700" htmlFor="rememberMe">
              Remember me!
            </label>
          </div>
          <div className='h-3 w-3 rounded-full bg-bgcust absolute  -bottom-10 left-40 hidden lg:block'>

</div>
<div className='h-2 w-2 rounded-full bg-bgcust absolute right-32 top-4 hidden lg:block '>

</div>

        </div>
        <div className='absolute bottom-4 -right-40 hidden lg:block md:block'>
            <img src="/about/plant.svg" alt="" className='h-40'/>
        </div>
      </form>
    </div>
    </>
  );
};

export default EnquiryForm;
