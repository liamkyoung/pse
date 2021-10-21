import React from 'react'

/* <h1>Sincerity</h1>
<h1>Character</h1>
<h1>Knowledge</h1>
<h1>Competition</h1>
<h1>Ethics</h1>
<h1>Faith</h1>
<h1>Skill</h1>
<h1>Wisdom</h1>
<h1>Belief</h1>
<h1>Confidence</h1>
<h1>Work</h1>
<h1>Honor</h1> */
// { text, direction }

/* */
function ScrollText () {
  return (
    <div>
      <div className='m-8 space-x-20 flex text-6xl text-center'>
        <h1 className='text-pse_yellow'>Sincerity</h1>
        <h1 className='text-pse_purple'>Character</h1>
        <h1 className='text-pse_yellow'>Knowledge</h1>
        <h1 className='text-pse_purple'>Competition</h1>
        <h1 className='text-pse_yellow'>Ethics</h1>
        <h1 className='text-pse_purple'>Faith</h1>
      </div>
      <div className='m-8 space-x-20 flex text-6xl justify-center'>
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

export default ScrollText
