import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeContent from '../components/HomeContent'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
// import List from './List'
import Login from './Login'
import Patients from './Patients'
import Pharmaceutical from './Pharmaceutical'
import Reservations from './Reservations'
import Users from './Users'
import XRayPictures from './XRayPictures'

const Home = () => {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <div className='homeContainer mt-32 flex'>
        <Sidebar />

        <div className='px-6 py-6 w-[90%]'>
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<Users />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/pharmaceutical" element={<Pharmaceutical />} />
            <Route path="/xRayPictures" element={<XRayPictures />} />
          </Routes>
        </div>

        {/* <HomeContent /> */}
      </div>

    </div>
  )
}

export default Home