import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TextField from "@mui/material/TextField";
import axios from "axios";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import XrayTable from "./modals/XrayTable";
import { updateInfo } from "../../redux/userSlice";

const DetailsCalender = ({
  setModalDetails, modalDetails,  setDone, details,
  setDetails, idRes, setDeleteDone, updatedObject, setUpdatedObject
}) => {
  const [wronge, setWrong] = useState("");
  const error = useRef();
  const [flag, setFlag] = useState(false);
  const [showModalDelete ,setShowModalDelete ] = useState(false)

  const onlySpaces = (str) => str.trim().length > 2;

  const { reservation } = useSelector(state => state.user)
  const { customer } = useSelector(state => state.user)

  useEffect(() => {
    if (reservation) customer.map(person => (person.id === reservation.reservation.customer_id) ? setShowName(person.name) : "")
  }, [reservation, customer])

  const [price1, setPrice1] = useState(); // Done
  const [date1, setDate1] = useState(); // Done But It Not Up Dated In The Label
  const [startTime1, setStartTime1] = useState();
  const [end_time1, setEndTime1] = useState();
  const [status1, setStatus1] = useState("");

  // let {start_time, end_time, date, customer_id, price, status, user_id } = reservation.reservation


  const handleChange2 = (e) => {
    // setUpdatedObject({ ...updatedObject, [e.target.date]: e.target.value })
    // console.log(updatedObject)
    setFlag(true)
  }

  const upDateInfo = () => {
    const api = 'https://app.medical-clinic.tk/api/reservations/update'
    // setUpdatedObject({start_time: startTime1 || reservation.reservation.start_time , end_time: end_time1 || reservation.reservation.end_time, date: date1 || reservation.reservation.date, price: price1 || reservation.reservation.price, status: status1 || reservation.reservation.status, customer_id: reservation.reservation.customer_id, user_id: reservation.reservation.user_id })

      console.log(updatedObject)

    if (reservation.reservation.price && reservation.reservation.date) {
      const data = { api, updatedObject }
      // dispatch(updateInfo(data))
      setDone(true)
      setModalDetails(false)
      setFlag(false)
      // setUpdatedObject(null)
    } else {
      error.current.innerHTML = 'Be Sure From You Info'
      setWrong('wronge')
    }
  };

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  const formatYmd = (date) => date.toISOString().slice(0, 10);

  const closeModal = () => {
    setModalDetails(false);
    setUpdatedObject(null)
    setWrong("");
  };

  const [showName, setShowName] = useState("");
  const handleChange = (event) => {
    setShowName(event.target.value)
  }


  const deleteRes = () => {
    const api = `https://app.medical-clinic.tk/api/reservations/${idRes}/delete`;

    const token = JSON.parse(sessionStorage.getItem("token"));
    axios
      .delete(api, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        setDone(true);
        setModalDetails(false);
        setFlag(false);
        setDeleteDone(true)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const inputProps = {
  //   step: 300,
  // }

  const [statusa, setStatusa] = useState('')
  const handleChangeStatus = (e) => {
    setStatusa(e.target.value)
    setStatus1(e.target.value)
  }

  const [showAddXray, setShowAddXray] = useState(false)


  return modalDetails ? (
    <div className="fixed inset-0 h -[9 5%] z-50 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => closeModal()}
      ></div>
      <div
        className={`flex items-center h-[100%] mt-5 w-[80%] mx-auto px-4 py-6 ${wronge}`}
      >
        <div className="relative md:w-full w-lg mx-auto rounded-md ">
          {/* ------------------------------------ */}
          <div className=" px-4 my-12 bg-gray-100 flex items-center justify-center rounded-xl">
            <div className="container max-w-screen-lg Lg mx-auto">
              <div>
                <div className="bg-white rounded shadowLg p-4 px-4 md:p-8 mb-6">
                  <div className="mt-3 flex flex-wrap">
                    <p className="font-medium text-xl text-center w-full">
                      You Can UpDate The Data
                    </p>

                    <div className="w-full">
                      {/* ------------------------------------ */}
                      <div className="flex justify-between w-full ">
                        <TextField
                          className="w-[49%] my-4 "
                          sx={{ minWidth: 200 }}
                          id="price"
                          label="Price"
                          variant="outlined"
                          defaultValue={reservation.reservation.price}
                          onChange={(e) => setPrice1(e.target.value)}
                        />

                        <TextField
                          className="w-[49%] my-4 "
                          sx={{ minWidth: 200 }}
                          id="Date"
                          label="Date" name="date"
                          variant="outlined"
                          defaultValue={reservation.reservation.date}
                          onChange={(e) => handleChange2(e)}
                        />
                      </div>

{/* <input type='text' name='date' defaultValue={reservation.reservation.date}onChange={(e) => handleChange2(e)} /> */}

                      {/* <LocalizationProvider
                        sx={{ maxWidth: 180 }}
                        dateAdapter={AdapterDateFns}
                      >
                        <DatePicker
                          sx={{ maxWidth: 180 }}
                          className="w-1/2 bg-gray-900"
                          label="Date The Res"
                          defaultValue={reservation.reservation.start_time}
                          onChange={(newValue) => {
                            setDate1(formatYmd(newValue));
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider> */}

                      {/* <DatePicker
                      defaultValue={reservation.start_time}
                      onChange={newDate => setDate2(formatYmd(newDate))}
                      renderInput={props => <MyText {...props} />}
                    /> */}

                      {/* <TextField className="w-1/2 my-4 " sx={{ minWidth: 200 }}  variant="outlined" defaultValue={startTime1} onChange={e => setStartTime1(e.target.value)}  id="time" type="time" inputProps={inputProps}/>  */}

                      <div className="flex justify-between w-full">
                        <input
                          className="w-[49%] px-2 py-4 border-2 border-gray-400 my-2 focus:outline-blue-400"
                          type="text"
                          defaultValue={reservation.reservation.start_time}
                          onChange={(e) => setStartTime1(e.target.value)}
                        />

                        <input
                          className="w-[49%] px-2 py-4 border-2 border-gray-400 my-2 focus:outline-blue-400"
                          type="text"
                          defaultValue={reservation.reservation.end_time}
                          onChange={(e) => setEndTime1(e.target.value)}
                        />
                      </div>

                      {/* <input
                        className="w-1/2 px-2 py-4 border-2 border-gray-400 my-2 focus:outline-blue-400"
                        type="text"
                        defaultValue={start_time}
                        onChange={(e) => setStartTime1(e.target.value)}
                      /> */}

                      {/* 
                        <TextField className="w-1/2 my-4 " sx={{ minWidth: 200 }} id="End Time" label="End Time " variant="outlined" defaultValue={end_time} onChange={e => setEndTime1(e.target.value)} /> */}

                      {/* <DropMenuUpdated  status1={status1} setStatus1={setStatus1} customer_id1={customer_id1} setCustomer_id1={setCustomer_id1} /> */}

                      <div className="flex justify-between ">
                        <Box className="w-1/2">
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              {showName}
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={showName}
                              label="Patient"
                              onChange={handleChange}
                            >
                              {customer.map((patient) => (
                                <MenuItem key={patient.id} value={patient.name} >
                                  {patient.name}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Box>

                        <Box className='w-1/2 ' >
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">status</InputLabel>
                            <Select labelId="demo-simple-select-label"
                              id="demo-simple-select" value={statusa} label="status" onChange={handleChangeStatus}
                            >
                              <MenuItem value='reservation'>Reservation</MenuItem>
                              <MenuItem value='visted'>Visted</MenuItem>
                              <MenuItem value='nonVisited'>NonVisited</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </div>

                      {/* <LocalizationProvider className="w-1/2" dateAdapter={AdapterDateFns}>
                          <TimePicker sx={{ maxWidth: 160 }}
                            label="Start Time" defaultValue={start_time}
                            onChange={(newValue) => {
                              setStartTime1(formatAMPM(newValue));
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
                        {/*  */}
                          <XrayTable showModalDelete={showModalDelete} setShowModalDelete={setShowModalDelete}  setDone={setDone} />
                          {/* dateInfo={dateInfo} */}
                        {/*  */}

                      <br />
                      <span
                        ref={error}
                        className="text-sm p mt-4 text-red-700 md:col-span-4"
                      ></span>

                      <div className="gap-2 mt-3 sm:flex w-[100%] mx-auto md:col-span-full">
                        <button
                          className="w-full mt-2 p-2.5 flex-1 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                          onClick={() => upDateInfo()}
                        >
                          Update
                        </button>
                        <button
                          className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                          onClick={() => deleteRes()}
                        >
                          Delete
                        </button>
                        <button
                          className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
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
  ) : (
    ""
  );
};

export default DetailsCalender;
