//uselocation
import { useLocation, useNavigate } from "react-router";

//use states
import { useState } from "react";

//axios
import axios from "axios";

import { Link } from "react-router-dom";
const ResponseUpdate = () => {
  //navigator
  const navigate = useNavigate();
  //locator
  const location = useLocation();
  const ongoing = location.state.props;

  //states
  const [ERTUpdate, setERTUpdate] = useState();
  const [status, setStatus] = useState();
  //save data on submit
  const onUpdateThisEmergency = (e) => {
    //prevent reload
    e.preventDefault();
    const configuration = {
      method: "put",
      url: `http://localhost:8080/api/v1/emergencies/${ongoing.id}`,
      data: {
        ERTUpdate,
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
        <h2 className="text-center header p-4">
          Provide Update To This Emergency
        </h2>
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
                  <div>{ongoing.firstName}</div>
                  <div>{ongoing.lastName}</div>
                  <div>{ongoing.contact}</div>
                  <div>{ongoing.landmark}</div>
                  <div>{ongoing.emergency}</div>
                  <div>{ongoing.status}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2 className="text-center header p-4 ">RESPONDER NOTES</h2>
          <div className="d-flex justify-content-center text-center">
            <form onSubmit={(e) => onUpdateThisEmergency(e)}>
              <div className="fw-bold fs-4 m-2">
                <label htmlFor="ertupdate">Emergency Update </label>
                <textarea
                  required
                  className="form-control"
                  type="text"
                  cols="100"
                  rows="10"
                  name="ertupdate"
                  value={ERTUpdate}
                  placeholder=" Enter ERT/s Update"
                  onChange={(e) => setERTUpdate(e.target.value)}
                ></textarea>
                <label htmlFor="ert">STATUS UPDATE</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option>SELECT</option>
                  <option>pending</option>
                  <option>ongoing</option>
                  <option>false alarm</option>
                  <option>cancelled</option>
                  <option>closed</option>
                </select>
              </div>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResponseUpdate;
