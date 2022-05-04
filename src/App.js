import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {

  const [userInfo4 , setUserInfo4] = useState('')
  const userInfo10 = useSelector(state => state.user.userInfo)
  const [completed, setcompleted] = useState(false);

  useEffect(() => {
    setUserInfo4(userInfo10)
    setTimeout(() => {
      setcompleted(true);
    }, 1000);
  }, [userInfo10])

  return (
    <>
      {
        userInfo4 ? <Home completed={completed} setcompleted={setcompleted} /> : <Login />
      }

      {/* <Routes> */}
      {/* <Route path='/' element={<Home />} /> */}
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route index element={<Home />}> */}
      {/* <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<List />} />
          </Route> */}
      {/* </Route> */}
      {/* </Routes> */}
    </>
  );
}

export default App;
