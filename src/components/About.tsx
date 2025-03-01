import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 font-inter">
      <div className="max-w-3xl mx-auto text-center my-10 animate-slide-down">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 font-Krona">About RIT-A-THON</h2>
        <p className="text-black mb-8 sm:px-0 px-7 leading-relaxed">
          RIT-A-THON is an <span className='font-bold'> intra-level 30-hour hackathon organized by the Department of Computer Science & Engineering at Roorkee Institute of Technology </span>. This event brings together innovative minds from all departments including <span className='font-bold'> B.Tech, MBA, BBA, and MCA</span> to collaborate, create, and compete in a challenging environment.
        </p>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:px-0 px-7">
          <div className="bg-peek p-6 rounded-lg backdrop-blur-sm shadow-xl">
            <h3 className="text-xl font-semibold mb-4  text-gray-100 font-Krona">Innovation Hub</h3>
            <p className="text-white">
              A platform where creativity meets technology, fostering innovative solutions to real-world problems.
            </p>
          </div>
          <div className="bg-peek p-6 rounded-lg backdrop-blur-sm shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-100  font-Krona">Networking</h3>
            <p className="text-white">
              Connect with like-minded individuals, mentors, and industry experts during this intensive coding marathon.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;