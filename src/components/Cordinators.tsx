import React from "react";
import { Users, Briefcase, Code, UserCheck, Settings, Calendar, Megaphone, Package, Globe } from "lucide-react";

const teamMembers = [
  { name: "Dr. Abhay Bhatia", role: "Faculty Coordinator", icon: Briefcase, image: "https://i.imgur.com/EN8GAle.jpeg" },
  { name: "Ridham Inani", role: "Student Coordinator", icon: UserCheck, image: "https://i.imgur.com/zmnH0o3.jpeg" },
  { name: "Priyanshu Gupta", role: "Student Coordinator", icon: UserCheck, image: "https://i.imgur.com/zTNN1IQ.jpeg" },
  { name: "Sneha Agarwal", role: "Student Coordinator", icon: UserCheck, image: "https://i.imgur.com/ui4gfvh.jpeg" },
  { name: "Riddhi Bansal", role: "Student Coordinator", icon: UserCheck, image: "https://i.imgur.com/C1DkBQK.jpeg" },
  { name: "Shivam Shyam", role: "Student Coordinator", icon: UserCheck, image: "https://i.imgur.com/Fr5PqUN.jpeg" },
  { name: "Aditya Raj", role: "Website Architect/ Student Coordinator", icon: Code, image: "https://i.imgur.com/JtKyaO3.jpeg" },
  { name: "Harsh Raj Shukla", role: "Student Coordinator", icon: UserCheck, image: "https://i.imgur.com/EA10plK.jpeg" },
  { name: "Ashwani Raj", role: "Student Coordinator", icon: UserCheck, image: "https://i.imgur.com/Y4FS5lf.jpeg" },
  { name: "Harshit Upadhayay", role: "Student Coordinator", icon: UserCheck, image: "https://i.imgur.com/FnHScaV.jpeg" },
  { name: "Muskan Singh", role: "Student Coordinator", icon: UserCheck, image: "https://i.imgur.com/n9K9For.jpeg" },
  { name: "Priyanshu Roushan", role: "Student Coordinator", icon: UserCheck, image: "https://i.imgur.com/3aaVhXI.jpeg" },
  { name: "Malashree Bhattacharjee", role: "Student Coordinator", icon: UserCheck, image: "https://i.imgur.com/c231czU.jpeg" },
  
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
              <div className="h-52 overflow-hidden">
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
