import React from "react";
import { Phone, Mail, Globe, MessageCircle } from "lucide-react";

const Contact = () => {
  const coordinators = [
    {
      name: "Priyanshu Gupta / 3rd Year",
      phone: "+919009898406",
    },
    {
      name: "Ridham Inani / 3rd Year",
      phone: "+919680715444",
    },
    {
      name: "Harsh Raj Shukla / 2nd Year",
      phone: "+918252386590",
    },
    {
      name: "Aditya  Raj / 2nd Year",
      phone: "+917004433613",
    },
    {
      name: "Ashwani  Raj / 2nd Year",
      phone: "+919798018523",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white rounded-xl shadow-lg">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center mb-12">
          <MessageCircle className="w-8 h-8 text-yellow-500" />
          <h2 className="text-3xl sm:text-4xl font-bold ml-3 text-gray-800 font-Krona sm:text-left text-center">Contact & Support</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center font-inter">
          {coordinators.map((coordinator, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl text-center shadow-md border border-gray-200 hover:shadow-lg transition-all hover:animate-float duration-500"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{coordinator.name}</h3>
              
              <a
                href={`https://wa.me/${coordinator.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2 px-4 bg-peek hover:bg-peek/70 text-white font-medium rounded-lg transition-colors mb-3 w-full"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              
              <a
                href={`tel:${coordinator.phone}`}
                className="inline-flex items-center justify-center gap-2 py-2 px-4 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition-colors w-full"
              >
                <Phone size={18} />
                Call
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 flex justify-center items-center gap-2">
            <Globe size={18} className="text-yellow-500" />
            College Website:{" "}
            <a
              href="http://www.ritroorkee.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 font-semibold hover:underline"
            >
              www.ritroorkee.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
