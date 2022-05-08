import React, { useCallback, useEffect } from 'react'
import { FiChevronRight, FiUsers } from 'react-icons/fi'
import { BiHomeAlt } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { MdOutlineLocalPharmacy, MdOutlineMonitorWeight, MdOutlineScience } from 'react-icons/md'
import { BsCalendar3 } from 'react-icons/bs'
import { RiTestTubeFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

const Sidebar = ({setcompleted}) => {

  const getURL = (e) => {
    setcompleted(true)
    console.log(e)
  }

  useEffect(() => {
    setcompleted(false)
  }, [setcompleted])

  const style = 'flex items-center justify-between w-[85%] lg:px-3 px-1 py-3 text-[10px] lg:text-[12px] hover:bg-slate-300 transition-all duration-500 cursor-pointer rounded-xl mb-1'

  return (
    <div className='lg:w-[230px] w-[330px] sidebar pl-1 lg:pl-4 pt-6 border-r-2 border-slate-300 '>
{/* normal -> this is will Done (exiquted) */}
      <NavLink onClick={() => getURL(window.location.pathname)} to='/' className={style}>
        <BiHomeAlt className='text-xl text-[#506690] hidden lg:inline-block' />
        <h4 className='text-slate-800 px-1 w-full lg:w -3/5 text-[10px] lg:text-[12px] '>Control Board</h4>
        <FiChevronRight className=' hidden lg:inline-block'/>
      </NavLink>

      <NavLink  onClick={() => getURL(window.location.pathname)}  to='/user' className={style}>
        <AiOutlineUser className='text-xl text-[#506690] hidden lg:inline-block' />
        <h4 className='text-slate-800 px-1 w-full lg:w -3/5 text-[10px] lg:text-[12px]'>Users</h4>
        <FiChevronRight  className='hidden lg:inline-block'/>
      </NavLink>

      <NavLink  onClick={() => getURL(window.location.pathname)}  to='/patients' className={style}>
        <FiUsers className='text-xl text-[#506690] hidden lg:inline-block' />
        <h4 className='text-slate-800 px-1 w-full lg:w -3/5 text-[10px] lg:text-[12px]'>The Patients</h4>
        <FiChevronRight  className='hidden lg:inline-block'/>
      </NavLink>

      <NavLink   onClick={() => getURL(window.location.pathname)}  to='/reservations' className={style}>
        <BsCalendar3 className='text-lg  text-[#506690]' />
        <h4 className='text-slate-800 px-1 w-full lg:w -3/5 text-[10px] lg:text-[12px]'>Reservations</h4>
        <FiChevronRight  className='hidden lg:inline-block'/>
      </NavLink>

      <NavLink   onClick={() => getURL(window.location.pathname)}  to='/pharmaceutical' className={style}>
        <MdOutlineLocalPharmacy className='text-xl text-[#506690] hidden lg:inline-block' />
        <h4 className='text-slate-800 px-1 w-full lg:w -3/5 text-[10px] lg:text-[10px]'>Medicine</h4>
        <FiChevronRight  className='hidden lg:inline-block'/>
      </NavLink>

      <NavLink   onClick={() => getURL(window.location.pathname)}  to='/labTests' className={style}>
        <MdOutlineScience className='text-xl text-[#506690] hidden lg:inline-block' />
        <h4 className='text-slate-800 px-1 w-full lg:w -3/5 text-[10px] lg:text-[12px]'>Lab tests</h4>
        <FiChevronRight  className='hidden lg:inline-block'/>
      </NavLink>

      <NavLink   onClick={() => getURL(window.location.pathname)}  to='/xrayPictures' className={style}>
        <MdOutlineMonitorWeight className='text-xl text-[#506690] hidden lg:inline-block' />
        <h4 className='text-slate-800 px-1 w-full lg:w -3/5 text-[10px] lg:text-[12px]'>X-ray pictures</h4>
        <FiChevronRight  className='hidden lg:inline-block'/>
      </NavLink>

      <NavLink   onClick={() => getURL(window.location.pathname)}  to='/expenses' className={style}>
        <RiTestTubeFill className='text-xl text-[#506690] hidden lg:inline-block' />
        <h4 className='text-slate-800 px-1 w-full lg:w -3/5 text-[10px] lg:text-[12px]'>Expenses</h4>
        <FiChevronRight  className='hidden lg:inline-block'/>
      </NavLink>


    </div>
  )
}

export default Sidebar