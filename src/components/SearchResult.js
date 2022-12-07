
//axios
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {Link} from 'react-router-dom'
const SearchResult=(props)=>{
    const position = [16.402332, 120.596008];
    console.log("type of position");
    return(
        <>
            <tr>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
                <td>{props.contact}</td>
                <td>{props.emergency}</td>
                <td>{props.landmark}</td>
                <td>{props.emergencyUpdate}</td>
                <td>{props.ERT}</td>
                <td>{props.ERTUpdate}</td>
                <td>{props.status}</td>

                {/* MAPS */}
                <td>
          {/* send this data to the next linked page */}
          <Link to="/responseupdate" state={{ props }}>
            <button>UPDATE</button>
          </Link>

          {/* START OF MAP */}
          <button
            type="button"
            className="btn btn-primary my-1 mx-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            View Location
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Current Location
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <MapContainer
                    center={position}
                    zoom={14}
                    scrollWheelZoom={false}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                      <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </td>
            </tr>
        </>
    )
}

export default SearchResult;
