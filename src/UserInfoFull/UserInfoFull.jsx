import React from "react";

const UserInfoFull = ({ additionalInfo }) => {
  return (
    <ul>
      {additionalInfo.map(data => {
        <li>{data.first}</li>
      })}
    </ul>
  )
}

export default UserInfoFull;
