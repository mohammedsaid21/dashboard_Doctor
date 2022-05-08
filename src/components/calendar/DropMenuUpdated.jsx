import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const DropMenuUpdated = ({
  status2,
  setStatus2,
  customer_id2,
  setCustomer_id2
}) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    let isApiSubscribed = true;
    const api = `https://app.medical-clinic.tk/api/customers`;
    const token = JSON.parse(sessionStorage.getItem("token"));
    axios
      .get(api, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        if (isApiSubscribed) setPatients(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => (isApiSubscribed = false);
  }, []);

  const showDetails = (e) => {
    console.log(e);

    // const api = `https://app.medical-clinic.tk/api/reservations/${e.id}/show`
    // const token = JSON.parse(sessionStorage.getItem('token'));

    // axios.get(api, { headers: { "Authorization": `Bearer ${token}` } })
    //   .then(res => {
    //     console.log(res.data.reservation)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   });
  };

  const [id, setId] = useState(customer_id2);
  const [statusa, setStatusa] = useState(status2);

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleChangeStatus = (e) => {
    setStatusa(e.target.value);
  };

  useEffect(() => {
    setCustomer_id2(id);
    setStatus2(statusa);
  }, [setCustomer_id2, id, statusa, setStatus2]);

  const menuItems = patients.map((pat) => pat.name);

  const [selectedItem, setSelectedItem] = useState({
    item: menuItems[0],
    idx: 0,
  });
  const [state, setState] = useState(false);
  const selectMenuRef = useRef();

  //  For Exist From The Form
  const handleSelectMenu = useCallback((e) => {
    if (!selectMenuRef.current.contains(e.target)) {
      setState(false);
      // setYears(selectedItem.item)
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleSelectMenu);

    return () => document.removeEventListener("click", handleSelectMenu);
  }, [handleSelectMenu]);


  return (
    <div className="relative w-52 text-[16px]">
      <label>a</label>
      <button
        ref={selectMenuRef}
        className="flex items-center justify-between w-full px-3 py-2 text-gray-500 bg-white border rounded-md shadow-sm cursor-default outline-none focus:border-indigo-600 "
        aria-haspopup="true"
        aria-expanded="true"
        onClick={() => {
          setState(!state);
          showDetails(id);
        }}
      >
        {selectedItem.item}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
          />
        </svg>
      </button>

      {state ? (
        <div className="relative w-full">
          <ul
            className="absolute w-full mt-3 overflow-y-auto bg-white border rounded-md shadow-sm max-h-64"
            role="listbox"
          >
            {menuItems.map((el, idx) => (
              <li
                key={idx}
                onClick={() =>
                  setSelectedItem({
                    item: el,
                    idx,
                  })
                }
                role="option"
                className={`${
                  selectedItem.idx === idx ? "text-indigo-600 bg-indigo-50" : ""
                } flex items-center justify-between px-3 cursor-default py-2 duration-150 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50`}
              >
                {el}
                {selectedItem.idx === idx ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
      {/*<div className="relative w-full text-[16px] flex justify-between my-4">
     <Box className='w-1/2 ' >
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
      </Box>
    </div> */}
    </div>
  );
};

export default DropMenuUpdated;
