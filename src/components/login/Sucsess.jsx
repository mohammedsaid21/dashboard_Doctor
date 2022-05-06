import React from 'react'

const Sucsess = ({ showModal, setShowModal }) => {

  const deleteUser = () => {
    setShowModal(false)
  }

  return (
    showModal ? (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="mt-3 sm:flex">
                <h4 className="text-lg font-medium text-gray-800">
                  You LogIn Sucsessfully
                  Welcome
                </h4>
            </div>
          </div>
        </div>
      </div>
    ) : ''
  )
}

export default Sucsess