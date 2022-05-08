import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getOneElement } from "../../redux/userSlice";
import DetailsCalender from "./DetailsCalender";
import DropMenu from "./DropMenu";
import { Datepicker } from "./picker/DatePicker";
import ShowModalAdd from "./ShowModalAdd";
import { toast, ToastContainer } from "react-toastify";

const Calender = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let date = new Date();
  const [years, setYears] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth() + 1);

  const [thisMonth, setThisMonth] = useState([]);

  const [showModalAdd, setShowModalAdd] = useState(false);
  const [done, setDone] = useState(false);
  const [modalDetails, setModalDetails] = useState(false);
  const [details, setDetails] = useState({});

  const [showId, setShowId] = useState();
  const [user_id, setUser_id] = useState();
  const [idRes, setIdRes] = useState();
  const [deleteDone, setDeleteDone] = useState(false);

  useEffect(() => {
    if (deleteDone) {
      toast.error("You Delete IT Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setDeleteDone(false);
  }, [deleteDone]);

  useEffect(() => {
    let isApiSubscribed = true;

    console.log("year: ", years, " month: ", month);

    const api = `https://app.medical-clinic.tk/api/reservations/filter?year=${years}&month=${month}`;
    // `https://app.medical-clinic.tk/api/reservations/currentmonth`;
    const token = JSON.parse(sessionStorage.getItem("token"));
    axios
      .get(api, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        if (isApiSubscribed) {
          setThisMonth(res.data.data);
          setDone(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return () => (isApiSubscribed = false);
  }, [done, years, month]);

  const showModal = () => {
    setShowModalAdd(true);
  };

  const dispatch = useDispatch();

  const showDetails = (e) => {
    //
    const api = `https://app.medical-clinic.tk/api/reservations/${e.id}/show`;
    const token = JSON.parse(sessionStorage.getItem("token"));

    axios
      .get(api, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        console.log(res.data.reservation);
        setIdRes(res.data.reservation.id);
        setDetails(res.data.reservation);
        setDone(false);
      })
      .catch((error) => {
        console.log(error);
      });

    setModalDetails(true);
  };

  const handleMonth = (e) => {
    setMonth(e);
  };

  const styled =
    " text-[11px] inline-block w-[4 0%] px-2 py-1 rounded-xl cursor-pointer transition-all duration-300";

  const styled_Month =
    "bg-s ky-200 px-3 py-2 rounded-lg w-1/12 ml-2 text-sm transition-all hover:bg-blue-400 hover:text-white shadow border flex items-center justify-center";

  return (
    <div>
      <div className="mb-4 w-full flex justify-between items-center px-2">
        <DropMenu className="w-20" setYears={setYears} />
        <button onClick={() => showModal()} className="btn">
          Add New Reservation
        </button>
        {/* <Datepicker /> */}
      </div>
      <header className="w-[100%] flex items-center justify-between mb-10">
        {months.map((mont, i) => (
          <button
            onClick={() => handleMonth(i + 1)}
            className={styled_Month}
            key={i}
          >
            {mont}
          </button>
        ))}
      </header>
      <main className="py-2 w-[100%] flex flex-wrap mx-auto">
        {thisMonth.map((object, i) => (
          <div
            key={i}
            className="w-1/3 md:w-1/6 md:w- [14.24%] h-36 flex flex-col justify- items-center border-2 border-gray-300 border-r-0 mb-2"
          >
            <div className="flex items-center justify-start w-full text-[#7180a1] font-bold mb-2 bg-gray-200 py-1 px-2">
              <h2 className="w-[20%]">{object.day}</h2>
              <h3 className="w-[80%]">{object.name}</h3>
            </div>
            {/* #e2e8f0 */}
            {object.reservations.map((task, id) => (
              <ul key={id} className="w-full px-2">
                <li
                  className={`bg-blue-200 hover:bg-blue-300  ${styled}`}
                  onClick={() => showDetails(task)}
                >
                  {task.start_time}
                </li>
                <li
                  className={`bg-red-300 hover:bg-red-400 ${styled}`}
                  onClick={() => showDetails(task)}
                >
                  {task.end_time}
                </li>
                {task.customer_id}
              </ul>
            ))}
          </div>
        ))}
      </main>
      <ShowModalAdd
        showId={showId}
        setShowId={setShowId}
        showModalAdd={showModalAdd}
        setShowModalAdd={setShowModalAdd}
        setDone={setDone}
      />
      <DetailsCalender
        setDetails={setDetails}
        details={details}
        setModalDetails={setModalDetails}
        modalDetails={modalDetails}
        setDone={setDone}
        idRes={idRes} setDeleteDone={setDeleteDone}
      />
      <ToastContainer />
    </div>
  );
};

export default Calender;
