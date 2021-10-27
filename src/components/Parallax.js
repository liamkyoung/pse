import React from 'react'
import Image from 'next/image'
import Sign from '../../public/sign.png'
import Foreground from '../../public/foreground.png'
import Middle from '../../public/middle.png'
import Trees from '../../public/trees.png'
import Building from '../../public/building.png'

function Parallax () {
  return (
    <div className='relative h-1/2 bg-pse_purple'>
      <h1 className='font-display text-white font-bold text-4xl text-center pt-10 z-1'>WE ARE</h1>
      <h1 className='font-display text-white font-bold text-3xl text-center z-1'>SALES MARKETING AND MANAGEMENT</h1>
      <div className='absolute bottom-100 left-0 z-10'>
        <Image
          src={Foreground}
          objectFit='contain'
        />
      </div>
      <div className='absolute bottom-100 left-0 z-9'>
        <Image
          src={Sign}
          objectFit='contain'
        />
      </div>
      <div className='absolute bottom-100 left-0 z-8'>
        <Image
          src={Middle}
          objectFit='contain'
        />
      </div>
      <div className='absolute bottom-100 left-0 z-6'>
        <Image
          src={Building}
          objectFit='contain'
        />
      </div>
    </div>
  )
}

export default Parallax
