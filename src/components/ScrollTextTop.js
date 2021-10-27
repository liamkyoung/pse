import React from 'react'
import anime from 'animejs'

// <div className='m-8 space-x-20 flex text-6xl text-center'>
// <h1 className='text-pse_yellow'>Sincerity</h1>
// <h1 className='text-pse_purple'>Character</h1>
// <h1 className='text-pse_yellow'>Knowledge</h1>
// <h1 className='text-pse_purple'>Competition</h1>
// <h1 className='text-pse_yellow'>Ethics</h1>
// <h1 className='text-pse_purple'>Faith</h1>
// </div>
// <div className='m-8 space-x-20 flex text-6xl justify-center'>
// <h1 className='text-pse_purple'>Skill</h1>
// <h1 className='text-pse_yellow'>Wisdom</h1>
// <h1 className='text-pse_purple'>Belief</h1>
// <h1 className='text-pse_yellow'>Confidence</h1>
// <h1 className='text-pse_purple'>Work</h1>
// <h1 className='text-pse_yellow'>Honor</h1>
// </div>

function ScrollTextTop () {
  const animationRef = React.useRef(null)
  React.useEffect(() => {
    animationRef.current = anime({
      targets: '#scroll-text-top',
      translateX: [-window.innerWidth * 1.2, window.innerWidth * 1.2],
      duration: 150000,
      loop: true
    })
  }, [])

  return (
    <div id='scroll-text-top' className='w-full'>
      <div className='m-8 space-x-20 flex text-6xl text-center'>
        <h1 className='text-pse_yellow'>Sincerity</h1>
        <h1 className='text-pse_purple'>Character</h1>
        <h1 className='text-pse_yellow'>Knowledge</h1>
        <h1 className='text-pse_purple'>Competition</h1>
        <h1 className='text-pse_yellow'>Ethics</h1>
        <h1 className='text-pse_purple'>Faith</h1>
      </div>
    </div>
  )
}

export default ScrollTextTop
