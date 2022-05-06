import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { createElement } from "../../redux/userSlice"
import DatePicker from 'react-date-picker';
import DropMenuPatients from "./DropMenuPatients";

const ShowModalAdd = ({ setDone, showModalAdd, setShowModalAdd }) => {

  // Date X
  // Day 
  // Start Time
  // End Time
  // Customer_id
  // user_id
  // status
  // price

  const [value, onChange] = useState(new Date());
  const [reservation, setReservation] = useState({ name: "", price: "", notes: "" })

  const [showId, setShowId] = useState()


  const formatDate = (date) => {
    let d = new Date(date);
    let month = (d.getMonth() + 1).toString();
    let day = d.getDate().toString();
    let year = d.getFullYear();
    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    return [year, month, day].join('-');
  }

  const handleChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value, [e.target.price]: e.target.value, [e.target.notes]: e.target.value })
    // console.log(formatDate(value))
  }


  // console.log(formatDate(value));

  // 'Febuary 1, 2021'
  const changeDate = (e) => {
    onChange(e)
  }

  const onlySpaces = (str) => str.trim().length > 2
  const error = useRef()
  const [wronge, setWrong] = useState('')

  const dispatch = useDispatch()

  const closeModal = () => {
    setShowModalAdd(false)
    setReservation({ name: "", value: "", notes: "" })
    setWrong('')
  }

  const submitInfo = (e) => {
    e.preventDefault()

    const api = 'https://app.medical-clinic.tk/api/expenses/create'
    const info = reservation
    // هدول هضيفهن مع الفورم في الاوبجيت الي هبعته على السيرفر { date ,  showId }

    const data = { api, info }
    if (onlySpaces(reservation.name) && onlySpaces(reservation.notes)) {
      dispatch(createElement(data))
      setDone(true)
      setShowModalAdd(false)
      closeModal()
    } else {
      error.current.innerHTML = 'Be Sure From You Info (at least 2 chars)'
      setWrong('wronge')
    }
  }

  return (
    showModalAdd ? (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => closeModal()}></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className={`relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg  ${wronge}`}>
            <form onSubmit={submitInfo} className='mt-3'>
              <input
                type="text"
                value={reservation.name}
                name="name"
                onChange={e => handleChange(e)}
                placeholder="enter status "
                className="w-full py-3 pl-7 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600 mb-2"
              />
              <input
                type="text"
                value={reservation.value}
                name="value"
                onChange={e => handleChange(e)}
                placeholder="enter The Price "
                className="w-full py-3 pl-7 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600 mb-2"
              />
              <input
                type="text"
                value={reservation.notes}
                name="notes"
                onChange={e => handleChange(e)}
                placeholder="enter The Notes "
                className="w-full py-3 pl-7 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600 mb-2"
              />

              <DatePicker name='myPicker' minDate={new Date()} className=' w-full py-3 pl-7 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600 mb-2'
                onChange={(e) => changeDate(e)} value={value} />

              <DropMenuPatients setShowId={setShowId} />


              <span ref={error} className='text-sm mt-4 mx-2 text-red-700'></span>

              <button className="w-full mt-2 p-2.5 flex-1 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                type='submit'
              >
                Add
              </button>
            </form>
            <div className="items-center gap-2 mt-3 sm:flex">
              <button className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                onClick={() => closeModal()}
              >
                Undo
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : ''
  )
}

export default ShowModalAdd