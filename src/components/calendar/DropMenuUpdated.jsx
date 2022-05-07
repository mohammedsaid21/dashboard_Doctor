import React, { useCallback, useEffect, useRef, useState } from 'react'
import axios from "axios";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DropMenuUpdated = ({ status2, setStatus2, customer_id2, setCustomer_id2 }) => {

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

  const [id, setId] = useState(customer_id2 || '');
  const [statusa, setStatusa] = useState(status2 || '');

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleChangeStatus = (e) => {
    setStatusa(e.target.value)
  }

  useEffect(() => {
    setCustomer_id2(id)
    setStatus2(statusa)
  }, [setCustomer_id2, id, statusa, setStatus2])


  const menuItems = [
    2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030
  ]

  const [selectedItem, setSelectedItem] = useState({
    item: menuItems[0],
    idx: 0
  })
  const [state, setState] = useState(false)
  const selectMenuRef = useRef()

  //  For Exist From The Form
  const handleSelectMenu = useCallback((e) => {
    if (!selectMenuRef.current.contains(e.target)) {
      setState(false)
      // setYears(selectedItem.item)
    }
  }, [setYears, selectedItem.item])

  useEffect(() => {
      document.addEventListener('click', handleSelectMenu)
    return () => document.removeEventListener('click', handleSelectMenu)
  }, [handleSelectMenu])


  return (
    <div className="relative w-full text-[16px] flex justify-between my-4">
      {/* <Box className='w-1/2 ' >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{customer_id2} id</InputLabel>
          <Select labelId="demo-simple-select-label"
            id="demo-simple-select" defaultValue={customer_id2} label="Patient" onChange={handleChange}
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
            id="demo-simple-select" defaultValue={status2} label="status" onChange={handleChangeStatus}
          >
            <MenuItem value='reservation'>Reservation</MenuItem>
            <MenuItem value='visted'>Visted</MenuItem>
            <MenuItem value='nonVisited'>NonVisited</MenuItem>
          </Select>
        </FormControl>
      </Box> */}
    </div>
  )
}

export default DropMenuUpdated