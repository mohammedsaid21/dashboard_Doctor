import React, { useEffect, useState } from 'react'
import axios from "axios";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DropMenuPatients = ({showId, setShowId, status, setStatus }) => {

  const [patients, setPatients] = useState([])

  useEffect(() => {
    let isApiSubscribed = true;
    const api = `https://app.medical-clinic.tk/api/customers`;
    const token = JSON.parse(sessionStorage.getItem('token'));
    axios.get(api, { headers: { "Authorization": `Bearer ${token}` } })
      .then(res => {
        if (isApiSubscribed)
          setPatients(res.data.data)
      })
      .catch((error) => {
        console.log(error)
      });
    return () => isApiSubscribed = false;
  }, [])

  const [id, setId] = useState('');
  const [statusa, setStatusa] = useState('')
  // const [namePat, setNamePat] = useState('')

  const handleChange = (event) => {
    setShowId(event.target.value);
    setId(event.target.value);
  }
  
  const handleChangeStatus = (e) => {
    setStatus(e.target.value)
    setStatusa(e.target.value)
  }

  useEffect( () => {
    setShowId(id)
    setStatus(statusa)
  }, [setShowId, id, statusa, setStatus])


  return (
    <div className="relative w-full text-[16px] flex justify-between my-2">
      <Box className='w-1/2 ' >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Patient</InputLabel>
          <Select labelId="demo-simple-select-label"
            id="demo-simple-select" value={id} label="Patient" onChange={handleChange}
          >
            {
              patients.map(patient => (
                <MenuItem key={patient.id} value={patient.id}>{patient.name}</MenuItem>
              ))
            }
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
  )
}

export default DropMenuPatients