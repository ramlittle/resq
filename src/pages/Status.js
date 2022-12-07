import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import StatusList from "../components/StatusList";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Status = () => {
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
  //get all pending emergencies
  return (
    <>
      <Header />
      <div className="table__container">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Contact</th>
              <th scope="col">Emergency Details</th>
              <th scope="col">Landmark</th>
              <th scope="col">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {emergencies.map((list) => {
              return (
                <StatusList
                  firstName={list.firstName}
                  lastName={list.lastName}
                  contact={list.contact}
                  emergency={list.emergencyDetails}
                  landmark={list.landmarkDetails}
                  // timeStamp={list.timeStamp}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <Footer/>
    </>
  );
};

export default Status;
