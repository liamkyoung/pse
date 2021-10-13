import React from 'react'
import StockIcon from '@heroicons/react/outline/TrendingUpIcon'
import UserGroup from '@heroicons/react/outline/UserGroupIcon'
import Briefcase from '@heroicons/react/outline/BriefcaseIcon'

function Reasons () {
  return (
    <div className='flex justify-between h-12 w-1/2'>
      <div className='-black hover:bg-pse_yellow-dark'>
        <StockIcon />
      </div>
      <div className='text-black hover:bg-pse_yellow-dark'>
        <UserGroup />
      </div>
      <div className='text-black hover:bg-pse_yellow-dark'>
        <Briefcase />
      </div>
    </div>
  )
}

export default Reasons
