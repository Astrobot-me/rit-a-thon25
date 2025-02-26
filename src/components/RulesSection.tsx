import React from "react";
import { Book, Users, Code, FileCheck, Clock, Mail, Plug, BadgeInfo } from "lucide-react";

const rules = [
    {
        text: "Respect everyone, including participants, judges, and volunteers.",
        icon: <Users className="text-yellow-400 w-6 h-6" />,
    },
    {
        text: "All coding must be done during the hackathon (No pre-built projects allowed).",
        icon: <Code className="text-green-400 w-6 h-6" />,
    },
    {
        text: "Open-source libraries are allowed, but plagiarism is prohibited.",
        icon: <FileCheck className="text-blue-400 w-6 h-6" />,
    },
    {
        text: "All team members must be present during the event.",
        icon: <Users className="text-orange-400 w-6 h-6" />,
    },
    {
        text: "Problem statements will be shared 12 hours before the event via email.",
        icon: <Mail className="text-purple-400 w-6 h-6" />,
    },
    {
        text: "Teams must bring their own extension boards.",
        icon: <Plug className="text-red-400 w-6 h-6" />,
    },
];

const Rules: React.FC = () => {
    return (
        <section id="rules" className="py-20 bg-pamplet">
            <div className="max-w-4xl mx-auto px-4">
                {/* Section Title */}
                <div className="flex items-center justify-center mb-12 text-white">
                    <Book className="w-8 h-8 mr-3 text-black drop-shadow-lg" />
                    <h2 className="text-3xl sm:text-4xl font-bold text-black font-Krona">Rules & Regulations</h2>
                </div>

                {/* Rules List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-inter">
                    {rules.map((rule, index) => (
                        <div
                            key={index}
                            className="bg-peek p-6 rounded-xl backdrop-blur-md border border-peek shadow-lg transition-all hover:scale-105 hover:border-blue-950
              "
                        >
                            <div className="flex items-start">
                                <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 mr-4 text-white font-semibold">
                                    {rule.icon}
                                </span>
                                <div className="flex items-center gap-3">
                                    {/* {rule.icon} */}
                                    <p className="text-gray-100">{rule.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    
                </div>
                <p className="text-center bg-peek/40 rounded-xl p-4 text-white mt-10 flex sm:flex-row flex-col justify-center items-center gap-2 sm:text-md text-sm font-inter font-normal">
                        <BadgeInfo className="text-peek w-28 drop-shadow-lg" />
                        <p> These are some madotory rules to follow and administration is not limited to them only </p>
                </p>
            </div>
        </section>
    );
};

export default Rules;
