import React from "react";

const BabyDetails = ({ first_name, last_name, dob }) => {
  return (
    <div class="container">
      <div class="row" style={{ marginBottom: "2vh" }}>
        <div class="col-sm">
          <h3> My Baby Profile </h3>
        </div>
        <div class="col-sm"></div>
      </div>

      <div class="row">
        <div class="col-sm">
          <p> Birth Date: {dob} </p>
        </div>
        <div class="col-sm">
          <p> First Name: {first_name} </p>
          <p> Last Name: {last_name}</p>
        </div>
      </div>
    </div>
  );
};

export default BabyDetails;
