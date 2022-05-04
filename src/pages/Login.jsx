import axios, { Axios } from 'axios'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { accessToken, tester } from '../env'
import { insertProduct, login } from '../redux/userSlice'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { userInfo } = useSelector(state => state.user)

  const dispatch = useDispatch()

  const submitInfo = async (e) => {
    e.preventDefault()

    axios.post("https://app.medical-clinic.tk/api/login", {
      email, password
    }).then(response => {
      console.log(response)
      if (!response.data.status) {
        console.log("Something Wronge")
      }
      else {
        dispatch(login(response.data.token))
        sessionStorage.setItem("token", JSON.stringify(response.data.token))
      }
    })

  }

  return (
    <div className="bg-blue-400 h-screen w-screen">
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0" >
          <div className="flex flex-col w-full md:w-1/2 p-4">
            <div className="flex flex-col flex-1 justify-center mb-8">
              <h1 className="text-4xl text-center font-thin">Welcome Back</h1>
              <div className="w-full mt-4">
                <form onSubmit={submitInfo} className="form-horizontal w-3/4 mx-auto" >
                  <div className="flex flex-col mt-4">
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" className="flex-grow h-8 px-2 border rounded border-grey-400" name="email" placeholder="Email" />
                  </div>
                  <div className="flex flex-col mt-4">
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="flex-grow h-8 px-2 rounded border border-grey-400" name="password" required placeholder="Password" />
                  </div>
                  <div className="flex flex-col mt-8">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className={`hidden md:block md:w-1/2 rounded-r-lg bgImage-login `}></div>
        </div>
      </div>
    </div>
  )
}

export default Login