import React from 'react'
import Navbar from "./components/Navbar"
import { Circle } from 'lucide-react'
import Star from './resource/star.png'
import HeroPeople from "./resource/Heropeople.png"

function App(): React.ReactNode {
  return (
    <>
    <section className='w-full h-screen flex flex-col items-center bg-pamplet overflow-hidden relative'>
      <Navbar />

      <div className='flex w-full mt-10 mb-10 px-20 justify-center items-center font-Krona overflow-hidden max-w-screen'>

        {/* Left Content */}
        <div className='w-1/2 flex flex-col gap-2 space-y-16 justify-center'>

          <div className='flex flex-col'>
            <h1 className='text-red-600 text-6xl'>RIT-A-THON</h1>
            <p className='mt-5'>A battlefield of Algorithms and Problem Solving</p>
          </div>

          <p className='flex items-center gap-2 text-2xl text-white'>
            <Circle className='text-red-600' /> 30 Hours Long Intra Hackathon
          </p>

          <div className='flex flex-col gap-5'>
            <p className='text-red-600 text-5xl'>Hackathon <br /><span className='text-black'>2025</span></p>
            <p className='font-semibold'>Organized By Dept. of Computer Science & Engineering</p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className='w-1/2 flex justify-center'>
          <img src={HeroPeople} alt="" className='max-w-full w-[90%] h-auto object-contain' />
        </div>

      </div>

      {/* Star Image Positioned Properly */}
      <img src={Star} alt="" className='absolute -bottom-32 -right-16 -rotate-12 overflow-hidden max-w-[100%]' />
    </section>

    <section className='w-full h-screen'>

    </section>

    </>
    

  )
}

export default App