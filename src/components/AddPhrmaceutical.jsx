import { useDispatch } from 'react-redux'
import { useState } from "react"
import { createPatients } from '../redux/userSlice'

const AddPhrmaceutical = ({ showModal, setShowModal }) => {

  const [phrmace, setPhrmace] = useState({name: "", instruction: ""})

  const handleChange = (e) => {
    setPhrmace({ ...phrmace, [e.target.name]: e.target.value,
        [e.target.instruction]: e.target.value})
    console.log(phrmace)
  }
  
  const onlySpaces = (str) => str.trim().length > 0

  const dispatch = useDispatch()

  const api = 'https://app.medical-clinic.tk/api/customers/create'

  const submitInfo = (e) => {
    e.preventDefault()

    const info = phrmace

    const data = {api, info}
    if (onlySpaces(phrmace.name) && onlySpaces(phrmace.instruction) ) {
      dispatch(createPatients(data))
    }
    setShowModal(false)
    setPhrmace({name: "", instruction: ""})
  }

  const closeModal = () => {
    setShowModal(false)
    setPhrmace({name: "", instruction: ""})
  }


  return (
    showModal ? (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => closeModal()}></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            <form onSubmit={submitInfo} className="mt-3">
                <input
                  type="text"
                  value={phrmace.name}
                  name="name"
                  onChange={e => handleChange(e)}
                  placeholder="enter name the Pharmaceutical"
                  className="w-full py-3 pl-7 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600 mb-5" required
                />
                <input
                  type="text"
                  value={phrmace.instruction}
                  name='instruction'
                  onChange={e => handleChange(e)}
                  placeholder="enter The Instructions"
                  className="w-full py-3 pl-7 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600" required
                />
              <input className="w-full mt-2 p-2.5 flex-1 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2" placeholder="Add" type='submit' />
            </form>
            <div className="items-center gap-2 mt-3 sm:flex">
              <button className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                onClick={() => closeModal()}
              >
                Undo
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : ''
  )
}

export default AddPhrmaceutical