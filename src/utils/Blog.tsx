import React from 'react';
import { Button } from '@/components/ui/button';
const Blog = () => {
  return (
    <section className="py-12">
      <div className=" flex justify-center items-center flex-col px-4">
        <h2 className="text-3xl font-semibold text-center text-bgcust inter-bold mb-4">Helpful Blogs</h2>
        <p className="text-center text-black  inter-bold text-4xl lg:w-[768px] mb-4">
        Articles will help to to stay up to date with all the knowledge
        </p>
        <p className='inter-medium text-sm lg:w-[572px] text-black mb-6 text-center'>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-4">
          {Array(6).fill().map((_, i) => (
            <div key={i} className="bg-white  overflow-hidden lg:h-[495px] lg:w-[376px] md:h-[495px] md:w-[376px] h-[450px] w-[300px]">
              <img
                src={`https://s3-alpha-sig.figma.com/img/9845/55ed/732092e39c81c58a053fc39a193a4317?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TJQvEbU3bY1veUW9CVWcAoJLdiZVY1v1BnMS54-bkDnoiLzzNuQal5ZZEDGH1jVXy~6bWVy70dVnf7v-apz-DCcGKP6MzTCNgRFRS5kW2C-Xe2G8ymE59GtfoApcslwQRxlKEm4YKBYwqkmwDKDwRlQMIN82gFaJevJ94-p8foSN5zNUtRMdL8423Xs6TbnhHpUyuukj0Enstxb66InjkTLPo9xfCOCC~cxnPYYfx2Vt8WQMzymt-soraFuRsD4WOpj7x6QBOzQDzcVSZ9lTKTSs9bELGGw1jilP7v7nZcmts9aBAyO2uAHKw1k0mM1YG3M~YbVuhYUwhlnG4BNH-g__`}
                alt="Blog"
                className="w-full h-[253px] object-cover rounded-lg"
              />
              <div className="py-4">
                <h3 className="text-xl font-semibold mb-2 poppins-bold">Why Java is best programming language?</h3>
                <p className="text-gray-600 mb-4 inter-medium text-sm">
                  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts ...
                </p>
                <a href="#" className="text-blue-500 hover:underline"></a>
                <Button variant="outline" className='rounded-full border-bgcust text-bgcust inter-medium'>
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
