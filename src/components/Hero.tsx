import React from 'react'
import { Circle } from 'lucide-react'
import Star from '../resource/star.png'
import HeroPeople from "../resource/Heropeople.png"
import { TypeAnimation } from "react-type-animation"

function Hero(): React.ReactNode {
    return (
        <section className="w-full min-h-screen mt-10 py-10 flex flex-col items-center bg-pamplet overflow-hidden relative">


            <div className="flex flex-col lg:flex-row w-full sm:mt-5 mt-10 mb-10 lg:px-20 px-4 items-center font-Krona overflow-hidden max-w-screen">
                {/* Left Content */}
                <div className="lg:w-1/2 w-full flex flex-col gap-12 text-center lg:text-left">
                    <div className="flex flex-col">
                        {/* <h1 className="text-red-600 text-5xl sm:text-[75px]">RIT-A-THON</h1> */}
                        <TypeAnimation
                            sequence={[
                                'RIT-A-THON',
                                3000,
                                'RIT Roorkee', // Types 'One'
                                2500, // Waits 1s
                                'Hackathon25', // Deletes 'One' and types 'Two'
                                2500, // Waits 2s
                                // Waits 2s
                                 // Types 'Three' without deleting 'Two'
                                
                            ]}
                            wrapper="h1"
                            cursor={true}
                            repeat={Infinity}
                            className='text-red-600 text-4xl sm:text-[75px]'
                            style={{  display: 'inline-block' }}
                            deletionSpeed={50}
                        />
                        <p className="mt-4 text-lg sm:text-xl">A battlefield of Algorithms and Problem Solving</p>
                    </div>

                    <p className="flex sm:flex-row justify-center lg:justify-start items-center sm:gap-2 gap-0 text-md sm:text-2xl text-white">
                        <Circle className="text-red-600" width={20} /> 30 Hours Long Intra Hackathon
                    </p>

                    <div className="flex flex-col gap-4">
                        <p className="text-red-600 text-4xl sm:text-5xl">
                            Hackathon <br />
                            <span className="text-black">2025</span>
                        </p>
                        <p className="font-semibold text-md sm:text-xl">Organized By Dept. of Computer Science & Engineering</p>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="lg:w-1/2 w-full flex justify-center mt-10 lg:mt-0">
                    <img src={HeroPeople} alt="Hackathon Image" className="max-w-full w-[80%] sm:w-[60%] lg:w-[90%] h-auto object-contain" />
                </div>
            </div>

            {/* Star Image Positioned Properly */}
            <img src={Star} alt="Decorative Star" className="sm:absolute sm:flex hidden  -bottom-24 sm:-bottom-32 -right-8 sm:-right-16 -rotate-12 max-w-[80%] sm:max-w-[100%] animate-spin" />
        </section>
    )
}

export default Hero