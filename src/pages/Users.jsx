import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { AiOutlineEye } from 'react-icons/ai'
import { RiDeleteBin5Line } from 'react-icons/ri'

import DeleteUser from '../components/user/DeleteUser'
import ShowInfo from '../components/user/ShowInfo'
import NewUser from '../components/user/NewUser'
import { ToastContainer } from 'react-toastify'

const Users = () => {

  const [dataUser, setDataUser] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  const [search, setSearch] = useState('')
  const [done, setDone] = useState(false)

  // For Post 
  const [showAddUser, setShowAddUser] = useState(false)


  const showDetails = (e) => {
    setUserInfo(e)
    setShowModal(true)
  }


  const deleteUser = (e) => {
    setShowModalDelete(true)
    setUserInfo(e)
  }

  const newUser = (e) => {
    setShowAddUser(true)
  }

useEffect(() => {
  let isApiSubscribed = true;
  const api = `https://app.medical-clinic.tk/api/users?search=${search}`;
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


// .filter(name => name.name.includes(search))
  const rows = dataUser.map((row, i) => (
    <tr className='hover:bg-sky-100 transition-all duration-200' key={i}>
      <td className="lg:px-5 lg:py-3 px-2 py-2 border-b border-gray-200 lg:text-sm text-[10px] text-left">
        <div className="flex items-center">
          <img src={row.image} className='rounded-2xl mx-1' alt='' />
          <p className="text-gray-900  whitespace-pre-wrap">
            {row.name}
          </p>
        </div>
      </td>
      <td className="lg:px-5 lg:py-3 px-2 py-2 border-b border-gray-200  lg:text-sm text-[10px]">
        <p className="text-gray-900 whitespace-no-wrap">
          { row.phone ? row.phone : "No Exist" }
        </p>
      </td>
      <td className="lg:px-5 lg:py-3 px-1 py-1 border-b border-gray-200  lg:text-sm text-[10px] text-left">
        <p className="text-gray-900 whitespace-pre-wrap">
          {row.email}
        </p>
      </td>
      <td className="lg:px-5 lg:py-3 px-2 py-2 border-b border-gray-200  lg:text-sm text-[10px]">
        <p className="text-gray-900 whitespace-no-wrap">
          {row.gender}
        </p> 
      </td>
      <td className="lg:px-5 lg:py-3 px-2 py-2 border-b border-gray-200  lg:text-sm text-[10px]">
        <p className="text-gray-900 whitespace-no-wrap">
          Admin
        </p>
      </td>
      <td className="lg:px-5 lg:py-3 px-2 py-2 border-b border-gray-200  text-md fle x items-center justify-between ">
        <AiOutlineEye className='cursor-pointer inline-block mr-4' onClick={() => showDetails(row)} />
        <RiDeleteBin5Line className='cursor-pointer inline-block w-' onClick={() => deleteUser(row)} />
      </td>
    </tr>
  ))

  return (
    <div>
      <div className="bg-white lg:p-8 p-6 rounded-md w-full">
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
            <button className='btn' onClick={() => newUser()}>Add Users</button>
            <NewUser setDone={setDone} showAddUser={showAddUser} setShowAddUser={setShowAddUser} />
          </div>
        </div>

        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className=" w-full leading-normal text-center">
                <thead>
                  <tr>
                    <th
                      className="lg:px-5 lg:py-3 px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th
                      className="lg:px-5 lg:py-3 px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      phone
                    </th>
                    <th
                      className="lg:px-5 lg:py-3 px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider ">
                      email
                    </th>

                    <th
                      className="lg:px-5 lg:py-3 px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      gender
                    </th>
                    <th
                      className="lg:px-5 lg:py-3 px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      User type
                    </th>
                    <th
                      className="lg:px-5 lg:py-3 px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase trackin g-wider">
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
                className="lg:px-5 lg:py-3 px-2 py-2 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
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
        <DeleteUser setDone={setDone} userInfo={userInfo} setUserInfo={setUserInfo} showModal={showModalDelete} setShowModal={setShowModalDelete} />
      </div>
      <ToastContainer />
    </div>
  )
}

export default Users