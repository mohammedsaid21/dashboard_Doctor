import React, { useEffect } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { BsPencil } from 'react-icons/bs'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { getData, login } from '../redux/userSlice'
import { useState } from 'react'
import axios from 'axios'
import AddExpenses from '../components/expenses/AddExpenses'
import { ToastContainer } from 'react-toastify'
import ShowInfo from '../components/expenses/ShowInfo'
import DeleteExpenses from '../components/expenses/DeleteExpenses'

const Expenses = () => {

  const dispatch = useDispatch()

  const [dataUser, setDataUser] = useState([])
  const [userInfo, setUserInfo] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)

  const [search, setSearch] = useState('')
  const [done, setDone] = useState(false)

  // For Post 
  const [showAddExpenses, setShowAddExpenses] = useState(false)

  useEffect(() => {
    let isApiSubscribed = true;
    const api = `https://app.medical-clinic.tk/api/expenses`;
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

  const addExpense = () => {
    setShowAddExpenses(true)
  }

  const editExpense = (e) => {
    setShowModal(true)
    setUserInfo(e)
  }

  const deleteExpense = (e) => {
    setShowModalDelete(true)
    setUserInfo(e)
  }


  const rows = dataUser.map((row, i) => (
    <tr className='hover:bg-sky-100 transition-all duration-200 ' key={i}>
      <td className="px-5 py-3 border-b border-gray-200 text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{row.name}</p>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{row.value}</p>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{row.notes}</p>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 text-xl flex items-center justify-around ">
        <BsPencil className='cursor-pointer' onClick={() => editExpense(row)} />
        <RiDeleteBin5Line className='cursor-pointer' onClick={() => deleteExpense(row)} />
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
          <div className=" flex justify-between">

            <button className='btn' onClick={() => addExpense()}>Add Expenses</button>
            <AddExpenses setDone={setDone} showAddExpenses={showAddExpenses} setShowAddExpenses={setShowAddExpenses} />
          </div>

        </div>
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
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
                      value
                    </th>
                    <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      notes
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
        <DeleteExpenses setDone={setDone} userInfo={userInfo} showModalDelete={showModalDelete} setShowModalDelete={setShowModalDelete} />

      </div>
      <ToastContainer />
    </div>
  )
}

export default Expenses