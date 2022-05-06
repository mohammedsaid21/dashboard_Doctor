import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateInfo } from '../../redux/userSlice'

const ShowInfo = ({ showModal, setShowModal, userInfo, setUserInfo, setDone }) => {

  const [wronge, setWrong] = useState('')

  let { id, name, phone, email, gender, birthdate, image, user_type, password } = userInfo

  const dispatch = useDispatch()
  const error = useRef()
  const [flag, setFlag] = useState(false)

  // setWrong('')

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value, [e.target.phone]: e.target.value, [e.target.email]: e.target.value, [e.target.gender]: e.target.value, [e.target.birthdate]: e.target.value, [e.target.image]: e.target.value, [e.target.user_type]: e.target.value, [e.target.password]: e.target.value})

    setFlag(true)
  }

  // setInfo(currentArray => [...currentArray, handleChange(e)])

  const hideModal = () => {
    setShowModal(false)
    setWrong('')
  }

  const upDateInfo = () => {

    const api = 'https://app.medical-clinic.tk/api/users/update'
    const user_id = id
    const updatedObject = { user_id, name, phone, email, gender, birthdate, image, user_type, password }

    if(flag) {
      const data = { api, updatedObject }
      dispatch(updateInfo(data))
      setDone(true)
      setShowModal(false)
      setFlag(false)
    } else {
      error.current.innerHTML = 'Be Sure From You Info'
      setWrong('wronge')
    }
  }


  return (
    showModal ? (
      <div className="fixed inset-0 h -[9 5%] z-50 overflow-y-auto">
      <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => hideModal()}></div>
      <div className={`flex items-center h-[100%] mt-5 w-[80%] mx-auto px-4 py-6 ${wronge}`}>
        <div className="relative md:w-full w-lg mx-auto rounded-md ">
          {/* ------------------------------------ */}
          <div className=" px-4 my-12 bg-gray-100 flex items-center justify-center rounded-xl">
            <div className="container max-w-screen-lg Lg mx-auto">
                <div>
                  <div className="bg-white rounded shadowLg p-4 px-4 md:p-8 mb-6">
                    <div className="grid gap-4 gap-y-1 text-sm grid-cols-1 lg:grid-cols-3">
                      <div className="text-gray-600">
                        <p className="font-medium text-xl">Personal Details</p>
                        <p className="font-medium text-lg">You Can Add The New Data</p>
                      </div>

                      <div className="lg:col-span-3" >
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">

                          {/* ------------------------------------ */}
                          <div className="md:col-span-5">
                            <label htmlFor="full_name">Full Name</label>
                            <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50 flex items-center' onChange={e => handleChange(e)} defaultValue={name} name='name' type="text" />
                          </div>

                          <div className="md:col-span-5">
                            <label htmlFor="email">Email Address</label>
                            <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50 flex items-center text-sm' onChange={e => handleChange(e)} defaultValue={email} name='email' type="email" placeholder="email@domain.com" />
                          </div>

                          <div className="md:col-span-3">
                            <label>Number Phone</label>
                            <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50 flex items-center ' onChange={e => handleChange(e)} defaultValue={phone} name='phone' type="text" placeholder="+1231231235" />
                          </div>

                          <div className="md:col-span-3">
                            <label>Birthdate</label>
                            <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50 flex items-center ' onChange={e => handleChange(e)} defaultValue={birthdate} name='birthdate' type="text" placeholder="+1231231235" />
                          </div>

                          <div className="md:col-span-3">
                            <label>password</label>
                            <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50 flex items-center ' onChange={e => handleChange(e)} defaultValue={password} name='password' type="text" placeholder="+1231231235" />
                          </div>

                          <div className="md:col-span-1">
                            <label>Gender</label>
                            <select defaultValue={gender} onChange={e => handleChange(e)} className='w-full h-full bg-white border px-2' name="gender" id="gender">
                              <option value="male">male</option>
                              <option value="female">female</option>
                            </select>
                          </div>

                          {/* <br /> */}
                          <div className="md:col-span-1">
                            <label>user_type</label>
                            <select defaultValue={user_type} onChange={e => handleChange(e)} className='w-full h-full bg-white border px-2' name="user_type" id="user_type">
                              <option defaultValue="Admin">Admin</option>
                              <option value="employer">Employer</option>
                            </select>
                          </div>
                          {/* <div className="md:col-span-3">
                              <label>Image</label>
                              <div className="h-20 border mt-1 rounded px-4 w-full bg-gray-50 flex items-center">
                                // <label className='w-1/2 flex items-center text-sm'>image</label>
                                <img className='rounded-full ' src={info.image} alt='' />
                              </div>
                            </div> */}
                          <br />
                          <span ref={error} className='text-sm p mt-4 text-red-700 md:col-span-4'></span>

                          <div className="gap-2 mt-3 sm:flex w-[100%] mx-auto md:col-span-full">
                            <button className="w-full mt-2 p-2.5 flex-1 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                              onClick={() => upDateInfo()}
                            >
                              Update
                            </button>
                            <button className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                              onClick={() => hideModal()}
                            >
                              Cansle
                            </button>
                          </div>

                        </div>
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

export default ShowInfo
