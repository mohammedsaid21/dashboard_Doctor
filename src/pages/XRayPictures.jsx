import React, { useEffect } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { BsPencil } from 'react-icons/bs'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/userSlice'
import { useState } from 'react'
import axios from 'axios'
import AddXRayPictures from '../components/xray/AddXRayPictures'
import { ToastContainer } from 'react-toastify'
import ShowInfo from '../components/xray/ShowInfo'
import DeleteXray from '../components/xray/DeleteXray'

const XRayPictures = () => {

  const [dataUser, setDataUser] = useState([])
  const [userInfo, setUserInfo] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)

  const [search, setSearch] = useState('')
  const [done, setDone] = useState(false)

  // For Post 
  const [showAddXray, setShowAddXray] = useState(false)


  useEffect(() => {
    let isApiSubscribed = true;
    const api = `https://app.medical-clinic.tk/api/xrays?search=${search}`;
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


  const addXRayPicture = () => {
    setShowAddXray(true)
  }

  const editPatients = (e) => {
    setShowModal(true)
    setUserInfo(e)
  }

  const deletePatients = (e) => {
    setShowModalDelete(true)
    setUserInfo(e)
  }

  const rows = dataUser.map((row, i) => (
    <tr className='hover:bg-sky-100 transition-all duration-200 ' key={i}>
      <td className="px-5 py-3 border-b border-gray-200 text-sm">
        <div className="flex items-center">
          <p className="text-gray-900 whitespace-no-wrap">
            {row.name}
          </p>
        </div>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 text-xl flex items-center justify-around ">
        <BsPencil className='cursor-pointer' onClick={() => editPatients(row)} />
        <RiDeleteBin5Line className='cursor-pointer' onClick={() => deletePatients(row)} />
      </td>
    </tr>
  ))

  return (
    <div>
      <div className="bg-white p-8 rounded-md ">
        <div className=" flex items-center justify-between pb-6">
          <div>
            {/* <h2 className="text-gray-600 font-semibold">Products Oder</h2> */}
            <label>Results :
              <select name="default-ordering_length" aria-controls="default-ordering" className="form-control">
                <option value="7">7</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </label>
          </div>
          <div className=" flex justify-between">

            <div className='flex items-center justify-between mr-8'>
              <div className="flex bg-gray-50 items-center p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd" />
                </svg>
                <input value={search} onChange={e => setSearch(e.target.value)} className="bg-gray-50 outline-none ml-1 block text-sm px-2" type="text" name="" placeholder="search by name..." />
              </div>
            </div>
            <button className='btn' onClick={() => addXRayPicture()}>Add X-Ray Pictures</button>
            <AddXRayPictures showAddXray={showAddXray} setShowAddXray={setShowAddXray} setDone={setDone} />
          </div>
        </div>


        <div className='w-full mx-auto'>
          <div className=" px-4 py-5 overflow-x-auto w-[100%] mx-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min- w-full leading-normal text-c enter">
                <thead>
                  <tr>
                    <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Name
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
                className="px-5 py-3 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
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
        <DeleteXray setDone={setDone} userInfo={userInfo} showModalDelete={showModalDelete} setShowModalDelete={setShowModalDelete} />
      </div>
      <ToastContainer />
    </div>
  )
}

export default XRayPictures