import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { createElement } from "../../redux/userSlice"

import DropMenuPatients from "./DropMenuPatients";

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const ShowModalAdd = ({ setDone, showModalAdd, setShowModalAdd ,showId, setShowId }) => {

  const [date, setDate] = useState('')
  const [startTime, setStartTime] = useState('10:00');
  const [endTime, setEndTime] = useState('10:30');
  const [price, setPrice] = useState(0)
  const [status, setStatus] = useState('')

  const onlySpaces = (str) => str.trim().length > 2
  const error = useRef()
  const [wronge, setWrong] = useState('')

  const dispatch = useDispatch()

  // start_time(pin):"2022-05-07T00:14:00.693Z"
// 

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

var today = new Date();

var date22 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();


  const closeModal = () => {
    setShowModalAdd(false)
    setStartTime('')
    setEndTime('')
    setWrong('')
  }

  const submitInfo = (e) => {
    e.preventDefault()

    const info = { price, date, start_time: formatAMPM(startTime), end_time: formatAMPM(endTime), status, customer_id: showId }
    const api = 'https://app.medical-clinic.tk/api/reservations/create'
    // هدول هضيفهن مع الفورم في الاوبجيت الي هبعته على السيرفر { date ,  showId }

    const data = { api, info }
    if ( onlySpaces(price) &&  date && startTime && endTime  && showId) {
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
          <div className={`relative w-[70%] max-w -lg p-4 mx-auto bg-white rounded-md shadow-lg  ${wronge}`}>
            <form onSubmit={submitInfo} className='mt-3 flex flex-wrap '>

              <TextField className="w-1/2 my-4 " sx={{ minWidth: 200 }} id="outlined-basic" label="Outlined" variant="outlined" value={price} onChange={e => setPrice(e.target.value)} />

              <LocalizationProvider sx={{ maxWidth: 180 }} dateAdapter={AdapterDateFns}>
                <DatePicker sx={{ maxWidth: 180 }} className="w-1/2 bg-gray-900"
                  label="Date The Res"
                  value={date}
                  minDate={date22}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>

              <LocalizationProvider className="w-1/2" dateAdapter={AdapterDateFns}>
                <TimePicker sx={{ maxWidth: 160 }}
                  label="Start Time"
                  value={startTime}
                  onChange={(newValue) => {
                    setStartTime(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>

              <LocalizationProvider className="w-1/2" dateAdapter={AdapterDateFns}>
                <TimePicker sx={{ minWidth: 220 }}
                  label="End Time"
                  value={endTime}
                  onChange={(newValue) => {
                    setEndTime(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>

              <DropMenuPatients setShowId={setShowId} setStatus={setStatus} />

              <span ref={error} className='text-sm mt-4 mx-2 text-red-700'></span>
              <button className="w-full mt-2 p-2.5 flex-1 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                type='submit'
              >
                Add
              </button>
              <button className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                onClick={() => closeModal()}
              >
                Undo
              </button>
            </form>
            <div className="items-center gap-2 mt-3 sm:flex ">
            </div>
          </div>
        </div>
      </div>
    ) : ''
  )
}

export default ShowModalAdd