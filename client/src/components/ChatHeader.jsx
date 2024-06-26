import React from 'react'
import dp from '../Images/dp.jpeg'
import dp1 from '../Images/dp2.jpeg'

import { FiInfo } from 'react-icons/fi'

export default function ChatHeader({name}) {
  return (
    <div className='w-full px-3 py-2 flex items-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      <div className="w-14 h-14 rounded-full overflow-hidden">
      {name==="Gemini Image" ? <img src={dp} alt="dp" /> : <img src={dp1} alt="dp" />}
      
      </div>
      <div className='w-full flex justify-between items-center px-3'>
        <h2 className='text-white text-xl font-semibold'>{name}</h2>
        <button><FiInfo className='text-xl font-semibold text-white'/></button>
      </div>
    </div>
  )
}
