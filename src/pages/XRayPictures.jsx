import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { BsPencil } from 'react-icons/bs'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/userSlice'
import Modals from '../components/AddPhrmaceutical'
import { useState } from 'react'

const XRayPictures = () => {


  const dispatch = useDispatch()

  const editPatients = () => {
    dispatch(login())
  }



  const deletePatients = async () => {
    // const res = await fetch('https://app.medical-clinic.tk/api/users')
    // const data = await res.json()

    // console.log(data)

    // app.medical-clinic.tk
  }

  const [showModal, setShowModal] = useState(false)

  const addXRayPictures = () => {
    setShowModal(true)
  }

  const data = [0, 1, 2]

  const rows = data.map((row, i) => (
    <tr key={i}>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <p className="text-gray-900 whitespace-no-wrap">
            ansolen
          </p>
        </div>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-xl flex items-center justify-around ">
        <BsPencil className='cursor-pointer' onClick={() => editPatients()} />
        <RiDeleteBin5Line className='cursor-pointer' onClick={() => deletePatients()} />
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
                <input className="bg-gray-50 outline-none ml-1 block text-sm px-2" type="text" name="" id="" placeholder="search by name..." />
              </div>
            </div>
            <button className='btn' onClick={() => addXRayPictures()}>Add X-Ray Pictures</button>
            <Modals showModal={showModal} setShowModal={setShowModal} />
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

      </div>
    </div>
  )
}

export default XRayPictures