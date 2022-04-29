import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { BsPencil } from 'react-icons/bs'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import axios from 'axios'
// import { accessToken } from '../env'


const Patients = () => {

  const showDetails = (e) => {
    console.log(e)
  }

  const dispatch = useDispatch()

  const editPatients = () => {
    
  }

  // axios.interceptors.request.use(
  //   config => {
  //     config.headers.authorization = accessToken
  //     return config
  //   }, 
  //   error => {
  //     return Promise.reject(error)
  //   }
  // )

  const deletePatients = async () => {
    try {
      const result = await axios.get('https://app.medical-clinic.tk/api/customers')
      console.log(result)
    } catch (err) {
      console.log(err.message)
    }

    // app.medical-clinic.tk
  }


  const data = [0, 1, 2]

  const rows = data.map((row, i) => (
    <tr key={i}>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <p className="text-gray-900 whitespace-no-wrap">
            Vera Carpenter
          </p>
        </div>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">+970595573717</p>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          gasdhjgashj@
        </p>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          male
        </p>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          Jan 21, 2020
        </p>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          B
        </p>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-md ">
        <AiOutlineEye className='cursor-pointer inline-block' onClick={() => showDetails(row)} />
        <BsPencil className='cursor-pointer inline-block' onClick={() => editPatients()} />
        <RiDeleteBin5Line className='cursor-pointer inline-block' onClick={() => deletePatients()} />
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
              <input className="bg-gray-50 outline-none ml-1 block text-sm px-2" type="text" name="" id="" placeholder="search by name..." />
            </div>

          </div>
        </div>
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
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
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      birthdate
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

export default Patients