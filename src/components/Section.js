import React from 'react'
import ScrollTextTop from '../components/ScrollTextTop.js'
import ScrollTextBottom from '../components/ScrollTextBottom.js'

function Section () {
  return (
    <div className='overflow-hidden font-display scrollable-section items-center justify-center text-xl text-bold z-12'>
      <ScrollTextTop />
      <ScrollTextBottom />
    </div>
  )
}

export default Section
