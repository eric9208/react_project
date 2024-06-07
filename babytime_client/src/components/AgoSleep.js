import { useState, useEffect } from "react";
import moment from "moment";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Activity } from "../requests";

function AgoSleep({ activity }) {
  let a = activity.find((element) => element.title === "Sleep");
  if (a) {
    let date = new Date(a.created_at);
    // console.log(date);
    let final = moment(date).fromNow();
    // console.log(final);
    return (
      <>
        <div class="d-flex flex-column">
          <small>Last Sleep</small>
        </div>
        <div class="d-flex flex-column" style={{ color: "#779ecb" }}>
          {final}
        </div>
      </>
    );
  } else {
    return <div></div>;
  }
}

export default AgoSleep;
