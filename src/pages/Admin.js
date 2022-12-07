import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

////download package
import { CSVLink } from 'react-csv';

//css
import "./Admin.css";

//images
import AdminPicture from "../assets/CMPD.png";
//components
import PendingList from "../components/PendingList.js";
import OngoingList from "../components/OngoingList";
import Status from "./Status";
import Search from "../components/Search.js";
const Admin = () => {
  // initial load of data
  const emergencies = useSelector((state) => state.emergencies);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/emergencies")
      .then((res) => {
        //   setData(res.data);
        //dispatch the data into reducer
        dispatch({
          type: "POPULATE_EMERGENCIES",
          payload: { emergencies: res.data },
        });
      })
      .catch((err) => {
        console.log("thrown error", err);
      });
  }, []); //initial load display only, if [] is not here, it will not stop displaying on console.

  console.log("dito bru", emergencies);
  //get all pending emergencies
  const pendingEmergencies = emergencies.filter((emergency) => {
    return emergency.status === "pending";
  });
  console.log("all pending", pendingEmergencies);
  //get all ongoing
  const ongoingEmergencies = emergencies.filter((emergency) => {
    return emergency.status === "ongoing";
  });
  //get all false alarm
  const falseEmergencies = emergencies.filter((emergency) => {
    return emergency.status === "false alarm";
  });
  console.log("false emergency", falseEmergencies);

  //get all cancelled
  const cancelledEmergencies = emergencies.filter((emergency) => {
    return emergency.status === "cancelled";
  });
  console.log("cancelled emergency", cancelledEmergencies);

  //get all closed
  const closedEmergencies = emergencies.filter((emergency) => {
    return emergency.status === "closed";
  });
  console.log("closed emergency", closedEmergencies);

  //search funtion
  function searchFunction(searchedFirstName) {
    let searchResult = emergencies.filter((emergency) => {
      // console.log('label',emergency.email)
      return emergency.firstName === searchedFirstName;
    });
    // console.log('result ng function sa app js',searchResult);
    return searchResult;
  }

  //states for menu
  const [showSearch, setShowSearch] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [showPending, setShowPending] = useState(false);
  const [showOngoing, setShowOngoing] = useState(false);
  const [showFalseAlarm, setShowFalseAlarm] = useState(false);
  const [showClosed, setShowClosed] = useState(false);
  const [showCancelled, setShowCancelled] = useState(false);

  //handlers
  const onHomeClickHandler = () => {
    //show home, close everything else
    setShowHome(true);
    setShowPending(false);
    setShowOngoing(false);
    setShowFalseAlarm(false);
    setShowClosed(false);
    setShowCancelled(false);
    setShowSearch(false);
  };
  const onPendingClickHandler = () => {
    //show pending, close  everything else
    setShowHome(false);
    setShowPending(true);
    setShowOngoing(false);
    setShowFalseAlarm(false);
    setShowClosed(false);
    setShowCancelled(false);
    setShowSearch(false);
  };
  const onOngoingClickHandler = () => {
    setShowHome(false);
    setShowPending(false);
    setShowOngoing(true);
    setShowFalseAlarm(false);
    setShowClosed(false);
    setShowCancelled(false);
    setShowSearch(false);
  };
  const onFalseAlarmClickHandler = () => {
    setShowHome(false);
    setShowPending(false);
    setShowOngoing(false);
    setShowFalseAlarm(true);
    setShowClosed(false);
    setShowCancelled(false);
    setShowSearch(false);
  };
  const onCloseClickHandler = () => {
    setShowHome(false);
    setShowPending(false);
    setShowOngoing(false);
    setShowFalseAlarm(false);
    setShowClosed(true);
    setShowCancelled(false);
    setShowSearch(false);
  };
  const onCancelledClickHandler = () => {
    setShowHome(false);
    setShowPending(false);
    setShowOngoing(false);
    setShowFalseAlarm(false);
    setShowClosed(false);
    setShowCancelled(true);
    setShowSearch(false);
  };
  const onSearchClickHandler = () => {
    setShowHome(false);
    setShowPending(false);
    setShowOngoing(false);
    setShowFalseAlarm(false);
    setShowClosed(false);
    setShowCancelled(false);
    setShowSearch(true);
  };


  //download headers
	const headers = [
		{ label: 'firstName', key: 'firstName' },
		{ label: 'lastName', key: 'lastName' },
		{ label: 'contact', key: 'contact' },
		{ label: 'emergency', key: 'emergency' },
		{ label: 'landmark', key: 'landmark' },
		{ label: 'emergency', key: 'emergency' },
		{ label: 'responseTeam', key: 'responseTeam' },
		{ label: 'responseTeamUpdate', key: 'responseTeamUpdate' },
	];

	//declare CSVLink
	const csvLink = {
		filename: 'emergencies.csv',
		headers: headers,
		data: emergencies,
	};

  return (
    <div className="admin-page">
      <div className="nav-container flex d-flex justify-content-center">
        <nav className="navbar navbar-expand-lg navbar-light d-flex">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <button
                className="nav-item nav-link active btn btn-secondary "
                type="button"
                onClick={onHomeClickHandler}
              >
                HOME
              </button>
            </li>
            <li>
              <button
                className="nav-item nav-link active btn btn-secondary"
                type="button"
                onClick={onPendingClickHandler}
              >
                PENDING
              </button>
            </li>
            <li>
              <button
                className="nav-item nav-link active btn btn-secondary"
                type="button"
                onClick={onOngoingClickHandler}
              >
                ONGOING
              </button>
            </li>
            <li>
              <button
                className="nav-item nav-link active btn btn-secondary"
                type="button"
                onClick={onFalseAlarmClickHandler}
              >
                FALSE ALARM
              </button>
            </li>
            <li>
              <button
                className="nav-item nav-link active btn btn-secondary"
                type="button"
                onClick={onCloseClickHandler}
              >
                CLOSED
              </button>
            </li>
            <li>
              <button
                className="nav-item nav-link active btn btn-secondary"
                type="button"
                onClick={onCancelledClickHandler}
              >
                CANCELLED
              </button>
            </li>
            <li>
              <button
                className="nav-item nav-link active btn btn-secondary"
                type="button"
                onClick={onSearchClickHandler}
              >
                SEARCH
              </button>
              </li>
              <li>
						  <CSVLink {...csvLink}>
							<button
              className='nav-item nav-link active btn btn-secondary'
              >DOWNLOAD</button>
						  </CSVLink>
            </li>
            
          </ul>
        </nav>
      </div>

      {/* ADMIN DETAIL CONTAINER */}
      {showHome && (
        <div className="admin-section-container d-flex justify-content-center align-items-center">
          <div className="admin-picture-container">
            <img src={AdminPicture} alt="" />
          </div>
          <div className="admin-information-container fs-5 fw-bold ms-2">
            <div className="admin-sub-information-container">
              <p>
                Name: <span>Carl Martin Dayos</span>
              </p>
            </div>
            <div className="admin-sub-information-container">
              <p>
                Email: <span>responder@resq.com</span>
              </p>
            </div>
            <div className="admin-sub-information-container">
              <p>
                Role: <span>Responder</span>
              </p>
            </div>
          </div>
          {/* DOWNLOAD FEATURE HERE */}

        </div>
      )}
      {/* EMERGENCY SUMMARY */}
      <section className="cards-container">
        {/* PENDING EMERGENCIES */}
        <div className="cards">
          <div className="one">PENDING</div>
          <div className="two">{pendingEmergencies.length}</div>
        </div>
        {/* ongoing EMERGENCIES */}
        <div className="cards">
          <div className="one">ONGOING</div>
          <div className="two">{ongoingEmergencies.length}</div>
        </div>
        {/* FALSE EMERGENCIES */}
        <div className="cards">
          <div className="one">FALSE ALARM</div>
          <div className="two">{falseEmergencies.length}</div>
        </div>
        {/* CLOSED EMERGENCIES */}
        <div className="cards">
          <div className="one">CLOSED</div>
          <div className="two">{closedEmergencies.length}</div>
        </div>
        {/* CANCELLED EMERGENCIES */}
        <div className="cards">
          <div className="one">CANCELLED</div>
          <div className="two">{cancelledEmergencies.length}</div>
        </div>
      </section>

      {/* search feature */}
      {showSearch && (
        <div className="search-container">
          <Search searchFunction={searchFunction} />
        </div>
      )}

      {/* DATA SECTION */}

      {/* PENDING LIST */}
      {showPending && (
        <section className="table-container bg-white">
          <table className="border">
            <tr>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>CONTACT</th>
              <th>EMERGENCY</th>
              <th>LANDMARK</th>
              {/* <th>Time Stamp</th> */}
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
            {
              // pendingEmergencies.map((list) => {
              pendingEmergencies
                .slice(0)
                .reverse()
                .map((list) => {
                  return (
                    <PendingList
                      key={list._id}
                      id={list._id}
                      firstName={list.firstName}
                      lastName={list.lastName}
                      contact={list.contact}
                      emergency={list.emergencyDetails}
                      landmark={list.landmarkDetails}
                      status={list.status}
                      latitude={list.latitude}
                      longitude={list.longitude}
                      // timeStamp={list.timeStamp}
                    />
                  );
                })
            }
          </table>
        </section>
      )}
      {/* ONGOING LIST */}
      {showOngoing && (
        <section className="table-container bg-white">
          <table border="1">
            <tr>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>CONTACT</th>
              <th>EMERGENCY</th>
              <th>LANDMARK</th>
              <th>EMERGENCY</th>
              <th>Emergency Response Team</th>
              <th>Emergency Team's Update</th>
              {/* <th>Time Stamp</th> */}
              <th>ACTION</th>
            </tr>
            {
              // ongoingEmergencies.map((list) => {
              ongoingEmergencies
                .slice(0)
                .reverse()
                .map((list) => {
                  return (
                    <OngoingList
                      key={list._id}
                      id={list._id}
                      firstName={list.firstName}
                      lastName={list.lastName}
                      contact={list.contact}
                      emergency={list.emergencyDetails}
                      landmark={list.landmarkDetails}
                      emergencyUpdate={list.emergencyUpdate}
                      ERT={list.ERT}
                      ERTUpdate={list.ERTUpdate}
                      // timeStamp={list.timeStamp}
                    />
                  );
                })
            }
          </table>
        </section>
      )}

      {/* FALSE ALARM LIST */}
      {showFalseAlarm && (
        <section className="table-container bg-white">
          <table border="1">
            <tr>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>CONTACT</th>
              <th>EMERGENCY</th>
              <th>LANDMARK</th>
              <th>EMERGENCY</th>
              <th>Emergency Response Team</th>
              <th>Emergency Team's Update</th>
              {/* <th>Time Stamp</th> */}
              <th>ACTION</th>
            </tr>
            {
              // falseEmergencies.map((list) => {
              falseEmergencies
                .slice(0)
                .reverse()
                .map((list) => {
                  return (
                    <OngoingList
                      key={list._id}
                      id={list._id}
                      firstName={list.firstName}
                      lastName={list.lastName}
                      contact={list.contact}
                      emergency={list.emergencyDetails}
                      landmark={list.landmarkDetails}
                      emergencyUpdate={list.emergencyUpdate}
                      ERT={list.ERT}
                      ERTUpdate={list.ERTUpdate}
                      // timeStamp={list.timeStamp}
                    />
                  );
                })
            }
          </table>
        </section>
      )}

      {/* CLOSED LIST */}
      {showClosed && (
        <section className="table-container bg-white">
          <table border="1">
            <tr>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>CONTACT</th>
              <th>EMERGENCY</th>
              <th>LANDMARK</th>
              <th>EMERGENCY</th>
              <th>Emergency Response Team</th>
              <th>Emergency Team's Update</th>
              {/* <th>Time Stamp</th> */}
              <th>ACTION</th>
            </tr>
            {
              // closedEmergencies.map((list) => {
              closedEmergencies
                .slice(0)
                .reverse()
                .map((list) => {
                  return (
                    <OngoingList
                      key={list._id}
                      id={list._id}
                      firstName={list.firstName}
                      lastName={list.lastName}
                      contact={list.contact}
                      emergency={list.emergencyDetails}
                      landmark={list.landmarkDetails}
                      emergencyUpdate={list.emergencyUpdate}
                      ERT={list.ERT}
                      ERTUpdate={list.ERTUpdate}
                      // timeStamp={list.timeStamp}
                    />
                  );
                })
            }
          </table>
        </section>
      )}

      {/* Cancelled LIST */}
      {showCancelled && (
        <section className="table-container bg-white">
          <table border="1">
            <tr>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>CONTACT</th>
              <th>EMERGENCY</th>
              <th>LANDMARK</th>
              <th>EMERGENCY</th>
              <th>Emergency Response Team</th>
              <th>Emergency Team's Update</th>
              {/* <th>Time Stamp</th> */}
              <th>ACTION</th>
            </tr>
            {
              // cancelledEmergencies.map((list) => {
              cancelledEmergencies
                .slice(0)
                .reverse()
                .map((list) => {
                  return (
                    <OngoingList
                      key={list._id}
                      id={list._id}
                      firstName={list.firstName}
                      lastName={list.lastName}
                      contact={list.contact}
                      emergency={list.emergencyDetails}
                      landmark={list.landmarkDetails}
                      emergencyUpdate={list.emergencyUpdate}
                      ERT={list.ERT}
                      ERTUpdate={list.ERTUpdate}
                      // timeStamp={list.timeStamp}
                    />
                  );
                })
            }
          </table>
        </section>
      )}
    </div>
  );
};

export default Admin;
