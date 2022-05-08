import React, { useEffect, useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import DeletePatients from '../components/patients/DeletePatients'
import ShowInfo from '../components/patients/ShowInfo'
import NewPatients from '../components/patients/NewPatients'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Patients = () => {

  const dispatch = useDispatch()

  const [dataUser, setDataUser] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  const [search, setSearch] = useState('')
  const [done, setDone] = useState(false)

  // For Post 
  const [showAddPatients, setShowAddPatients] = useState(false)

  useEffect(() => {
    let isApiSubscribed = true;
    const api = `https://app.medical-clinic.tk/api/customers?search=${search}`;
    const token = JSON.parse(sessionStorage.getItem('token'));
    axios.get(api, { headers: { "Authorization": `Bearer ${token}` } })
    .then(res => {
      if (isApiSubscribed) {
        setDataUser(res.data.data)
        setDone(false)
        }
      })
      .catch((error) => {
        console.log(error)
      });
    return () => isApiSubscribed = false;
  }, [done, search])

  const showDetails = (e) => {
    setUserInfo(e)
    setShowModal(true)
  }


  const deletePatients = (e) => {
    setShowModalDelete(true)
    setUserInfo(e)
    // app.medical-clinic.tk
  }

  const newPatients = (e) => {
    setShowAddPatients(true)
  }


// .filter(name => name.name.includes(search))
  const rows = dataUser.map((row, i) => (
    <tr className='hover:bg-sky-100 transition-all duration-200 text-left' key={i}>
      <td className="pl-3 py-3 border-b border-gray-200 text-sm">
        <div className="flex items-center">
          <p className="text-gray-900 whitespace-no-wrap">
            {row.name}
          </p>
        </div>
      </td>
      <td className="pl-3 py-3 border-b border-gray-200 text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{row.phone1}</p>
      </td>
      <td className="pl-3 py-3 border-b border-gray-200 text-sm">
        <p className="text-gray-900 whitespace-nowrap">
          {row.email}
        </p>
      </td>
      <td className="pl-3 py-3 border-b border-gray-200 text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {row.gender}
        </p>
      </td>
      <td className="pl-3 py-3 border-b border-gray-200 text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {row.created_at}
          {/* row.created_at.length.substr(0, 18) */}
        </p>
      </td>
      <td className="pl-3 py-3 border-b border-gray-200 text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {row.blood_type}
        </p>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 text-md ">
        <AiOutlineEye className='cursor-pointer inline-block' onClick={() => showDetails(row)} />
        <RiDeleteBin5Line className='cursor-pointer inline-block text-red-700' onClick={() => deletePatients(row)} />
      </td>
    </tr>
  ))

  return (
    <div>
      <div className="bg-white p-8 rounded-md w-full">
        <div className=" flex items-center justify-between pb-6">
          <div>
            {/* <h2 className="text-gray-600 font-semibold">Products Oder</h2> */}
            <label>Results :
              <select className="form-control">
                <option value="7">7</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex bg-gray-50 items-center p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                fill="currentColor">
                <path fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd" />
              </svg>
              <input value={search} onChange={e => setSearch(e.target.value)} className="bg-gray-50 outline-none ml-1 block text-sm px-2" type="text" name="" id="" placeholder="search by name..." />
            </div>
            <button className='btn' onClick={() => newPatients()}>Add Patients</button>
            <NewPatients setDone={setDone} showAddPatients={showAddPatients} setShowAddPatients={setShowAddPatients} />
          </div>

        </div>
        <div>
          <div className=" -mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min- w-full leading-normal text-center">
                <thead>
                  <tr>
                    <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      phone
                    </th>
                    <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      email
                    </th>

                    <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      gender
                    </th>
                    <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider  text-center">
                      Created At
                    </th>
                    <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      blood_type
                    </th>
                    <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Name	Position	Office	Age	Start date	Salary	Action */}

            {rows}

                </tbody>
              </table>
              <div
                className="px-5 py-3 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                <span className="text-xs xs:text-sm text-gray-900">
                  Showing 1 to 4 of 50 Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                  <button
                    className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                    Prev
                  </button>
                  &nbsp; &nbsp;
                  <button
                    className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ShowInfo setDone={setDone} userInfo={userInfo} setUserInfo={setUserInfo} showModal={showModal} setShowModal={setShowModal} />
        <DeletePatients setDone={setDone} patientInfo={userInfo} showModalDelete={showModalDelete} setShowModalDelete={setShowModalDelete} />
      </div>
        <ToastContainer />
    </div>
  )
}

export default Patients