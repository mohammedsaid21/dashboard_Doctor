import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { createElement } from "../../redux/userSlice"

const AddXRayPictures = ({ showAddXray, setShowAddXray, setDone }) => {

  const [xRayPictures, setXRayPictures] = useState({ name: "" })

  const handleChange = (e) => {
    setXRayPictures({ ...xRayPictures, [e.target.name]: e.target.value })
  }

  const onlySpaces = (str) => str.trim().length > 3
  const error = useRef()
  const [wronge, setWrong] = useState('')

  const dispatch = useDispatch()

  const closeModal = () => {
    setShowAddXray(false)
    setXRayPictures({ name: "" })
    setWrong('')
  }

  const submitInfo = (e) => {
    e.preventDefault()

    const api = 'https://app.medical-clinic.tk/api/xrays/create'
    const info = xRayPictures

    const data = { api, info }
    if (onlySpaces(xRayPictures.name)) {
      dispatch(createElement(data))
      setDone(true)
      setShowAddXray(false)
      setXRayPictures({ name: "" })
    } else {
      error.current.innerHTML = 'Be Sure From You Info (at least 3 chars)'
      setWrong('wronge')
    }
  }

  return (
    showAddXray ? (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => closeModal()}></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className={`relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg  ${wronge}`}>
            <form onSubmit={submitInfo} className='mt-3'>
              <input
                type="text"
                value={xRayPictures.name}
                name="name"
                onChange={e => handleChange(e)}
                placeholder="enter name the Pharmaceutical"
                className="w-full py-3 pl-7 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600 mb-2"
              />
              <span ref={error} className='text-sm mt-4 mx-2 text-red-700'></span>

              <button className="w-full mt-2 p-2.5 flex-1 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                type='submit'
              >
                Add
              </button>
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

export default AddXRayPictures