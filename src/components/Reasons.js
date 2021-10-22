import React from 'react'
import StockIcon from '@heroicons/react/outline/TrendingUpIcon'
import UserGroup from '@heroicons/react/outline/UserGroupIcon'
import Briefcase from '@heroicons/react/outline/BriefcaseIcon'

function Reasons () {
  return (
    <div className='scrollable-section justify-center items-center thick-border-black'>
      <div className='flex justify-between h-12 w-1/2 text-2xl thick-border-black'>
        <div className='text-center text-black hover:text-pse_yellow-dark w-12'>
          <StockIcon />
          Skills
        </div>
        <div className='text-center text-black hover:text-pse_yellow-dark w-12'>
          <UserGroup />
          Social
        </div>
        <div className='text-center text-black hover:text-pse_yellow-dark w-12'>
          <Briefcase />
          Success
        </div>
      </div>
    </div>
  )
}

export default Reasons
