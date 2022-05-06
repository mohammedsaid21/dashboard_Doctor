import React, { useState } from 'react'
import DropMenu from './DropMenu'
const Calender = () => {
  const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ]
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  const [years, setYears] = useState('')


  return (
    <div>
      <div className='mb-4'>
        <DropMenu setYears={setYears} />
      </div>
      <header className='w-[100%] flex items-center justify-between mb-10'>
        {months.map((month, i) => (
          <button className='bg-s ky-200 px-3 py-2 rounded-lg w-1/12 ml-2 text-sm transition-all hover:bg-sky-200 shadow border flex items-center justify-center' key={i}>
            {month}
          </button>
        ))}
      </header>
      <main className='py-2 w-[110%] flex flex-wrap mx-auto'>
        {days.map((day, i) => (
          <div key={i} className='w-[14.2%] h-32 flex flex-col justify- items-center border-2 border-gray-300 mb-2' >
            <div className='flex items-center justify-start w-full text-[#7180a1] font-bold mb-2 bg-gray-200 py-1 px-2'>
              <h2 className='w-[20%]'>{i}</h2>
              <h3 className='w-[80%]'>{day}</h3>
            </div>
            {/* #e2e8f0 */}
            <ul>
              <li className='text-sm warp-spacing'>playing with Omar</li>
            </ul>
          </div>
        ))
        }
      </main>
    </div>
  )
}

export default Calender