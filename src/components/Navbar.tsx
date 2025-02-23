import { Link } from 'lucide-react'
import React from 'react'
import LogoRed from "../resource/logo_red.png"

function Navbar() {
  return (
    <div className='w-screen h-20 bg-pamplet flex items-center justify-between px-16 rounded-b-xl border-black '>

      <div className='font-Krona flex items-center justify-center gap-2 '>
        <img src={LogoRed} alt="" className='w-10' />
        <p className='font-semibold text-2xl'>RIT-<span className='text-red-600'>A</span>-THON 2<span className='font-4xl text-red-600'>k</span>25</p>
      </div>

      <div className='flex gap-5 items-center'>
        <ul className='flex space-x-8 font-semibold'>
          <li>About</li>
          <li>Prizes</li>
          <li>Rules</li>
          <li>FAQs</li>
          <li>Co-ordinators</li>
        </ul>
        <button className='px-4 p-2 font-Krona bg-peek shadow-lg flex items-center justify-center gap-2 rounded-xl text-white'> 
          <p className='text-sm '>Register Now</p>
          <Link width={20}/>
        </button>
      </div>

      
    </div>
  )
}

export default Navbar