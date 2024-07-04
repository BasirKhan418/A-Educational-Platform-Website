import React from 'react';
import CourseCard from '@/components/CourseCard';
import Title from '@/components/title';

interface Course {
  title: string;
  duration: string;
  videos: number;
  students: number;
  rating: number;
  image: string;
}

const courses: Course[] = [
  {
    title: "Dasar Pemrograman WEB",
    duration: "4.5 Jam",
    videos: 20,
    students: 1900,
    rating: 4.9,
    image: "https://s3-alpha-sig.figma.com/img/6e39/35ad/c921c8b56030da788ab8c46dd2f36cf4?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OFemsjrU4JxMpBYm~8R3j5Gz9eo4Cam1qN9zgltYAh8cU4LdZdZBf5sVDkSpg~H3d5jto4e0pfesQTXgLIjbr6V5JVJ~aMN4~jr0eKWN1cC78s9mOOpG-Pda3FjmmaWLJXT9qbtCWp8EB3MSnAEHBVm936rFXYhqayXusfbfDXKtIhJgyw4k2PagY2a0S37nULMBd-OsdEqOAhWq657FKp-FAL6V6KvfwqcREh7P96p2ppbg4a8k~bcCSBhXzpmTU5mIE3rufxujKGQ0~nhkY8W48tCY8TYtS5k-ygRj8ksw8w5X9EIUxNarskwlRDsPhyS0vFEzQ4AQTW0w7lNjuw__",
  },
  {
    title: "Digital Marketing 101",
    duration: "6.2 Jam",
    videos: 32,
    students: 930,
    rating: 4.9,
    image: "https://s3-alpha-sig.figma.com/img/0837/bd31/c99c42327cb76d68552398bf05be387b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F~paxJUZIzLEw-f4Vq4OTW6wkUVlrGzPTnsT99UwSsCAuMUIPhO4VdeWNdzk1S00xpJLvX9Wqo~pAHuXmzRfPYBixwYV-Sp5Ga~MK13W7qe2a9KSXYJf7ErTuynFCW~QGNAsh6rCXYtIVWDi2YCFgwxWB~5mwoSaMJMYqvARjJEzy~heM7AJDTVG5UTZJkjNdMcQs7sG0CQpC~oc4bj4EHLS54o2lVCBSOGuPF0n0abVJa5unAtWYw5Kuh~L3narttyheJ8KG7~Ur~eN2zjBooPLfw33GFT-hRA1~5Bei2tCrWawnxeBtpy0BkYI6RXeGSTRMCp8DUbrGcgQtFulXg__",
  },
  {
    title: "Data Science Dasar",
    duration: "8 Jam",
    videos: 46,
    students: 1043,
    rating: 4.9,
    image: "https://s3-alpha-sig.figma.com/img/7a5f/28c7/f57b8bf59e8e11935f1a8dca1817e371?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yxq6oYO6nOzhNIyvsprBa3SV-PLABsohusYXboUmbdVMSG~UcN~qiVns1Qud8JvFFjCTxkMXa3eVHYRvrPts06HTrVIP3O3Ec~KbZWf9wOu0laNf21OiijmrLN2VIQews2xioV-Cvd69fLKfsdi90n3HWpssVXAfa2ZdBTyNvmxioeRMieEWNfjxflc9iQdeCQZl8Mz4KMtWZwja43ppDxp4fWbEfVIWjA9aoJr4k7wZJ51ki4g0o9adZ2SMOfbFNtV5yTi-V9aAnQ1lLPzTN6k3Z~v7hWXDxdc0JRqmVbcWeH8YIqzRwwxxlPfUZzA~BZVg8wWgMTqDIShfZmht-A__",
  },
  {
    title: "Dasar Pemrograman WEB",
    duration: "4.5 Jam",
    videos: 20,
    students: 1900,
    rating: 4.9,
    image: "https://s3-alpha-sig.figma.com/img/6e39/35ad/c921c8b56030da788ab8c46dd2f36cf4?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OFemsjrU4JxMpBYm~8R3j5Gz9eo4Cam1qN9zgltYAh8cU4LdZdZBf5sVDkSpg~H3d5jto4e0pfesQTXgLIjbr6V5JVJ~aMN4~jr0eKWN1cC78s9mOOpG-Pda3FjmmaWLJXT9qbtCWp8EB3MSnAEHBVm936rFXYhqayXusfbfDXKtIhJgyw4k2PagY2a0S37nULMBd-OsdEqOAhWq657FKp-FAL6V6KvfwqcREh7P96p2ppbg4a8k~bcCSBhXzpmTU5mIE3rufxujKGQ0~nhkY8W48tCY8TYtS5k-ygRj8ksw8w5X9EIUxNarskwlRDsPhyS0vFEzQ4AQTW0w7lNjuw__",
  },
  {
    title: "Digital Marketing 101",
    duration: "6.2 Jam",
    videos: 32,
    students: 930,
    rating: 4.9,
    image: "https://s3-alpha-sig.figma.com/img/0837/bd31/c99c42327cb76d68552398bf05be387b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F~paxJUZIzLEw-f4Vq4OTW6wkUVlrGzPTnsT99UwSsCAuMUIPhO4VdeWNdzk1S00xpJLvX9Wqo~pAHuXmzRfPYBixwYV-Sp5Ga~MK13W7qe2a9KSXYJf7ErTuynFCW~QGNAsh6rCXYtIVWDi2YCFgwxWB~5mwoSaMJMYqvARjJEzy~heM7AJDTVG5UTZJkjNdMcQs7sG0CQpC~oc4bj4EHLS54o2lVCBSOGuPF0n0abVJa5unAtWYw5Kuh~L3narttyheJ8KG7~Ur~eN2zjBooPLfw33GFT-hRA1~5Bei2tCrWawnxeBtpy0BkYI6RXeGSTRMCp8DUbrGcgQtFulXg__",
  },
  {
    title: "Data Science Dasar",
    duration: "8 Jam",
    videos: 46,
    students: 1043,
    rating: 4.9,
    image: "https://s3-alpha-sig.figma.com/img/7a5f/28c7/f57b8bf59e8e11935f1a8dca1817e371?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yxq6oYO6nOzhNIyvsprBa3SV-PLABsohusYXboUmbdVMSG~UcN~qiVns1Qud8JvFFjCTxkMXa3eVHYRvrPts06HTrVIP3O3Ec~KbZWf9wOu0laNf21OiijmrLN2VIQews2xioV-Cvd69fLKfsdi90n3HWpssVXAfa2ZdBTyNvmxioeRMieEWNfjxflc9iQdeCQZl8Mz4KMtWZwja43ppDxp4fWbEfVIWjA9aoJr4k7wZJ51ki4g0o9adZ2SMOfbFNtV5yTi-V9aAnQ1lLPzTN6k3Z~v7hWXDxdc0JRqmVbcWeH8YIqzRwwxxlPfUZzA~BZVg8wWgMTqDIShfZmht-A__",
  },
];

const Course: React.FC = () => {
  return (
    <section id="course" className='section-width space-y-4 poppins-bold my-28'>
      <div className='mb-20'>
     <Title title="Popular courses " className='mx-2' />
     </div>
    <div className="flex flex-wrap justify-center items-center w-full ">
          
      {courses.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
      
     
    </div>
    <div className='flex justify-center items-center '>
    <div className="flex lg:justify-between md:justify-between xl:justify-between justify-center items-center relative">
        <a href="#" className="text-bgcust inter-bold mx-2 text-2xl hidden lg:block md:block md:text-xl">View All Courses</a>
        <div className='hidden lg:block md:block'>

        
        <span className='absolute left-48 flex justify-center items-center w-[54vw] bottom-10 poppins-bold text-gray-500 '>
        We help you find the perfect tutor. It is completely free. Explore all courses <span className='text-bgcust mx-2'>&rarr;</span>
        </span>
        </div>
        <div className='h-[2px] bg-gray-600 w-[54vw] hidden lg:block md:block md:text-xl mx-3'></div>
        <button  className="text-bgcust inter-medium mx-2 text-sm border-2 p-4 rounded-full border-bgcust lg:mr-10 md:mr-10 w-full md:w-36 lg:w-36">All Courses <span>&rarr;</span></button>
      </div>
    </div>
    </section>
  );
};

export default Course;
