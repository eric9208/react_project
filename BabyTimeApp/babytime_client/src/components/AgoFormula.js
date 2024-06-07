import { useState, useEffect } from "react";
import moment from "moment";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Activity } from "../requests";

function AgoFormula({ activity }) {
  let a = activity.find((element) => element.title === "Formula");
  if (a) {
    let date = new Date(a.created_at);
    // console.log(date);
    let final = moment(date).fromNow();
    // console.log(final);
    return (
      <>
        <div class="d-flex flex-column">
          <small>Last Formula</small>
        </div>
        <div class="d-flex flex-column" style={{ color: "#a3c387" }}>
          {final}
        </div>
      </>
    );
  } else {
    return <div></div>;
  }
}

export default AgoFormula;
