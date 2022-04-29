import { useState } from "react"

const AddXRayPictures = ({ showModal, setShowModal }) => {

  return (
    showModal ? (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setShowModal(false)}></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            <form className="mt-3">
                <input
                  type="text"
                  placeholder="enter name the Pharmaceutical"
                  className="w-full py-3 pl-7 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600 mb-5"
                />
                <input
                  type="text"
                  placeholder="enter The Instructions"
                  className="w-full py-3 pl-7 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                />
            </form>
            <div className="items-center gap-2 mt-3 sm:flex">
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
    ) : ''
  )
}

export default AddXRayPictures