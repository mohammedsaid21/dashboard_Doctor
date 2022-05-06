import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DropMenu from './DropMenu'
import { Datepicker } from './picker/DatePicker'
import ShowModalAdd from './ShowModalAdd'
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
  const [thisMonth, setThisMonth] = useState([])
  const [showModalAdd, setShowModalAdd] = useState(false)
  const [done, setDone] = useState(false)


  // https://app.medical-clinic.tk/api/reservations/currentmonth

  useEffect(() => {
    let isApiSubscribed = true;
    const api = `https://app.medical-clinic.tk/api/reservations/currentmonth`;
    const token = JSON.parse(sessionStorage.getItem('token'));
    axios.get(api, { headers: { "Authorization": `Bearer ${token}` } })
      .then(res => {
        if (isApiSubscribed) {
          setThisMonth(res.data.data)
          // setDone(false)
        }
      })
      .catch((error) => {
        console.log(error)
      });
    return () => isApiSubscribed = false;
  }, [done])

  const showModal = () => {
    setShowModalAdd(true)
  }

  return (
    <div>
      <div className='mb-4 w-full flex justify-between items-center px-2'>
        <DropMenu className='w-20' setYears={setYears} />
        <button onClick={() => showModal()} className='btn'>Add New Reservation</button>
        {/* <Datepicker /> */}
      </div>
      <header className='w-[100%] flex items-center justify-between mb-10'>
        {months.map((month, i) => (
          <button className='bg-s ky-200 px-3 py-2 rounded-lg w-1/12 ml-2 text-sm transition-all hover:bg-sky-200 shadow border flex items-center justify-center' key={i}>
            {month}
          </button>
        ))}
      </header>
      <main className='py-2 w-[100%] flex flex-wrap mx-auto'>
        {thisMonth.map((object, i) => (
          <div key={i} className='w-1/3 md:w-[14.24%] h-32 flex flex-col justify- items-center border-2 border-gray-300 border-r-0 mb-2' >
            <div className='flex items-center justify-start w-full text-[#7180a1] font-bold mb-2 bg-gray-200 py-1 px-2'>
              <h2 className='w-[20%]'>{object.day}</h2>
              <h3 className='w-[80%]'>{object.name}</h3>
            </div>
            {/* #e2e8f0 */}
            {object.reservations.map(task => (
              <ul className='w-full px-2'>
                <li className='text-sm '>{task.note}</li>
                <li className='text-[11px] inline-block w-1/ bg-blue-200  px-2 py-1 rounded-xl'>{task.start_time}</li>
                <li className='text-[11px] inline-block w-1/ bg-blue-200  px-2 py-1 rounded-xl'>{task.end_time}</li>
              </ul>
            ))}
          </div>
        ))
        }
      </main>
      <ShowModalAdd showModalAdd={showModalAdd} setShowModalAdd={setShowModalAdd} setDone={setDone} />
    </div>
  )
}

export default Calender