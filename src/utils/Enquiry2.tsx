"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check, MapPin, PhoneCall } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";


const Enquiry2 = () => {
  const router = useRouter();

  const [formSubmitted, setformSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    studentName: "",
    std: "VII",
    schoolName: "",
    email: "",
    address: "",
    mobileNumber: "",
    demoClass: "",
  });

  const [errors, setErrors] = useState({
    studentName: false,
    std: false,
    schoolName: false,
    email: false,
    address: false,
    mobileNumber: false,
    demoClass: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | string) => {
    if(typeof e === "string"){
      setFormData({ ...formData, std: e });
      setErrors({ ...errors, std: false });
      return;
    }
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: false });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, demoClass: e.target.value });
    setErrors({ ...errors, demoClass: false });
  };

  const { toast } = useToast();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = {
      studentName: formData.studentName === "",
      std: formData.std === "",
      schoolName: formData.schoolName === "",
      email: formData.email === "",
      address: formData.address === "",
      mobileNumber: formData.mobileNumber === "",
      demoClass: formData.demoClass === "",
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (!hasErrors) {
      toast({
        title: "Thank your for showing interest!",
        description: "We will reach out to you soon.",
      })
      setformSubmitted(true);
      setTimeout(() => {
        router.push("/");
      }, 1500);
    }
  };
  const handleBackClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      router.push("/");
      console.log("Navigation successful");
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <div className="relative">
      <div
        className="relative flex h-[218px] w-full justify-center md:h-[318px] lg:h-[318px]"
        style={{ backgroundColor: "rgba(2, 179, 228, 0.17)" }}
      >
        <div className="absolute left-2 top-10">
          {/* <img
            src="https://s3-alpha-sig.figma.com/img/a882/5901/1ad79801565535bce92321fc3543c61a?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dw5fSehbWB4s03pzABNmKt-vQ~Y3fEF1sE1vY0qjvTXNro1H8NXP288pmbkh1DugTaRlN1iEt3N5Wggn2LAo~MLAZnykOCs9AWVZNmIncdde5VYAjacDrk~Egvi-4pZPSz4S0LcABmi3q5kK1YNrGwdQRhpLXf041I4DZbLaIoZTzfXtux8V5EW8Mp2C7et5wgmJ41yIvqWEqfJdwXVPzYvwpev-eNIJw6nyI4B~QAKHjeg9UyYdoSeBog21Kqa6EzDvC3fJeXJWS1itsojR~G2VC1~zyFwUMj5gRAwcDnPXVQoer5cqwKwCS-NA-qaGs6rjC5AO-PXCbBkC~Brydw__"
            alt=""
            className="h-[161px] w-[161px] rounded-full"
          /> */}
        </div>

        <div className="mt-20">
          <h1 className="poppins-bold pt-10 text-center text-4xl text-bgcust">
            Get In Touch
          </h1>
          <div className="w-42 mt-4 h-[2px] bg-bgcust lg:w-[600px]"></div>
        </div>
      </div>
      <div className="z-50 flex min-h-screen items-center justify-center ">
<<<<<<< HEAD
        <div className="w-full max-w-6xl rounded-lg  bg-gradient-to-b from-[#02B3E4] to-[#0790B6] p-6 shadow-xl md:absolute md:top-52 lg:absolute lg:top-52">
          <div className="grid grid-cols-1 gap-6 px-5 md:grid-cols-2">
            {/* LEFT CONTACT SIDE */}

            <div className="flex flex-col justify-between rounded-lg p-6 text-white">
              <div className="relative flex flex-col items-center gap-16">
                <div>
                  <button
                    onClick={handleBackClick}
                    className="absolute -left-10 flex h-8 w-8 items-center justify-center text-white"
                  >
                    <ArrowLeft className="" />
                  </button>
                </div>
                <div className="flex flex-col justify-start self-start">
=======
        <div className="w-full max-w-6xl rounded-lg shadow-xl md:absolute md:top-52 lg:absolute lg:top-52">
          <div className="grid grid-cols-1 gap-6 bg-white md:grid-cols-2">
            {/* LEFT CONTACT SIDE */}
            <div className="flex flex-col justify-between rounded-lg bg-gradient-to-b from-[#02B3E4] to-[#0790B6] p-6 text-white md:p-16">
              <div className="flex items-center gap-4">
                <button
                  onClick={handleBackClick}
                  className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-black"
                >
                  <ArrowLeft className="h-6 w-6 rounded-full text-white" />
                </button>
                <div className="flex flex-col justify-center">
>>>>>>> 5eaaf883450facb069a98c870ccc3e88e88d2f4e
                  <h2 className="poppins-bold mb-2 text-4xl font-bold lg:text-5xl">
                    Contact us
                  </h2>
                  <div className="h-1 w-28 rounded bg-white"></div>
                </div>
              </div>
              <div>
                <p className="my-2 mb-2 text-lg text-gray-200">
                  Corporate Office:
                </p>
                <p className="poppins-bold text-3xl font-semibold">
                  Gour&apos;s Educare Plus
                </p>
                <p className="relative my-2 mb-2 flex w-[282px]">
                  <MapPin className="absolute -left-10 top-0 w-10" />
                  Near Pink Girls Hostel, Behind KRIMS Hospital, Ramdaspeth,
                  Nagpur - 10
                </p>
              </div>
              <div className="relative flex items-center">
                <PhoneCall className="absolute -left-10 top-1/2 h-6 w-8 -translate-y-1/2" />
                <div className="flex flex-col">
                  <p className="text-lg text-gray-200">Call:</p>
                  <p className="poppins-medium text-md">
                    9881244063 || 9970320890
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT CONTACT SIDE */}
            <div className="poppins-medium rounded-lg bg-white p-6">
              {!formSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="mb-2 block font-bold text-gray-700"
                      htmlFor="student-name"
                    >
                      Student Name
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="Enter student name"
                      className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none ${errors.studentName ? "border-red-500" : ""}`}
                    />
                    {errors.studentName && (
                      <p className="text-xs italic text-red-500">
                        Please enter the student&apos;s name.
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      className="mb-2 block font-bold text-gray-700"
                      htmlFor="std"
                    >
                      STD
                    </label>
                    <Select name="std" value={formData.std} onValueChange={handleChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a standard" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={"VII"}>VII</SelectItem>
                        <SelectItem value="VIII">VIII</SelectItem>
                        <SelectItem value="IX">IX</SelectItem>
                        <SelectItem value="X">X</SelectItem>
                      </SelectContent>
                    </Select>
                    {/* <input type="text" id="std" value={formData.std} /> */}
                    {errors.std && (
                      <p className="text-xs italic text-red-500">
                        Select a standard
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      className="mb-2 block font-bold text-gray-700"
                      htmlFor="school-name"
                    >
                      School Name
                    </label>
                    <input
                      type="text"
                      id="schoolName"
                      value={formData.schoolName}
                      onChange={handleChange}
                      className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none ${errors.schoolName ? "border-red-500" : ""}`}
                    />
                    {errors.schoolName && (
                      <p className="text-xs italic text-red-500">
                        Please enter the school name.
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      className="mb-2 block font-bold text-gray-700"
                      htmlFor="email-address"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none ${errors.email ? "border-red-500" : ""}`}
                      placeholder="e.g. mary@example.com"
                    />
                    {errors.email && (
                      <p className="text-xs italic text-red-500">
                        Please enter a valid email address.
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      className="mb-2 block font-bold text-gray-700"
                      htmlFor="address"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      value={formData.address}
                      onChange={handleChange}
                      className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none ${errors.address ? "border-red-500" : ""}`}
                    />
                    {errors.address && (
                      <p className="text-xs italic text-red-500">
                        Please enter the address.
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      className="mb-2 block font-bold text-gray-700"
                      htmlFor="mobile-number"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      id="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none ${errors.mobileNumber ? "border-red-500" : ""}`}
                      placeholder="+91xxxxxxxxxx"
                    />
                    {errors.mobileNumber && (
                      <p className="text-xs italic text-red-500">
                        Please enter a valid mobile number.
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="mb-2 block font-bold text-gray-700">
                      Interested in Demo Class
                    </label>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="yes"
                        name="demoClass"
                        value="yes"
                        checked={formData.demoClass === "yes"}
                        onChange={handleRadioChange}
                        className="mr-2 leading-tight"
                      />
                      <label className="text-gray-700" htmlFor="yes">
                        Yes
                      </label>
                      <input
                        type="radio"
                        id="no"
                        name="demoClass"
                        value="no"
                        checked={formData.demoClass === "no"}
                        onChange={handleRadioChange}
                        className="ml-4 mr-2 leading-tight"
                      />
                      <label className="text-gray-700" htmlFor="no">
                        No
                      </label>
                    </div>
                    {errors.demoClass && (
                      <p className="text-xs italic text-red-500">
                        Please select an option.
                      </p>
                    )}
                  </div>
                  <div className="mb-4 flex h-full items-center">
                    <button
                      type="submit"
                      className="focus:shadow-outline bg-bgcust rounded px-8 py-2 uppercase text-white focus:outline-none"
                    >
                      Continue
                    </button>
                    <label className="mx-8 mb-2 flex h-full items-center text-gray-700">
                      <input
                        type="checkbox"
                        id="remember-me"
                        className="mr-2 leading-tight"
                      />
                      Remember me!
                    </label>
                  </div>
                </form>
              ) : (
                <div className="grid h-full min-h-[75vh] place-content-center space-y-2">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border bg-[#007aff26]">
                    <Check className="text-bluemain h-12 w-12" />
                  </div>
                  <div className="text-bluemain text-center">
                    <h1 className="text-lg">Thank you!</h1>
                    <h2 className="poppins-semibold text-2xl tracking-wide ">
                      We will reach out to
                      <br /> you soon.
                    </h2>
                  </div>
                </div>
<<<<<<< HEAD
                <div className="mb-4 flex h-full items-center">
                  <button
                    type="submit"
                    className="focus:shadow-outline rounded bg-bgcust px-4 py-2 font-bold text-white focus:outline-none"
                  >
                    Continue
                  </button>
                  <label className="mx-8 mb-2 block font-bold text-gray-700">
                    <input
                      type="checkbox"
                      id="remember-me"
                      className="mr-2 leading-tight"
                    />
                    Remember me!
                  </label>
                </div>
              </form>
=======
              )}
>>>>>>> 5eaaf883450facb069a98c870ccc3e88e88d2f4e
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry2;
