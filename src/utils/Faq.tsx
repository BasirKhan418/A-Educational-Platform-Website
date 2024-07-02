"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "How to enroll for a Course?",
      answer:
        "You can enroll by visiting our courses page and selecting the course you are interested in.",
    },
    {
      question: "Can I get the recordings of my previous lectures?",
      answer:
        "Yes, all previous lecture recordings are available in your student dashboard.",
    },
    {
      question: "Who would be the instructor for enrolled course?",
      answer:
        "Our instructors are industry experts with years of experience in their respective fields.",
    },
    {
      question:
        "What kind of placement support will be given post completion of program?",
      answer:
        "We provide placement assistance including resume building, mock interviews, and connecting you with potential employers.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h3 className="font-bold mb-4 poppins-bold text-sm text-bgcust">
        ASK YOUR QUESTIONS
      </h3>
      <h2 className="font-bold mb-4 poppins-bold lg:text-6xl md:text-6xl text-4xl text-black">
        Frequently Asked Questions
      </h2>
      <div className="h-1 bg-bgcust rounded w-40 mb-4"></div>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 shadow">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left flex justify-start items-center py-4 px-2 bg-white rounded-lg focus:outline-none"
          >
            <span className="text-bgcust w-[20px]">
              {open === index ? <Minus /> : <Plus />}
            </span>
            <span className="mx-2 inter-medium font-bold text-black">
              {faq.question}
            </span>
          </button>
          <AnimatePresence>
            {open === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-2 p-4 bg-gray-50 rounded-lg inter-medium text-sm">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
