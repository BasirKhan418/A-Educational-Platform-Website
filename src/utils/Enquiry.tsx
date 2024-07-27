/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Toaster, toast } from "sonner";
import React, { useState } from "react";
const EnquiryForm = () => {
  const [enqform, setEnqForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    comment: "",
    standard: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e: any) => {
    setEnqForm({
      ...enqform,
      [e.target.name]: e.target.value,
    });
  };
  //handle submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      enqform.firstName === "" ||
      enqform.lastName === "" ||
      enqform.email === "" ||
      enqform.address === "" ||
      enqform.comment === "" ||
      enqform.standard === ""
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(
        `https://script.google.com/macros/s/AKfycbwW-Zm1X-C0igI4LioNO7KoDfxyr2xtVIduF7UE0PO30JRoimxnysuHuYZSofSdV3bzYA/exec`,
        {
          method: "POST",
          redirect: "follow",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(enqform),
        },
      );
      const result = await res.json();
      setLoading(false);
      if (result.status == "success") {
        toast.success("Form submitted successfully");
        setEnqForm({
          firstName: "",
          lastName: "",
          email: "",
          address: "",
          comment: "",
          standard: "",
        });
      } else {
        toast.error("Something went wrong.Please try again later.");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Toaster position="top-center" expand={false} />
      <div className="poppins-medium flex min-h-screen items-center justify-center ">
        <form
          className="relative mb-32 w-full max-w-2xl rounded-lg bg-white p-8"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="firstName"
              type="text"
              name="firstName"
              onChange={handleChange}
              value={enqform.firstName}
              placeholder="First Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="lastName"
              name="lastName"
              onChange={handleChange}
              value={enqform.lastName}
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="relative mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              value={enqform.email}
              placeholder="e.g. mary@example.com"
            />
            <p className="text-xs text-gray-600 ">
              Confirmation email will be sent to this address
            </p>
            <div className="absolute -left-52 top-10 hidden h-4 w-4 rounded-full bg-bgcust lg:block "></div>
            <div className="absolute -right-52 top-20 hidden h-2 w-2 rounded-full bg-bgcust lg:block "></div>
          </div>
          <div className="relative mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="address"
              type="text"
              name="address"
              onChange={handleChange}
              value={enqform.address}
              placeholder="Address"
            />
            <div className="absolute -right-20 top-20 hidden h-4 w-4 rounded-full bg-bgcust lg:block "></div>
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="comment"
            >
              Comment
            </label>
            <textarea
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="comment"
              placeholder="Write here"
              name="comment"
              onChange={handleChange}
              value={enqform.comment}
            />
          </div>
          <div className="relative mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Standard
            </label>
            <div className="flex items-center">
              <input
                className="mr-2 leading-tight"
                type="radio"
                id="standard8"
                name="standard"
                onChange={handleChange}
                checked={enqform.standard === "8th"}
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
                checked={enqform.standard === "9th"}
                value="9th"
              />
              <label className="text-gray-700" htmlFor="standard9">
                9th
              </label>
              <div className="absolute -right-96 bottom-0 hidden h-4 w-4 rounded-full bg-bgcust lg:block "></div>
              <div className="absolute -left-40 bottom-0 hidden h-3 w-3 rounded-full bg-bgcust lg:block "></div>
              <div className="absolute -left-40 bottom-0 hidden h-3 w-3 rounded-full bg-bgcust lg:block "></div>
            </div>
            <div className="flex items-center">
              <input
                className="mr-2 leading-tight"
                type="radio"
                id="standard10"
                name="standard"
                onChange={handleChange}
                checked={enqform.standard === "10th"}
                value="10th"
              />
              <label className="text-gray-700" htmlFor="standard10">
                10th
              </label>
            </div>
          </div>
          <div className="mb-4 h-[2px] w-full bg-bgcust"></div>
          <div className="relative flex items-center justify-start">
            <button
              className="focus:shadow-outline rounded bg-bgcust px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              {loading ? "Submitting...." : "Continue"}
            </button>
            <div className="mx-4 flex items-center">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                id="rememberMe"
              />
              <label className="text-gray-700" htmlFor="rememberMe">
                Remember me!
              </label>
            </div>
            <div className="absolute -bottom-10 left-40 hidden h-3  w-3 rounded-full bg-bgcust lg:block"></div>
            <div className="absolute right-32 top-4 hidden h-2 w-2 rounded-full bg-bgcust lg:block "></div>
          </div>
          <div className="absolute -right-40 bottom-4 hidden md:block lg:block">
            <img src="/about/plant.svg" alt="" className="h-40" />
          </div>
        </form>
      </div>
    </>
  );
};

export default EnquiryForm;
