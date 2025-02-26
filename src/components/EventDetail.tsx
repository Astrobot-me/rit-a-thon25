import React from "react";
import { CountdownTimer } from "./TimerClock";
import {
  CalendarDays,
  MapPin,
  Users,
  BadgeIndianRupee,
  Clock,
  ClipboardCheck,
} from "lucide-react";

const EventDetails: React.FC = () => {
  return (
    <section
      id="details"
      className="py-20 bg-pamplet backdrop-blur-sm rounded-[50px]"
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center font-Krona flex items-center justify-center gap-3">
          <ClipboardCheck className=" w-8 h-8" />
          Event Details
        </h2>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Event Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 font-inter mt-8">
          <div className="space-y-6">
            {/* Date & Time */}
            <div className="bg-peek p-6 rounded-lg shadow-xl flex items-center gap-4">
              <CalendarDays className="text-white w-8 h-8" />
              <div>
                <h3 className="text-xl font-bold mb-1 text-white">Date & Time</h3>
                <p className="text-gray-100">March 27-28, 2025 | Starts at 9 AM</p>
              </div>
            </div>

            {/* Venue */}
            <div className="bg-peek p-6 rounded-lg shadow-xl flex items-center gap-4">
              <MapPin className="text-white w-8 h-8" />
              <div>
                <h3 className="text-xl font-bold mb-1 text-white">Venue</h3>
                <p className="text-gray-100">RIT Roorkee (Offline mode)</p>
              </div>
            </div>

            {/* Team Size */}
            <div className="bg-peek p-6 rounded-lg shadow-xl flex items-center gap-4">
              <Users className="text-white w-8 h-8" />
              <div>
                <h3 className="text-xl font-bold mb-1 text-white">Team Size</h3>
                <p className="text-gray-100">3-5 members per team</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Registration Fee */}
            <div className="bg-peek p-6 rounded-lg shadow-xl flex items-center gap-4">
              <BadgeIndianRupee className="text-white w-8 h-8" />
              <div>
                <h3 className="text-xl font-bold mb-1 text-white">Registration Fee</h3>
                <p className="text-gray-100">₹130 per person</p>
              </div>
            </div>

            {/* Last Date */}
            <div className="bg-peek p-6 rounded-lg shadow-xl flex items-center gap-4">
              <Clock className="text-white w-8 h-8" />
              <div>
                <h3 className="text-xl font-bold mb-1 text-white">Last Date</h3>
                <p className="text-gray-100">March 15, 2025</p>
              </div>
            </div>

            {/* Registration */}
            <div className="bg-peek p-6 rounded-lg shadow-xl flex flex-col items-center">
              <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-3">
                <ClipboardCheck className="text-purple-400 w-7 h-7" />
                Registration
              </h3>
              <a
                href="#"
                className="text-center py-2 px-6 bg-white rounded-lg shadow-xl transition-colors flex items-center gap-2"
              >
                <ClipboardCheck className="w-5 h-5" /> Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
