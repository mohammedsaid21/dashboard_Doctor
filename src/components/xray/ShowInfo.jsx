import React ,{ useRef, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateInfo } from '../../redux/userSlice'

const ShowInfo = ({ showModal, setShowModal, userInfo, setUserInfo, setDone}) => {

  const [wronge, setWrong] = useState('')
  
  let { id, name } = userInfo

  const dispatch = useDispatch()
  const error = useRef()
  const [flag, setFlag] = useState(false)

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })

    setFlag(true)
  }

  const hideModal = () => {
    setShowModal(false)
    setWrong('')
  }

  const upDateInfo = () => {

    const api = 'https://app.medical-clinic.tk/api/xrays/update'
    const updatedObject = { id, name }

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
          <div className="w-[80%] mx-auto px-4 my-12 bg-gray-100 flex items-center justify-center rounded-xl">
            <div className="container max-w-screen-lg Lg mx-auto">
                <div>
                  <div className="bg-white rounded shadowLg p-4 px-4 md:p-8 mb-6">
                    <div className="grid gap-4 gap-y-1 text-sm grid-cols-1 lg:grid-cols-3">
                      <div className="text-gray-600">
                        <p className="font-medium text-xl">Personal Details</p>
                        <p className="font-medium text-lg">You Can UpDate The Data</p>
                      </div>

                      <div className="lg:col-span-3" >
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">

                          {/* ------------------------------------ */}
                          <div className="md:col-span-6">
                            <label htmlFor="name">Enter Name Pharmaceutical</label>
                            <input className='h-10 border mt-1 rounded px-4 w-full bg-gray-50 flex items-center' onChange={e => handleChange(e)} defaultValue={name} name='name' type="text"  placeholder="Enter Name Pharmaceutical" />
                          </div>

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