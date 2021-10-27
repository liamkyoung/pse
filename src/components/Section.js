import React from 'react'
import ScrollTextTop from '../components/ScrollTextTop.js'
import ScrollTextBottom from '../components/ScrollTextBottom.js'

function Section () {  
  return (
    <div className='scrollable-section items-center justify-center text-xl text-bold'>
      <ScrollTextTop />
      <ScrollTextBottom />
    </div>
  )
}

export default Section
