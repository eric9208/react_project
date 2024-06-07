import { Component } from "react";
import { Baby, Product } from "../requests";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BabyEditForm = (props) => {
  // console.log("asdasdasd");
  // console.log(props);
  console.log(props.baby);

  // useEffect(() => {
  //   setProduct(props.product)

  // }, [])

  // console.log(product);

  const getDataAndSubmit = (event) => {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    props.submitForm({
      first_name: fd.get("first_name"),
      last_name: fd.get("last_name"),
      dob: fd.get("dob"),
      created_at: new Date(),
    });
    event.currentTarget.reset();
  };
  return (
    <div style={{ marginLeft: "25vw", textAlign: "center", width: "100vh" }}>
      <form onSubmit={getDataAndSubmit} style={{ marginTop: "5vh" }}>
        <div class="row mb-3">
          <label htmlFor="first_name" class="col-sm-2 col-form-label">
            First Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              name="first_name"
              class="form-control"
              defaultValue={props.baby.first_name}
            />
          </div>
        </div>
        <div class="row mb-3">
          <label htmlFor="last_name" class="col-sm-2 col-form-label">
            Last Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              name="last_name"
              class="form-control"
              defaultValue={props.baby.last_name}
            />
          </div>
        </div>
        <div class="row mb-3">
          <label htmlFor="dob" class="col-sm-2 col-form-label">
            Date of birth
          </label>
          <div class="col-sm-10">
            <input
              type="date"
              name="dob"
              class="form-control"
              defaultValue={props.baby.dob}
            />
          </div>
        </div>
        <div>
          <input
            type="submit"
            value="Update Baby Profile"
            className="btn babyButton"
            style={{
              float: "right",
              width: "20vw",
              backgroundColor: "#6495ed",
            }}
          />
        </div>
      </form>
    </div>
  );
};
export default BabyEditForm;
