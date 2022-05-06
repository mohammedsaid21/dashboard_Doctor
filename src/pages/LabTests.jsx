import React, { useEffect, useState } from 'react'
import axios from 'axios'

const LabTests = () => {
  
  const [dataUser, setDataUser] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  const [search, setSearch] = useState('')
  const [done, setDone] = useState(false)

  // For Post 
  const [showAddUser, setShowAddUser] = useState(false)


  const showDetails = (e) => {
    setUserInfo(e)
    setShowModal(true)
  }


  const deleteUser = (e) => {
    setShowModalDelete(true)
    setUserInfo(e)
  }

  const newUser = (e) => {
    setShowAddUser(true)
  }

  
useEffect(() => {
  // let isApiSubscribed = true;
  // const api = `https://app.medical-clinic.tk/api/users?search=${search}`;
  // const token = JSON.parse(sessionStorage.getItem('token'));
  // axios.get(api, { headers: { "Authorization": `Bearer ${token}` } })
  // .then(res => {
  //   if (isApiSubscribed) {
  //     setDataUser(res.data.data)
  //     setDone(false)
  //     }
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   });
  // return () => isApiSubscribed = false;
}, [done, search])

  return (
    <div>LabTests</div>

  )
}

export default LabTests