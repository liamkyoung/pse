import React from 'react'
import anime from 'animejs'

function ScrollTextBottom () {
  const animationRef = React.useRef(null)
  React.useEffect(() => {
    animationRef.current = anime({
      targets: '#scroll-text-bottom',
      translateX: [window.innerWidth * 1.2, -window.innerWidth * 1.2],
      duration: 150000,
      loop: true
    })
  }, [])

  return (
    <div id='scroll-text-bottom' className='w-full'>
      <div className='m-8 space-x-20 flex text-6xl text-center'>
        <h1 className='text-pse_purple'>Skill</h1>
        <h1 className='text-pse_yellow'>Wisdom</h1>
        <h1 className='text-pse_purple'>Belief</h1>
        <h1 className='text-pse_yellow'>Confidence</h1>
        <h1 className='text-pse_purple'>Work</h1>
        <h1 className='text-pse_yellow'>Honor</h1>
      </div>
    </div>
  )
}

export default ScrollTextBottom
