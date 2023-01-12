import React from 'react'
import { wavesOpacity } from '../../assets'

const SectionDivider = () => {
  return (
    <div className='rounded-lg my-12'>
        <img className='rotate-180 h-5 w-full' src={wavesOpacity} alt="" />
        <img className='h-10 w-full' src={wavesOpacity} alt="" />
    </div>
  )
}

export default SectionDivider