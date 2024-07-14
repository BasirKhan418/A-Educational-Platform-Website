// components/FeatureCards.tsx
import React from 'react';

interface Card {
  title: string;
  description: string;
  image: string;
}

const cards: Card[] = [
  { title: 'Faculty', description: 'Highly Exp. Faculty members who are trained to teach as per the CBSE pattern followed at Educare plus.', image: '/about/cardicons/icon1.svg' },
  { title: 'Assistant Teacher', description: 'Capable team of teachers to assist the students with their individual problems as and when required.', image: '/about/cardicons/icon2.svg' },
  { title: 'Trusted Content', description: 'Created by experts, library of trusted practice and lessons covers math, science, and more. Library of video lectures.', image: '/about/cardicons/icon3.svg' },
  { title: 'Difficulty Sessions', description: 'Specially designed worksheets provide targeted practice for effective learning and revision.', image: '/about/cardicons/icon4.svg' },
  { title: 'Smart Classrooms', description: 'Audio visual aids and PowerPoint enhance revision through interactive content.', image: '/about/cardicons/icon5.svg' },
  { title: 'Analysis Report', description: 'Chapter-wise Analysis helps to understand the strength and weaknesses of students.', image: '/about/cardicons/icon6.svg' },
  { title: 'Parent App', description: "Regular update of child's Performance in maths, H/W & Tests in graphical form. Analytical report of students.", image: '/about/cardicons/icon7.svg' },
  { title: 'Remedial Classes', description: 'Struggling students attend weekend classes for additional practice on challenging topics.', image: '/about/cardicons/icon8.svg' },
  { title: 'Counselling Department', description: 'Specially designed worksheets provide targeted practice for effective learning and revision.', image: '/about/cardicons/icon9.svg' },
];

const FeatureCards: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 mb-52">
        <h1 className='text-4xl poppins-bold text-center mb-14'>
        Why it’s works
        </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-lg">
            <img src={card.image} alt={card.title} className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold mb-2 poppins-bold">{card.title}</h3>
            <p className="text-gray-600 w-[334px] poppins-medium">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureCards;
