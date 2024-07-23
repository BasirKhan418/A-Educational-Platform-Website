import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface VisionCardProps {
  title: string;
  timings: {
    morning: string;
    noon: string;
    evening: string;
  };
  subjects: string[];
  syllabusCompletion: string;
  revision: string;
  tests: string;
  testSeries: string;
}

const VisionCard: React.FC<VisionCardProps> = ({
  title,
  timings,
  subjects,
  syllabusCompletion,
  revision,
  tests,
  testSeries,
}) => {
  return (
    <Card className="mx-auto my-4 flex w-full transform flex-col justify-center rounded-lg bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 md:w-3/4 lg:w-[22rem]">
      <CardHeader>
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <hr />
        <div className="flex justify-between">
          <span className="font-semibold text-gray-400">Timings</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Morning</span>
          <span>{timings.morning}</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Noon</span>
          <span>{timings.noon}</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Evening</span>
          <span>{timings.evening}</span>
        </div>
        <hr />
        <div className="flex justify-between">
          <span className="font-semibold text-gray-400">Subjects</span>
          <div className="flex flex-col items-end space-y-1 font-semibold">
            {subjects.map((subject, index) => (
              <span key={index}>{subject}</span>
            ))}
          </div>
        </div>
        <hr />
        <div className="flex justify-between">
          <span className="font-semibold text-gray-400">Syllabus</span>
          <span className="font-semibold">{syllabusCompletion}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-400">Revision</span>
          <span className="font-semibold">{revision}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-400">Tests</span>
          <span className="font-semibold">{tests}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-400">Test Series</span>
          <span className="font-semibold">{testSeries}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default VisionCard;
