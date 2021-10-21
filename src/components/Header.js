import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PseLogo from '../../public/pse_header.png'

function Header () {
  return (
    <div className='sticky flex items-center bg-pse_purple-light border-2 border-pse_purple-medium'>
      {/* Photo */}
      <Image
        src={PseLogo}
        width={300}
        height={70}
        objectFit='contain'
        className='cursor-pointer sm:hidden'
      />
      {/* Navigation */}
      <div className='flex flex-1 text-white items-center ml-5 mr-3 font-4xl font-bold space-x-7'>
        <Link href='/'>
          <h1 className='hover:text-pse_yellow cursor-pointer'>Home</h1>
        </Link>
        <Link href='/members'>
          <h1 className='hover:text-pse_yellow cursor-pointer'>Members</h1>
        </Link>
        <Link href='/recruitment'>
          <h1 className='hover:text-pse_yellow cursor-pointer'> Recruitment</h1>
        </Link>
        <Link href='/about'>
          <h1 className='hover:text-pse_yellow cursor-pointer'>About</h1>
        </Link>
        <Link href='/events'>
          <h1 className='hover:text-pse_yellow cursor-pointer'>Events</h1>
        </Link>
      </div>
      <div className='hidden flex-2 lg:flex text-white font-extrabold px-8'>
        <a href='https://pse.org/'>YOUR BUSINESS ADVANTAGE FOR LIFE</a>
      </div>
    </div>
  )
}

export default Header
