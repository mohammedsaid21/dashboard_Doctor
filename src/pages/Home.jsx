import { useEffect } from 'react'
import React, { useRef } from 'react'
import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
import HomeContent from '../components/HomeContent'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Expenses from './Expenses'
import LabTests from './LabTests'
import Login from './Login'
import Patients from './Patients'
import Pharmaceutical from './Pharmaceutical'
import Reservations from './Reservations'
import Users from './Users'
import XRayPictures from './XRayPictures'

const Home = ({ completed, setcompleted }) => {

  useEffect(() => {
    setcompleted(false)
  }, [setcompleted])

  return (
    <>
      {
        // completed ?
        //   <>
        //     <div className='home'>
        //       <div className="loading-container">
        //         <div className="item"></div>
        //         <div className="item"></div>
        //         <div className="item"></div>
        //         <div className="item"></div>
        //       </div>
        //     </div>
        //   </>
        //   :
        (
          <div className='lg:container px-2 lg:px-0 mx-auto z-0'>
            <Navbar />
            <div className='homeContainer mt-32 flex'>
              <Sidebar setcompleted={setcompleted} />

              <div className='lg:px-6 px-3 py-6 lg:w-[90%] w-[82%] '>
                <Routes>
                  <Route path="/" element={<HomeContent />} />
                  <Route path="/user" element={<Users />} />
                  <Route path="/patients" element={<Patients />} />
                  <Route path="/reservations" element={<Reservations />} />
                  <Route path="/pharmaceutical" element={<Pharmaceutical />} />
                  <Route path="/labTests" element={<LabTests />} />
                  <Route path="/xRayPictures" element={<XRayPictures />} />
                  <Route path="/expenses" element={<Expenses />} />
                </Routes>
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default Home

