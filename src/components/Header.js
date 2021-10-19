import React from 'react'
import Image from 'next/image'
import PseLogo from '../../public/pse_header.png'

function Header () {
  return (
    <div className='flex items-center bg-pse_purple-light w-screen h-2/6'>
      {/* Photo */}
      <div>
        <Image
          src={PseLogo}
          width={300}
          height={70}
          objectFit='contain'
          className='cursor-pointer sm:hidden'
        />
      </div>
      {/* Navigation */}
      <div className='flex flex-1 text-white items-center ml-5 mr-5 font-4xl font-bold space-x-7 cursor-pointer float-left'>
        <a href='/' className='hover:text-pse_yellow'>Home</a>
        <a href='/members' className='hover:text-pse_yellow'>Members</a>
        <a href='/recruitment' className='hover:text-pse_yellow'>Recruitment</a>
        <a href='/about' className='hover:text-pse_yellow'>About</a>
        <a href='/events' className='hover:text-pse_yellow'>Events</a>
      </div>
      <div className='flex flex-2 md:flex hidden text-white font-extrabold px-5'>
        <a href='https://pse.org/'>YOUR BUSINESS ADVANTAGE FOR LIFE</a>
      </div>
    </div>
  )
}

export default Header
