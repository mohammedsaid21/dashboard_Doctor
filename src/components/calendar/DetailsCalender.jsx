import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import DropMenuPatients from "./DropMenuPatients";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import DropMenuUpdated from './DropMenuUpdated';
import axios from 'axios';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const DetailsCalender = ({ setModalDetails, modalDetails, setDone, details, setDetails }) => {

  const [wronge, setWrong] = useState('')
  const dispatch = useDispatch()
  const error = useRef()
  const [flag, setFlag] = useState(false)

  const onlySpaces = (str) => str.trim().length > 2

  let { date, start_time, end_time, price, status, customer_id } = details

  const [price1, setPrice1] = useState() // Done
  const [date2, setDate2] = useState() // Done But It Not Up Dated In The Label
  const [startTime2, setStartTime2] = useState();
  const [endTime2, setEndTime2] = useState();
  const [status2, setStatus2] = useState('')
  const [customer_id2, setCustomer_id2] = useState('')

  // useEffect(()=> {
  //   setStartTime2(start_time)
  // }, [start_time])


  const upDateInfo = () => {

    console.log(status)
    console.log(customer_id)

    // const api = 'https://app.medical-clinic.tk/api/reservations/update'
    // const updatedObject = {}

    // if (flag) {
    //   const data = { api, updatedObject }
    //   dispatch(updateInfo(data))
    //   setDone(true)
    //   setModalDetails(false)
    //   setFlag(false)
    // } else {
    //   error.current.innerHTML = 'Be Sure From You Info'
    //   setWrong('wronge')
    // }
  }

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  const closeModal = () => {
    setModalDetails(false)
    // setStartTime('')
    // setEndTime('')
    setWrong('')
  }

  const formatYmd = date => date.toISOString().slice(0, 10);

  const [patients, setPatients] = useState([])

  useEffect(() => {
    let isApiSubscribed = true;
    const api = `https://app.medical-clinic.tk/api/customers`;
    const token = JSON.parse(sessionStorage.getItem('token'));
    axios.get(api, { headers: { "Authorization": `Bearer ${token}` } })
      .then(res => {
        if (isApiSubscribed)
          setPatients(res.data.data)
          setDone(true)
      })
      .catch((error) => {
        console.log(error)
      });
    return () => isApiSubscribed = false;
  }, [setDone])

  const [showName, setShowName] = useState('')

  const handleChange = (event) => {
    setShowName(event.target.value);
  }

  useEffect(() => {
    console.log(showName)
    setDone(true)
  }, [showName, setDone])

  const handleChangeStatus = (e) => {
    // setStatus(e.target.value)
  }
  // 

  return (
    modalDetails ? (
      <div className="fixed inset-0 h -[9 5%] z-50 overflow-y-auto">
        <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => closeModal()}></div>
        <div className={`flex items-center h-[100%] mt-5 w-[80%] mx-auto px-4 py-6 ${wronge}`}>
          <div className="relative md:w-full w-lg mx-auto rounded-md ">
            {/* ------------------------------------ */}
            <div className=" px-4 my-12 bg-gray-100 flex items-center justify-center rounded-xl">
              <div className="container max-w-screen-lg Lg mx-auto">
                <div>
                  <div className="bg-white rounded shadowLg p-4 px-4 md:p-8 mb-6">
                    <div className="mt-3 flex flex-wrap">
                      <p className="font-medium text-xl text-center w-full">You Can UpDate The Data</p>

                      <div className="" >
                        {/* ------------------------------------ */}
                        <TextField className="w-1/2 my-4 " sx={{ minWidth: 200 }} id="price" label="Price" variant="outlined" defaultValue={price} onChange={e => setPrice1(e.target.value)} />

                        <LocalizationProvider sx={{ maxWidth: 180 }} dateAdapter={AdapterDateFns}>
                          <DatePicker sx={{ maxWidth: 180 }} className="w-1/2 bg-gray-900"
                            label="Date The Res" defaultValue={date}
                            onChange={(newValue) => {
                              setDate2(formatYmd(newValue))
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>

                        {/* <TextField className="w-1/2 my-4 " sx={{ minWidth: 200 }} id="startTime" label="start Time" variant="outlined" defaultValue={startTime2}
                          onChange={e => setStartTime2(e.target.value)} /> */}

                          <input className='w-1/2 px-2 py-4 border-2 border-gray-400 my-2 focus:outline-blue-400' type='text' defaultValue={start_time} onChange={e => setStartTime2(e.target.value)} />
                          <input className='w-1/2 px-2 py-4 border-2 border-gray-400 my-2 focus:outline-blue-400' type='text' defaultValue={end_time} onChange={e => setEndTime2(e.target.value)} />
                        {/* 
                        <TextField className="w-1/2 my-4 " sx={{ minWidth: 200 }} id="End Time" label="End Time " variant="outlined" defaultValue={end_time} onChange={e => setEndTime2(e.target.value)} /> */}

                        {/* <DropMenuUpdated  status2={status2} setStatus2={setStatus2} customer_id2={customer_id2} setCustomer_id2={setCustomer_id2} /> */}

              <Box className='w-1/2 ' >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">{showName}</InputLabel>
                  <Select labelId="demo-simple-select-label"
                    id="demo-simple-select" value={showName} label="Patient" onChange={handleChange}
                  >
                    {
                      patients.map(patient => (
                        <MenuItem key={patient.id} value={patient.name}>{patient.name}</MenuItem>
                      ))
                    }
                  </Select>
                </FormControl>
              </Box>

                        {/* <LocalizationProvider className="w-1/2" dateAdapter={AdapterDateFns}>
                          <TimePicker sx={{ maxWidth: 160 }}
                            label="Start Time" defaultValue={start_time}
                            onChange={(newValue) => {
                              setStartTime2(formatAMPM(newValue));
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>

                        <LocalizationProvider className="w-1/2" dateAdapter={AdapterDateFns}>
                          <TimePicker sx={{ minWidth: 220 }}
                            label="End Time" defaultValue={end_time}
                            onChange={(newValue) => {
                              // setEndTime(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider> */}

                        <br />
                        <span ref={error} className='text-sm p mt-4 text-red-700 md:col-span-4'></span>

                        <div className="gap-2 mt-3 sm:flex w-[100%] mx-auto md:col-span-full">
                          <button className="w-full mt-2 p-2.5 flex-1 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                            onClick={() => upDateInfo()}
                          >
                            Update
                          </button>
                          <button className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                            onClick={() => closeModal()}
                          >
                            Cansle
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : ''
  )
}

export default DetailsCalender
