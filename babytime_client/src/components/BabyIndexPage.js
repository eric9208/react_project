import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Baby } from "../requests";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import babyPic from "../401.jpg";
import noBaby from "../448.jpg";
import * as moment from "moment";

function BabyIndexPage() {
  const [baby, setBaby] = useState({});

  function ms(t) {
    let year, month, day, hour, minute, second;

    second = Math.floor(t / 1000);
    minute = Math.floor(second / 60);
    // second = second % 60;
    hour = Math.floor(minute / 60);
    // minute = minute % 60;
    day = Math.floor(hour / 24) + 4;
    // hour = hour % 24;
    month = Math.floor(day / 30);
    day = day % 30;
    year = Math.floor(month / 12);
    month = month % 12;
    if (year === 0) {
      return `${Math.abs(month)} months ${Math.abs(day)} days`;
    } else {
      return `${Math.abs(year)} years ${Math.abs(month)} months ${Math.abs(
        day
      )} days`;
    }
  }

  useEffect(() => {
    Baby.index().then((baby) => {
      setBaby(baby);
    });
  }, []);

  if (baby.no === "no") {
    return (
      <div class="d-flex justify-content-center" style={{ marginTop: "5vh" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={noBaby} />
          <Card.Body>
            <Card.Title>No Baby Profile</Card.Title>
            <Card.Text>
              Please create your baby's profile by following the link below
            </Card.Text>
            <Link to={`/baby/new`} style={{ textDecoration: "none" }}>
              Create Baby Profile
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  } else {
    var duration2 = moment.duration(
      moment(baby.dob).diff(moment(), "milliseconds")
    );
    // console.log(duration2);
    let duration = moment.duration(moment().diff(baby.dob));
    return (
      <div class="d-flex justify-content-center" style={{ marginTop: "5vh" }}>
        <Card style={{ width: "18rem", textAlign: "center" }}>
          <Card.Img variant="top" src={babyPic} />
          <Card.Body>
            <Card.Title>
              {baby.first_name} {baby.last_name}
            </Card.Title>
            <Card.Text>
              <p>Birth Date: {baby.dob}</p>
              <p>Age: {duration.humanize()} old </p>
            </Card.Text>
            <Link to={`/baby/${baby.id}`}>Edit Baby Profile</Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default BabyIndexPage;
