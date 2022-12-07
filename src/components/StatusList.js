import React from "react";

const StatusList = (props) => {
  return (
    <>
      <tr>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.contact}</td>
        <td>{props.emergency}</td>
        <td>{props.landmark}</td>
        {/* <td>{props.timeStamp}</td> */}
        <td>
          <button>RESPOND</button>
        </td>
      </tr>
    </>
  );
};

export default StatusList;
