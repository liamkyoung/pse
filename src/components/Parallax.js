import React from 'react'
import Image from 'next/image'
import Sign from '../../public/sign.png'
import Foreground from '../../public/foreground.png'
import Middle from '../../public/middle.png'
import Trees from '../../public/trees.png'
import Building from '../../public/building.png'

function Parallax () {
    return (
        <div className='relative h-screen bg-gray-700'>
            <Image
            src={Foreground}
            className='absolute z-10'
            />
            <Image
            src={Middle}
            className='absolute z-9'
            />
            <Image
            src={Sign}
            className='absolute z-8'
            />
            <Image
            src={Trees}
            className='absolute z-7'
            />
            <Image
            src={Building}
            className='absolute z-6'
            />
        </div>
    )
}

export default Parallax
