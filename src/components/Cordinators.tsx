import React from "react";
import { Users, Briefcase, Code, UserCheck, Settings, Calendar, Megaphone, Package, Globe } from "lucide-react";

const teamMembers = [
  { name: "Dr. Abhay Bhatia", role: "Faculty Coordinator", icon: Briefcase, image: "https://placehold.co/400x400" },
  { name: "Aditya Raj", role: "Website Architect/ 2nd Year Student Coordinator", icon: Code, image: "https://placehold.co/400x400" },
  { name: "Priyanshu Gupta", role: "Student Coordinator/ 3rd Year", icon: UserCheck, image: "https://placehold.co/400x400" },
  { name: "Ridham Inani", role: "Student Coordinator/ 3rd Year", icon: UserCheck, image: "https://placehold.co/400x400" },
  { name: "Sneha Agarwal", role: "Student Coordinator/ 3rd Year", icon: UserCheck, image: "https://placehold.co/400x400" },
  { name: "Riddhi Bansal", role: "Student Coordinator/ 3rd Year", icon: UserCheck, image: "https://placehold.co/400x400" },
  { name: "Shivam Shyam", role: "Student Coordinator/ 3rd Year", icon: UserCheck, image: "https://placehold.co/400x400" },
  { name: "Harsh Raj Shukla", role: "Student Coordinator/ 2nd Year", icon: UserCheck, image: "https://placehold.co/400x400" },
  { name: "Ashwani Raj", role: "Student Coordinator/ 2nd Year", icon: UserCheck, image: "https://placehold.co/400x400" },
  { name: "Muskan Singh", role: "Student Coordinator/ 2nd Year", icon: UserCheck, image: "https://placehold.co/400x400" },
  { name: "Priyanshu Roushan", role: "Student Coordinator/ 2nd Year", icon: UserCheck, image: "https://placehold.co/400x400" },
  { name: "Malashree Bhattacharjee", role: "Student Coordinator/ 2nd Year", icon: UserCheck, image: "https://placehold.co/400x400" },
  
];

const Coordinators = () => {
  return (
    <section id="coordinators" className="py-20 bg-pamplet text-whitw rounded-xl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Users className="w-10 h-10 text-" />
          <h2 className="text-3xl sm:text-4xl font-bold ml-3 font-Krona text-black ">Meet Our Team</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 font-inter">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative flex flex-col items-center justify-center rounded-xl overflow-hidden ">
              <div className="h-64 overflow-hidden">
                <img src={member.image} alt={member.name} className="sm:w-full w-auto h-full object-cover  rounded-full" />
              </div>
              <div className="absolute top-4 left-4 bg-yellow-400  p-2 rounded-full shadow-md">
                <member.icon className="w-6 h-6" />
              </div>
              <div className="p-4 py-2 text-center">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className=" text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coordinators;
