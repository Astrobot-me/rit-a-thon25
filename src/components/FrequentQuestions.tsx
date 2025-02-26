import React, { useState } from "react";
import { ChevronDown, MessageSquare, Users, Lightbulb, Code, Utensils, Trophy } from "lucide-react";

const faqs = [
  {
    question: "What is RIT-A-THON?",
    answer: "RIT-A-THON is a 30-hour intra-level hackathon organized by the Department of Computer Science & Engineering at Roorkee Institute of Technology.",
    icon: <MessageSquare className="w-6 h-6 text-blue-400" />,
  },
  {
    question: "Who can participate?",
    answer: "Students from all departments (B.Tech, MBA, BBA, MCA) can participate. There are two categories: Class A for first-year students and Class B for second, third, and final-year students.",
    icon: <Users className="w-6 h-6 text-purple-400" />,
  },
  {
    question: "Do I need an idea beforehand?",
    answer: "No, problem statements will be shared 12 hours before the event via email.",
    icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
  },
  {
    question: "Can I use pre-written code?",
    answer: "No, all coding must be done during the hackathon. However, you can use open-source libraries.",
    icon: <Code className="w-6 h-6 text-green-400" />,
  },
  {
    question: "Will there be food & refreshments?",
    answer: "Yes, snacks and refreshments will be provided at night, along with food for day scholars.",
    icon: <Utensils className="w-6 h-6 text-orange-400" />,
  },
  {
    question: "What happens after the event?",
    answer: "Winners will be awarded with Cash Prizes worth 20k, and all participants will receive certificates (includes certificate of appreciation & participation) and e-badges.",
    icon: <Trophy className="w-6 h-6 text-red-400" />,
  },
];

const FaqSection:React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-pamplet">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Title */}
        <div className="flex items-center justify-center mb-12 text-black">
          <MessageSquare className="w-8 h-8 mr-3 drop-shadow-lg" />
          <h2 className="text-3xl sm:text-4xl font-bold font-Krona sm:text-left text-center">Frequently Asked Questions</h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 font-inter">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/90 rounded-xl backdrop-blur-md border border-yellow-700 shadow-lg transition-all hover:scale-[1.02] hover:border-yellow-500"
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center gap-3">
                  <span>{faq.icon}</span>
                  <span className="text-lg font-semibold ">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5  transition-transform group-hover:text-yellow-500 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
