import React from 'react';
import { CountdownTimer } from './TimerClock';

const EventDetails: React.FC = () => {
  return (
    <section id="details" className="py-20 bg-pamplet backdrop-blur-sm rounded-[50px]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center font-Krona">Event Details</h2>
        <CountdownTimer/>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 font-inter">
          <div className="space-y-6">
            <div className="bg-peek p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold mb-2 text-white">Date & Time</h3>
              <p className="text-gray-100">March 27-28, 2025 | Starts at 9 AM</p>
            </div>
            
            <div className="bg-peek p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold mb-2 text-white">Venue</h3>
              <p className="text-gray-100">RIT Roorkee (Offline mode)</p>
            </div>
            
            <div className="bg-peek p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold mb-2 text-white">Team Size</h3>
              <p className="text-gray-100">3-5 members per team</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-peek p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold mb-2 text-white">Registration Fee</h3>
              <p className="text-gray-100">₹130 per person</p>
            </div>
            
            <div className="bg-peek p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold mb-2 text-white">Last Date</h3>
              <p className="text-gray-100">March 15, 2025</p>
            </div>
            
            <div className="bg-peek p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold mb-2 text-white">Registration</h3>
              <div className="space-y-2 mt-4">
                <a href="#" className="block text-center py-2 px-4 bg-purple-600 hover:bg-purple-700 rounded-lg shadow-xl transition-colors">
                  Register Now
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;