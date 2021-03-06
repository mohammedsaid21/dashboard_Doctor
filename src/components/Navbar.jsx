import { Link } from "react-router-dom";
import { MdLanguage } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsInbox } from "react-icons/bs";
import { VscSignOut } from "react-icons/vsc";
import { IoPersonOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const Navbar = ({setStaticValue}) => {

  const handelToggle = () => {
    const navMobile = document.querySelector(".navMobile");
    const liMobile = document.querySelectorAll(".navMobile li");

    navMobile.classList.toggle("hidden");

    for (const box of liMobile) {
      box.classList.add("nav-mobile");
    }
  };

  const sideba = document.querySelector(".sidebar");

  const hideMenu = () => {
    sideba.classList.toggle('hidden')
    if(sideba.classList.contains('hidden')) setStaticValue('w-[150%] mx-auto')
    else setStaticValue('w-[82%]')
  };

  const dispatch = useDispatch();

  const logout_Acount = () => {
    dispatch(logout());
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const arabic = () => {
    document.dir = 'rtl'
  }
  const english = () => {
    document.dir = 'ltr'
  }

  return (
    <>
      <nav
        className="px-2 sm:px-4 py-2 bg-[#0e1726] fixed top-0 left-0 w-full z-50 "
        id="nav"
      >
        <div className="container w-[98%] mx-auto ">
          <div className="flex justify-between">
            <div className="w-3/5 flex items-center">
              <Link
                className="w -2/3 text-2xl font-bold text-gray-200 flex items-center justify-between cursor-pointer"
                to="/"
              >
                <img
                  className="rounded-xl mr-2"
                  src="https://via.placeholder.com/40"
                  alt=""
                />
                <span>CORK</span>
              </Link>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="w-1/2 ml-12 "
              >
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full py-3 pl-12 pr-4 text-gray-300 border-0 rounded-md outline-none bg-[#192130] "
                  />
                </div>
              </form>
            </div>
            <div className="flex justify-end items-center text-white w-1/5 ">
              {/* <div className="text-2xl w-12 lang cursor-pointer relative">
              
              <ul className="before-lan px-4">
                <li className="transition-all hover:text-blue-500" onClick={() => document.dir = 'rtl'}>????????</li>
                <li className="transition-all hover:text-blue-500" onClick={() => document.dir = 'lrt'}>
                  English
                </li>
              </ul>
            </div> */}

              <div>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <MdLanguage className="text-white text-2xl" />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={english}>English</MenuItem>
                  <MenuItem onClick={arabic}>????????</MenuItem>
                </Menu>
                {/*  */}
              </div>

              <div className="text-2xl w-8 lang cursor-pointer relative">
                <AiOutlineMail className="w-10 cursor-pointer" />
                <ul className="before- lan px-4 before-lan2">
                  <li className="transition-all hover:text-blue-500 flex justify-between items-center list-name">
                    <p>MS</p>
                    <p>Mohammed Said</p>
                  </li>
                  <li className="transition-all hover:text-blue-500 flex justify-between items-center list-name">
                    <p>MS</p>
                    <p>Mohammed Said</p>
                  </li>
                </ul>
              </div>

              <IoIosNotificationsOutline className="text-2xl w-10 ml-3 cursor-pointer" />

              <div>
                <Button
                  id="basic-button"
                  aria-controls={open2 ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open2 ? "true" : undefined}
                  onClick={handleClick2}
                >
                  <img
                    className="rounded-xl cursor-pointer ml-3"
                    src="https://via.placeholder.com/30"
                    alt=""
                  />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl2}
                  open={open2}
                  onClose={handleClose2}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={logout_Acount}>Logout</MenuItem>
                </Menu>
              </div>

              {/* <div className="w-8 lang relative">
              <img
                className="rounded-xl cursor-pointer ml-3"
                src="https://via.placeholder.com/30"
                alt=""
              />
              <ul className="before-lan before-lan3 px-4 w-40">
                <li className="transition-all hover:text-blue-500 flex items-center justify-start text-md  cursor-pointer mb-4">
                  <IoPersonOutline className="text-xl mr-4" />
                  Profile
                </li>
                <li className="transition-all hover:text-blue-500 flex items-center justify-start text-md  cursor-pointer mb-4">
                  <BsInbox className="text-xl mr-4" />
                  Inbox
                </li>
                <li
                  onClick={() => logout_Acount()}
                  className="transition-all hover:text-blue-500 flex items-center justify-start text-md  cursor-pointer mb-4"
                >
                  <VscSignOut className="text-xl mr-4" />
                  Sign Out
                </li>
              </ul>
            </div> */}
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-gray-200 w-full fixed px-2 sm:px-4 py-4 top-16 left-0 z-40">
        <div className="flex items-center container w-[96%] mx-auto ">
          <GiHamburgerMenu
            onClick={() => hideMenu()}
            className="text-2xl mr-4 text-[#4d4d4d] cursor-pointer"
          />
          <h2 className="text-lg text-gray-500">Data Tables /</h2>
        </div>
      </div>
    </>
  );
};

export default Navbar;
