import { useState, useEffect } from 'react'

const ShowInfo = ({ showModal, setShowModal, userInfo }) => {

  const { name, phone, email, gender, birthdate, image, user_type } = userInfo


  const [userName, setUserName] = useState(name)
  const [emaila, setEmaila] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [gendera, setGendera] = useState('')
  const [birthdatea, setBirthdatea] = useState('')
  const [img, setImg] = useState('')
  const [userType, setUserType] = useState()



  return (
    showModal ? (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setShowModal(false)}></div>
        <div className="flex items-center h-[100%] w-[80%] mx-auto px-4 py-8">
          <div className="relative w-full max-wLg p-4 mx-auto bg-white rounded-md ">
            {/* ------------------------------------ */}
            <div className=" p-6 bg-gray-100 flex items-center justify-center">
              <div className="container max-w-screenLg mx-auto">
                <div>
                  <div className="bg-white rounded shadowLg p-4 px-4 md:p-8 mb-6">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                      <div className="text-gray-600">
                        <p className="font-medium textLg">Personal Details</p>
                        <p>Please fill out all the fields.</p>
                      </div>

                      <div className="lg:col-span-2" >
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">

                          <div className="md:col-span-5">
                            <label htmlFor="full_name">Full Name</label>
                            <input value={name || ''} onChange={e => setUserName(e.target.value)} type="text" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                          </div>

                          <div className="md:col-span-5">
                            <label htmlFor="email">Email Address</label>
                            <input value={email || ''} onChange={e => setEmaila(e.target.value)} type="text" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" />
                          </div>

                          <div className="md:col-span-3">
                            <label htmlFor="address">Phone Number</label>
                            <input value={phone || ''} onChange={e => setPhoneNumber(e.target.value)} type="text" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                          </div>


                          <div className="md:col-span-2">
                            <label htmlFor="country">Birthdate</label>
                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                              <input value={birthdate || ''} onChange={e => setBirthdatea(e.target.value)} placeholder="" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                            </div>
                          </div>

                          <div className="md:col-span-2">
                            <label htmlFor="state">Image</label>
                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                              <input value={image || ''} onChange={e => setImg(e.target.value)} placeholder="" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                            </div>
                          </div>

                          <div className="md:col-span-2">
                            <label htmlFor="state">user_type</label>
                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                              {/* <input value={userType} onChange={e => setUserType(e.target.value)} placeholder="" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" /> */}
                              <select value={gender || ''} onChange={w => setGendera(w.target.value)} className='w-full h-full' name="gender" id="gender">
                                <option value="male">male</option>
                                <option value="female">female</option>
                              </select>
                            </div>
                          </div>

                          <div className="md:col-span-2">
                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                              <select value={gender} onChange={w => setGendera(w.target.value)} className='w-full h-full' name="gender" id="gender">
                                <option value="male">male</option>
                                <option value="female">female</option>
                              </select>
                            </div>
                          </div>

                          <br />

                          <div className="gap-2 mt-3 sm:flex w-[100%] mx-auto md:col-span-full">
                            <button className="w-full mt-2 p-2.5 flex-1 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                              onClick={() => setShowModal(false)}
                            >
                              Add
                            </button>
                            <button className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                              onClick={() => setShowModal(false)}
                            >
                              Undo
                            </button>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  ------------------------------------ */}
            {/* <div className="items-center gap-2 mt-3 sm:flex">
  <button className="w-full mt-2 p-2.5 flex-1 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
    onClick={() => setShowModal(false)}
  >
    Add
  </button>
  <button className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
    onClick={() => setShowModal(false)}
  >
    Undo
  </button>
</div> */}
          </div>
        </div>
      </div>
    ) : ''
  )
}

export default ShowInfo