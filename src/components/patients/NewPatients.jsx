import axios from 'axios'
import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPatients, sucsessToast } from '../../redux/userSlice'

const NewPatients = ({ showAddPatients, setShowAddPatients, setDone }) => {

  const [info, setInfo] = useState({ name: "", phone1: "", phone2: "", email: "", gender: "male", birthdate: "", image: "", blood_type: "", id_number: "", height: "", matiral_status: "married", job: "" })
  
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value, [e.target.phone1]: e.target.value, [e.target.phone2]: e.target.value, [e.target.email]: e.target.value, [e.target.gender]: e.target.value, [e.target.birthdate]: e.target.value, [e.target.image]: e.target.value, [e.target.blood_type]: e.target.value, [e.target.id_number]: e.target.value, [e.target.height]: e.target.value, [e.target.matiral_status]: e.target.value, [e.target.job]: e.target.value })
  }

  const hideModal = () => {
    setShowAddPatients(false)
    setInfo({ name: "", phone1: "", phone2: "", email: "", gender: "", birthdate: "", image: "", blood_type: "", id_number: "", height: "", matiral_status: "", job: "" })
    setWrong('')
  }
  const onlySpaces = (str) => str.trim().length > 2
  const error = useRef()
  const [wronge, setWrong] = useState('')

  const dispatch = useDispatch()

  const api = 'https://app.medical-clinic.tk/api/customers/create'

  const submitInfo = (e) => {
    e.preventDefault()
    
    const data = {api, info}
    if (onlySpaces(info.name) && onlySpaces(info.email) && onlySpaces(info.phone1) && onlySpaces(info.id_number)) {
      dispatch(createPatients(data))
      setDone(true)
      setShowAddPatients(false)
      dispatch(sucsessToast())
    } else {
      error.current.innerHTML = 'Be Sure From You Info'
      setWrong('wronge')
    }
  }

  
  return (
    showAddPatients ? (
      <div className="fixed inset-0 h -[9 5%] z-50 overflow-y-auto">
        <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => hideModal()}></div>
        <div className={`flex items-center h-[100%] mt-5 w-[80%] mx-auto px-4 py-6 ${wronge}`}>
          <div className="relative md:w-full w-lg mx-auto rounded-md ">
            {/* ------------------------------------ */}
            <div className=" px-4 mt-10 bg-gray-100 flex items-center justify-center rounded-xl">
              <div className="container max-w-screen-lg Lg mx-auto">
                <div>
                  <div className="bg-white rounded shadowLg p-4 px-4 md:p-8 mb-6">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                      <div className="text-gray-600">
                        <p className="font-medium text-xl">Personal Details</p>
                        <p className="font-medium text-lg">You Can Add The New Data</p>
                      </div>

                      <div className="lg:col-span-3" >
                        <form onSubmit={submitInfo} className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">

                          {/* ------------------------------------ */}
                          <div className="md:col-span-5">
                            <label htmlFor="full_name">Full Name</label>
                            <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50 flex items-center ' placeholder='Enter UserName' onChange={e => handleChange(e)} value={info.name} name='name' type="text" required /> {/**/}
                            {/* <button onClick={e => showDetails()}>edit</button> */}
                          </div>

                          <div className="md:col-span-5">
                            <label htmlFor="email">Email Address</label>
                            <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50 flex items-center' onChange={e => handleChange(e)} value={info.email} name='email' type="email" placeholder="email@domain.com" required /> {/**/}
                          </div>

                          <div className="md:col-span-3">
                            <label>Number Phone 1</label>
                            <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50 flex items-center' onChange={e => handleChange(e)} value={info.phone1} name='phone1' type="text" placeholder="+1231231235" required /> {/**/}
                          </div>

                          <div className="md:col-span-3">
                            <label>Number Phone 2</label>
                            <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50 flex items-center' onChange={e => handleChange(e)} value={info.phone2} name='phone2' type="text" placeholder="+4231231235" />
                          </div>

                          <div className="md:col-span-3">
                            <label>Birthdate</label>
                            <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50 flex items-center' onChange={e => handleChange(e)} value={info.birthdate} name='birthdate' type="text" placeholder="Y/M/D" />
                          </div>

                          <div className="md:col-span-3">
                            <label>id_number</label>
                            <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50 flex items-center' onChange={e => handleChange(e)} value={info.id_number} name='id_number' type="text" placeholder="123123" required /> {/**/}
                          </div>

                          <div className="md:col-span-3">
                            <label>Height</label>
                            <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50 flex items-center' onChange={e => handleChange(e)} value={info.height} name='height' type="text" placeholder="matiral_status" />
                          </div>

                          <div className="md:col-span-3">
                            <label>Job</label>
                            <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50 flex items-center ' onChange={e => handleChange(e)} value={info.job} name='job' type="text" placeholder="matiral_status" required /> {/**/}
                          </div>

                          <div className="md:col-span-1">
                            <label>Gender</label>
                            <select value={info.gender} onChange={e => handleChange(e)} className='h-10 border mt-1 rounded px-4 w-full bg-gray-50 flex items-center' name="gender" id="gender">
                              <option value="male">male</option>
                              <option value="female">female</option>
                            </select>
                          </div>

                          <div className="md:col-span-1">
                            <label>Matiral_status</label>
                            <select value={info.matiral_status} onChange={e => handleChange(e)} className='h-10 border mt-1 rounded px-4 w-full bg-gray-50 flex items-center' name="matiral_status" id="matiral_status">
                              <option value="married">married</option>
                              <option value="Unmarried">Unmarried</option>
                            </select>
                          </div>
                          {/* <br /> */}
                          <div className="md:col-span-1">
                            <label>blood_type</label>
                            <select value={info.blood_type} onChange={e => handleChange(e)} className='h-10 border mt-1 rounded px-4 w-full bg-gray-50 flex items-center' name="blood_type" id="blood_type">
                              <option value="A">A</option>
                              <option value="B">B</option>
                              <option value="C">C</option>
                            </select>
                          </div>
                          {/* <div className="md:col-span-3">
    <label>Image</label>
    <div className="h-20 border mt-1 rounded px-4 w-full bg-gray-50 flex items-center">
      <img className='rounded-full ' src={info.image} alt='' />
    </div>
  </div> */}
                          <br />
                          <br />
                          <span ref={error} className='text-sm text-red-700 md:col-span-3'></span>

                          <div className="gap-2 mt-3 sm:flex w-[100%] mx-auto md:col-span-full">
                            <input type='submit' placeholder='Add' className="w-full mt-2 p-2.5 flex-1 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2" />
                            <button className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2" onClick={() => hideModal()} >
                              Undo
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : ''
  )
}

export default NewPatients
