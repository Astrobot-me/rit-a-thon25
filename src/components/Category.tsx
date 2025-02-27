import React from "react";
import { GraduationCap, User, Trophy, FileText, ExternalLink, BadgeInfo } from "lucide-react";

const Categories: React.FC = () => {
  return (
    <section id="categories" className="py-20 bg-white sm:h-screen h-auto flex items-center">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center flex justify-center items-center gap-3 text-black font-Krona">
          <Trophy className="text-yellow-400 w-8 h-8 drop-shadow-lg " />
          Hackathon Categories
        </h2>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 font-inter">
          {/* Class A Card */}
          <div className="bg-pamplet p-8 rounded-xl backdrop-blur-md border border-purple-500/40 shadow-lg transition-all hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-black">
              <GraduationCap className=" w-7 h-7" />
              Category A (Beginners Level)
            </h3>
            <ul className="space-y-3 text-black font-inter ml-5">
              <li className="flex items-center gap-2">
                <User className="text-black w-5 h-5" /> First-year students
              </li>
              <li className="flex items-center gap-2">
                <FileText className="text-black w-5 h-5" /> B.Tech
              </li>
              <li className="flex items-center gap-2">
                <FileText className="text-black w-5 h-5" /> BBA
              </li>
              <li className="flex items-center gap-2">
                <FileText className="text-black w-5 h-5" /> BCA
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="#"
                className="py-3 px-6 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all shadow-lg flex justify-center gap-2 text-white font-medium"
              >
                <Trophy className="w-5 h-5" /> Register for Category A 
                <ExternalLink width={20}/>
              </a>
            </div>
          </div>

          {/* Class B Card */}
          <div className="bg-pamplet  p-8 rounded-xl backdrop-blur-md border border-yellow-500/40 shadow-lg transition-all hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-black">
              <GraduationCap className="w-7 h-7" />
              Category B (Advanced Level)
            </h3>
            <ul className="space-y-3 text-black ml-5 ">
              <li className="flex items-center  gap-2">
                <User className=" w-5 h-5" /> Second, third, and final-year students
              </li>
              <li className="flex items-center gap-2">
                <FileText className=" w-5 h-5" /> B.Tech
              </li>
              <li className="flex items-center gap-2">
                <FileText className=" w-5 h-5" /> MBA
              </li>
              <li className="flex items-center gap-2">
                <FileText className=" w-5 h-5" /> MCA
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="https://docs.google.com/forms/d/11PSHPYg96NbF7fCgEr8cUq5D2lSBbL4BO7XxJeWuTIs/viewform?edit_requested=true&pli=1"
                className="py-3 px-6 bg-yellow-500 hover:bg-yellow-600 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 text-black font-medium"
                target="_blank"
              >
                <Trophy className="w-5 h-5" /> Register for Category B <ExternalLink width={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center bg-pamplet/20 rounded-xl p-4 text-black mt-10 flex sm:flex-row flex-col justify-center items-center gap-2 sm:text-lg text-md font-inter font-normal">
          <BadgeInfo className="text-yellow-400 w-28 drop-shadow-lg" />
         <p> Separate <span className="font-bold">Problem statements</span> will be mailed to the <span className="font-bold">Team leaders</span>, 12 hours prior to the hackathon and <span className="font-bold">winners will be Separate for both the categories</span></p>
        </p>
      </div>
    </section>
  );
};

export default Categories;
