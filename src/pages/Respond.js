//uselocation
import { useLocation, useNavigate } from "react-router";

//use states
import { useState } from "react";

//axios
import axios from "axios";

// Style
import "./Respond.css";

import { Link } from "react-router-dom";
const Respond = (props) => {
  //navigator
  const navigate = useNavigate();
  //locator
  const location = useLocation();
  const responded = location.state.props;
  console.log("data here", responded);
  //states
  const [emergencyUpdate, setEmergencyUpdate] = useState();
  const [status, setStatus] = useState("ongoing");
  const [ERT, setERT] = useState();
  //save data on submit
  const onRespondToEmergencyHandler = (e) => {
    //prevent reload
    e.preventDefault();
    console.log("ito ung status sa clicked button", status);
    console.log("ito ang emergencyUpdate", emergencyUpdate);
    console.log("ito ang ERT", ERT);
    const configuration = {
      method: "put",
      url: `http://localhost:8080/api/v1/emergencies/${responded.id}`,
      data: {
        emergencyUpdate,
        ERT,
        status,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        alert(result.data.status);
        navigate("/admin");
        // window.location.reload(false);
      })
      .catch((error) => {
        alert(error.response.data.status);
      });
  };

  return (
    <div className="respond-body">
      <div>
        <h2 className="text-center header p-4">RESPOND TO THIS EMERGENCY</h2>
        <div className="container-fluid">
          <table class="table">
            <tbody>
              <tr className="d-flex">
                <td className="fw-normal fs-4">
                  <div>First Name:</div>
                  <div>Last Name:</div>
                  <div>Contact:</div>
                  <div>LandMark:</div>
                  <div>Emergency:</div>
                  <div>Status:</div>
                </td>
                <td className="w-25 fw-bold fs-4">
                  <div>{responded.firstName}</div>
                  <div>{responded.lastName}</div>
                  <div>{responded.contact}</div>
                  <div>{responded.landmark}</div>
                  <div>{responded.emergency}</div>
                  <div>{responded.status}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-center header p-4">RESPONDER NOTES</h2>
        <div className="d-flex justify-content-center text-center">
          <form onSubmit={(e) => onRespondToEmergencyHandler(e)}>
            <div className="fw-bold fs-4 m-2">
              <label htmlFor="status">Status: </label>
            </div>
            <div className="m-2">
              <input
                className="text-center"
                required
                type="text"
                name="status"
                disabled
                value={status}
                placeholder=" status"
                onChange={(e) => setStatus("ongoing")}
              ></input>
            </div>
            <div className="fw-bold fs-4 m-2">
              <label htmlFor="emergencyupdate">Emergency Update </label>
            </div>
            <div className="m-2">
              <textarea
                className="form-control"
                required
                type="text"
                cols="100"
                rows="10"
                name="emergencyupdate"
                value={emergencyUpdate}
                placeholder=" Enter Emergency Update"
                onChange={(e) => setEmergencyUpdate(e.target.value)}
              ></textarea>
            </div>
            <div className="fw-bold fs-4 m-2">
              <label htmlFor="ert">Emergency Response Team</label>
            </div>
            <div className="m-2">
              <select value={ERT} onChange={(e) => setERT(e.target.value)}>
                <option>SELECT</option>
                <option>MDRRMC</option>
                <option>BFP</option>
                <option>PNP</option>
                <option>MEDICAL</option>
              </select>
            </div>
            <div className="m-4">
              <Link to="/admin">
                <button
                  type="submit"
                  className="btn btn-secondary btn-lg mx-2'"
                >
                  Back
                </button>
              </Link>
              <button type="submit" className="btn btn-danger btn-lg mx-2">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Respond;
