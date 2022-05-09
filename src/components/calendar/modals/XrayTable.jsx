import React from 'react'
import { BsPencil } from 'react-icons/bs'
import { RiDeleteBin5Line } from 'react-icons/ri'
import DeleteX from './DeleteX'

const XrayTable = ({showModalDelete, setShowModalDelete}) => {

  
  const addXRayPicture = () => {
    // setShowAddXray(true)
  }

  const editPatients = (e) => {
    // setShowModal(true)
    // setUserInfo(e)
  }

  const deletePatients = (e) => {
    setShowModalDelete(true)
    // setUserInfo(e)
  }

  const rows = [0,1].map((row, i) => (
    <tr className='hover:bg-sky-100 transition-all duration-200 ' key={i}>
      <td className="px-5 py-3 border-b border-gray-200 text-sm">
        <div className="flex items-center">
          <p className="text-gray-900 whitespace-no-wrap">
            {/* {row.name} */} Hello
          </p>
        </div>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 text-xl flex items-center justify-around ">
        <BsPencil className='cursor-pointer' onClick={() => editPatients(row)} />
        <RiDeleteBin5Line className='cursor-pointer' onClick={() => deletePatients(row)} />
      </td>
    </tr>
  ))


  return (
    <div>
    <div className="bg-white p-8 rounded-md ">
      <div className=" flex items-center justify-end pb-6">
        <div className=" flex justify-start">
          {/* <button className='btn' onClick={() => addXRayPicture()}>Add X-Ray Pictures</button>
          <AddXRayPictures showAddXray={showAddXray} setShowAddXray={setShowAddXray} setDone={setDone} /> */}
        <button className='btn' onClick={e => addXRayPicture(e)}>Add Xray</button>

        </div>
      </div>

      <div className='w-full mx-auto'>
        <div className=" px-4 py-5 overflow-x-auto w-[100%] mx-auto">
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
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Name	Position	Office	Age	Start date	Salary	Action */}

                {rows}

              </tbody>
            </table>
          </div>
        </div>
      </div>
      <DeleteX showModalDelete={showModalDelete}  setShowModalDelete={setShowModalDelete} />
      {/* <ShowInfo setDone={setDone} userInfo={userInfo} setUserInfo={setUserInfo} showModal={showModal} setShowModal={setShowModal} />
      <DeleteXray setDone={setDone} userInfo={userInfo} showModalDelete={showModalDelete} setShowModalDelete={setShowModalDelete} /> */}
    </div>
    {/* <ToastContainer /> */}
  </div>
  )
}

export default XrayTable