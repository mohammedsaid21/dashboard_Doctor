import React, { useState } from 'react'
import './calender.css'
import { MdArrowForwardIos } from 'react-icons/md'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import Calendar from 'react-calendar'
import { CalenderApp } from './CalenderApp'


const Calender = () => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      {/* Top Section */}
      {/* <div className='flex items-center justify-between '>
        <h4 className='text-2xl '>April 2022</h4>
        <div className='flex items-center justify-between w-24'>
          <div className=' cursor-pointer border-2 p-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition-all'>
            <MdOutlineArrowBackIos className='text-2xl' />
          </div>
          <div className=' cursor-pointer border-2 p-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition-all'>
            <MdArrowForwardIos className='text-2xl' />
          </div>
        </div>
      </div> */}
      {/* Normal Section */}

      {/* <div>
      <Calendar  className='bg-gray-50' onChange={onChange} value={value} />
      </div> */}

      <CalenderApp />

      
    </>
  )
}

export default Calender