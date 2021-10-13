import React from 'react'
import Image from 'next/image'
import PseLogo from '../../public/pse_header.png'

function Header () {
  return (
    <div className='flex items-center bg-pse_purple-light'>
      {/* Photo */}
      <div>
        <Image
          src={PseLogo}
          width={300}
          height={70}
          objectFit='contain'
          className='cursor-pointer'
        />
      </div>
      {/* Navigation */}
      <div className='flex text-white items-center ml-5 mr-5 font-4xl font-bold space-x-5 cursor-pointer float-left'>
        <h4 className='hover:text-pse_yellow'>Home</h4>
        <h4 className='hover:text-pse_yellow'>Members</h4>
        <h4 className='hover:text-pse_yellow'>Recruitment</h4>
        <h4 className='hover:text-pse_yellow'>About</h4>
        <h4 className='hover:text-pse_yellow object-contain'>News and Events</h4>
      </div>
      <div className='hidden sm:flex text-white font-extrabold flex-nowrap float-right'>
        <h3>YOUR BUSINESS ADVANTAGE FOR LIFE</h3>
      </div>
    </div>
  )
}

export default Header
