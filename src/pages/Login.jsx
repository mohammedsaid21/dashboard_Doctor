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

  // const accessToken2 = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2IiwianRpIjoiOTQ5N2Y0MzgwMTBlMWYyYmVlMjg2MGZiNTBiMWI2YTI5MDcxNWJkNTU1ODYyYzVkZDFjM2Y4OWExZjU4OWE3NDI2MTRmNmVkODZhNmMzYjEiLCJpYXQiOjE2NTExNzU2MjUuMDI0NjgxMDkxMzA4NTkzNzUsIm5iZiI6MTY1MTE3NTYyNS4wMjQ2ODQ5MDYwMDU4NTkzNzUsImV4cCI6MTY4MjcxMTYyNS4wMjExODk5MjgwNTQ4MDk1NzAzMTI1LCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.plL0R-J2REnfWMBBE8lExBxqSrrStI6HDI96VhwdWBh1nARtK1q5xEvAl5wK3Nc6c-pUA_weUQEm7sV-LdG7hM9-_udx9KHJR_YPxXUctcXIda0a-HiT_1IJ3oLn4ksHFJlu0CGUiAugYH8jcdCZmbGUN5hBRlE_aMeTOGpC_Ylqns6Uiwx_1HSJmpQvuEeI4OsxWgO-Ht__GdI1gTXfc0A6JfEJSw6e_YvCAQ0KFf3hjACJIve_MrlakSxCUax9V7-IqstJi1reJpjtBhYKei5iDUTtJ8oKTAvRDWtOh_992Tj-b3fftn_aJEG2mlJT3AqeShLcLxFu7l-Q5GceOab2AZ65TaiEt9zoD59AU-_AGHJVNVip7vCVBLM93_9bhk5gYPokEmWm6Eeugoyz6Wi1DiFYZlNfL6oToh2MPmtGouqoIIHb3g-cnI4HMWNn4hxbqriliEIy-zH93R3UiszshbeHDuMwBNPgKtXo1l46A7_o1RH3GeiNd9CipoyKniAeSOU9UijfaN_pZh8ljJuCiq7dn9454H6jEWthxvXkUbPf1I0_FH9rrsAxZTKZnigF5u3YXd6dRQm7wpibZyL7nsQAE5zFKSwXnAFlI5PY3vJ5WwHGfBD-vqb7JMg3mqPIqdqbsc9blmEs0WnTlpR20ANCwcKcnrE4m0v_SOU'

  // axios.interceptors.request.use(
  //   config => {
  //     config.headers.authorization = sessionStorage.getItem("user-info")
  //     return config
  //   },
  //   error => {
  //     return Promise.reject(error)
  //   }
  // )

  //  2058030

  const navigate = useNavigate()

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

    // const params  = new URLSearchParams()

    // const response = await axios.post("https://app.medical-clinic.tk/api/login", params, {
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlenceoded",
        
    //   }
    // })

    // console.log('response ' , response)
    
    // --------------------------------

    // await axios.post('https://app.medical-clinic.tk/api/login', { headers: { "Authorization": `Bearer ${sessionStorage.getItem('token')}` } })
    //   .then(res =>
    //     console.log(res.data))
    //   .catch((error) => 
    //       console.log(error)
    //       )

    // axios.get('https://app.medical-clinic.tk/api/login')

    // let item = { email, password };
    // let result = await fetch("https://app.medical-clinic.tk/api/login", {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': "application/json",
    //     "Accept": 'application/json'
    //   },
    //   body: JSON.stringify(item)
    // })
    // console.log(result)
    // result = await result.json()
    // sessionStorage.setItem("user-info", JSON.stringify(result))

    // if (JSON.parse(sessionStorage.getItem("user-info")).status === true) {
    //   dispatch(login(item))
    //   navigate('/')
    // }

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
                  <div className="flex items-center mt-4">
                    <input type="checkbox" name="remember" id="remember" className="mr-2" />
                    <label htmlFor="remember" className="text-sm text-grey-dark">Remember Me</label>
                  </div>
                  <div className="flex flex-col mt-8">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                      Login
                    </button>
                  </div>
                </form>
                <div className="text-center mt-4">
                  <a className="no-underline hover:underline text-blue-dark text-xs" href="{{ route('password.request') }}">
                    Forgot Your Password?
                  </a>
                </div>
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