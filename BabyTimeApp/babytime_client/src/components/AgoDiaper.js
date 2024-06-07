import { useState, useEffect } from "react";
import moment from "moment";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Activity } from "../requests";

function AgoDiaper({ activity }) {
  let a = activity.find((element) => element.title === "Diaper");
  if (a) {
    let date = new Date(a.created_at);
    // console.log(date);
    let final = moment(date).fromNow();
    // console.log(final);
    return (
      <>
        <div class="d-flex flex-column">
          <small>Last Diaper</small>
        </div>
        <div class="d-flex flex-column" style={{ color: "#cf9180" }}>
          {final}
        </div>
      </>
    );
  } else {
    return <div></div>;
  }
}

export default AgoDiaper;
