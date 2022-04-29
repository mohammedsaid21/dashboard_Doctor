import React from 'react'
import { FiChevronRight, FiUsers } from 'react-icons/fi'
import { BiHomeAlt } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { MdOutlineLocalPharmacy, MdOutlineMonitorWeight, MdOutlineScience } from 'react-icons/md'
import { BsCalendar3 } from 'react-icons/bs'
import { RiTestTubeFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  return (
    <div className='sidebar pl-8 pt-6 border-r-2 border-slate-300 w-20 md:w-[350px]'>

      <NavLink to='/' className='flex items-center justify-between w-[85%] px-3 py-3 text-[12px] hover:bg-slate-300 transition-all duration-500 cursor-pointer rounded-xl mb-1'>
        <BiHomeAlt className='text-xl text-[#506690]' />
        <h4 className='text-slate-800 mr-1 w-3/5'>Control Board</h4>
        <FiChevronRight />
      </NavLink>

      <NavLink to='/user' className='flex items-center justify-between w-[85%] px-3 py-3 text-[12px] hover:bg-slate-300 transition-all duration-500 cursor-pointer rounded-xl mb-1'>
        <AiOutlineUser className='text-xl  text-[#506690]' />
        <h4 className='text-slate-800 mr-1 w-3/5'>Users</h4>
        <FiChevronRight />
      </NavLink>

      <NavLink to='/patients' className='flex items-center justify-between w-[85%] px-3 py-3 text-[12px] hover:bg-slate-300 transition-all duration-500 cursor-pointer rounded-xl mb-1'>
        <FiUsers className='text-xl  text-[#506690]' />
        <h4 className='text-slate-800 mr-1 w-3/5'>The Patients</h4>
        <FiChevronRight />
      </NavLink>

      <NavLink to='/reservations' className='flex items-center justify-between w-[85%] px-3 py-3 text-[12px] hover:bg-slate-300 transition-all duration-500 cursor-pointer rounded-xl mb-1'>
        <BsCalendar3 className='text-lg  text-[#506690]' />
        <h4 className='text-slate-800 mr-1 w-3/5'>Reservations</h4>
        <FiChevronRight />
      </NavLink>

      <NavLink to='/pharmaceutical' className='flex items-center justify-between w-[85%] px-3 py-3 text-[12px] hover:bg-slate-300 transition-all duration-500 cursor-pointer rounded-xl mb-1'>
        <MdOutlineLocalPharmacy className='text-xl  text-[#506690]' />
        <h4 className='text-slate-800 mr-1 w-3/5'>Pharmaceutical</h4>
        <FiChevronRight />
      </NavLink>

      <NavLink to='/labTests' className='flex items-center justify-between w-[85%] px-3 py-3 text-[12px] hover:bg-slate-300 transition-all duration-500 cursor-pointer rounded-xl mb-1'>
        <MdOutlineScience className='text-xl  text-[#506690]' />
        <h4 className='text-slate-800 mr-1 w-3/5'>Lab tests</h4>
        <FiChevronRight />
      </NavLink>

      <NavLink to='/xrayPictures' className='flex items-center justify-between w-[85%] px-3 py-3 text-[12px] hover:bg-slate-300 transition-all duration-500 cursor-pointer rounded-xl mb-1'>
        <MdOutlineMonitorWeight className='text-xl  text-[#506690]' />
        <h4 className='text-slate-800 mr-1 w-3/5'>X-ray pictures</h4>
        <FiChevronRight />
      </NavLink>

      <NavLink to='/expenses' className='flex items-center justify-between w-[85%] px-3 py-3 text-[12px] hover:bg-slate-300 transition-all duration-500 cursor-pointer rounded-xl mb-1'>
        <RiTestTubeFill className='text-xl  text-[#506690]' />
        <h4 className='text-slate-800 mr-1 w-3/5'>Expenses</h4>
        <FiChevronRight />
      </NavLink>


    </div>
  )
}

export default Sidebar