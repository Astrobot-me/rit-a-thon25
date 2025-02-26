import React from "react";
import { Code, Layout, CheckCircle, Lightbulb, Trophy, BadgeInfo, PencilRuler } from "lucide-react";

const criteria = [
  {
    title: "Technology",
    description: "Technical complexity and innovation",
    icon: <Code className=" text-white  w-7 h-7" />,
  },
  {
    title: "Design",
    description: "UI/UX and user-friendliness",
    icon: <Layout className="te  text-white w-7 h-7" />,
  },
  {
    title: "Completion",
    description: "Functionality and implementation of the project",
    icon: <CheckCircle className="text-white w-7 h-7" />,
  },
  {
    title: "Learning",
    description: "Effort, new skills learned, and creativity",
    icon: <Lightbulb className="text-white  w-7 h-7" />,
  },
];

const Judging = () => {
  return (
    <section id="judging" className="py-20  bg-white sm:h-screen h-auto flex  items-center">
        {/* bg-[#111827] */}
      <div className="max-w-4xl mx-auto px-4 text-black">
        {/* Section Title */}
        <div className="flex items-center justify-center mb-12 font-Krona">
          <PencilRuler className="w-8 h-8 mr-3 text-yellow-400 drop-shadow-lg" />
          <h2 className="text-3xl sm:text-4xl font-bold">Judging Criteria</h2>
        </div>

        {/* Criteria Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {criteria.map((criterion, index) => (
            <div
              key={index}
              className="bg-pamplet p-6 rounded-xl backdrop-blur-md border border-yellow-600 shadow-lg transition-all hover:scale-105 hover:border-yellow-800"
            >
              <div className="flex flex-col text-center items-center gap-4 font-inter">
                <span className="w-20 h-20 bg-gray-900/50 rounded-full flex items-center justify-center shrink-0">
                  {criterion.icon}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold ">{criterion.title}</h3>
                  <p className=" mt-1">{criterion.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center bg-pamplet/20 rounded-xl p-4 text-black mt-10 flex sm:flex-row flex-col items-center gap-2 sm:text-lg text-md font-inter font-normal">
          <BadgeInfo className="text-yellow-400 w-28 drop-shadow-lg" />
         <p className="sm:px-28 px-0"> Each Criteria holds <span className="font-bold"> 25% Weightage</span>
         <br></br>
         <span className="text-sm italic">The decision of the judges will be final and binding</span>
         </p>
        </p>
      </div>
      
    </section>
  );
};

export default Judging;
