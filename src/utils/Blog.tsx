import React from "react";
import { Button } from "@/components/ui/button";

const blogData = [
  {
    image: "/hero/blogs/1.png",
    title: "Why Java is best programming language?",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts ...",
  },
  {
    image: "/hero/blogs/2.png",
    title: "Why Java is best programming language?",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts ...",
  },
  {
    image: "/hero/blogs/3.png",
    title: "Why Java is best programming language?",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts ...",
  },
  {
    image: "/hero/blogs/4.png",
    title: "Why Java is best programming language?",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts ...",
  },
  {
    image: "/hero/blogs/5.png",
    title: "Why Java is best programming language?",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts ...",
  },
  {
    image: "/hero/blogs/6.png",
    title: "Why Java is best programming language?",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts ...",
  },
];

const Blog = () => {
  return (
    <section className="py-12">
      <div className=" flex flex-col items-center justify-center px-4">
        <h2 className="inter-bold mb-4 text-center text-3xl font-bold text-bgcust">
          Helpful Blogs
        </h2>
        <p className="inter-medium mb-4  text-center text-4xl text-black lg:w-[768px]">
          Articles will help to to stay up to date with all the knowledge
        </p>
        <p className="inter-medium mb-6 text-center text-xl text-black lg:w-[690px]">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {blogData.map((blog, i) => (
            <div
              key={i}
              className="h-[450px]  w-[300px] overflow-hidden bg-white md:h-[495px] md:w-[376px] lg:h-[495px] lg:w-[376px]"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-[253px] w-full rounded-lg object-cover"
              />
              <div className="py-4">
                <h3 className="poppins-bold mb-2 text-xl font-extrabold">
                  {blog.title}
                </h3>
                <p className="inter-medium mb-4 text-sm text-gray-600">
                  {blog.description}
                </p>
                <a href="#" className="text-blue-500 hover:underline"></a>
                <Button
                  variant="outline"
                  className="inter-medium rounded-full border-bgcust text-bgcust"
                >
                  Read Article &rarr;
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
