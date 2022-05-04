import React, { useState } from 'react'
import './calender.css'
import { MdArrowForwardIos } from 'react-icons/md'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { CalenderApp } from './CalenderApp'
import DemoApp from '../calender-all/DemoApp'

const Calender = () => {

  const [value, onChange] = useState(new Date());

  return (
    <>

      {/* <DemoApp /> */}

      <CalenderApp />

      {/* https://google-calendar-clone.netlify.app/?ref=morioh.com&utm_source=morioh.com  */}
    </>
  )
}

export default Calender