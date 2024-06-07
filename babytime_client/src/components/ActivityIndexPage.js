import { useState, useEffect } from "react";
import { Activity, Sleep, Diaper, Formula } from "../requests";
import { Link } from "react-router-dom";
import { GiNightSleep, GiBabyBottle } from "react-icons/gi";
import { MdBabyChangingStation } from "react-icons/md";
import Stack from "react-bootstrap/Stack";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import CreateButton from "./CreateButton";
import moment from "moment";
import TimeAgo from "./TimeAgo";
import TimeAgo2 from "./TimeAgo2";
import AgoDiaper from "./AgoDiaper";
import AgoFormula from "./AgoFormula";
import AgoSleep from "./AgoSleep";

function ActivityIndexPage() {
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    Activity.index().then((data) => {
      setActivity(data);

      // console.log(activity)
      // console.log(activity[0])
    });
  }, []);

  const createdActivity = () => {
    Activity.create().then(() => {
      Activity.index().then((data) => {
        setActivity(data);
      });
    });
  };

  const createdSleep = () => {
    Sleep.create({
      title: "Sleep",
      duration: 30,
    }).then(() => {
      Activity.index().then((data) => {
        setActivity(data);
      });
    });
  };

  const createdDiaper = () => {
    Diaper.create({
      title: "Diaper",
    }).then(() => {
      Activity.index().then((data) => {
        setActivity(data);
      });
    });
  };

  const createdFormula = () => {
    Formula.create({
      title: "Formula",
      amount: 100,
    }).then(() => {
      Activity.index().then((data) => {
        setActivity(data);
      });
    });
  };

  if (activity.no === "no") {
    return (
      <div class="d-flex justify-content-center" style={{ marginTop: "20vh" }}>
        <button
          style={{
            fontSize: "xx-large",
            padding: "30px",
            paddingLeft: "50px",
            paddingRight: "50px",
          }}
          class="btn startTracking"
          onClick={() => {
            createdActivity();
          }}
        >
          Start Tracking
        </button>
      </div>
    );
  } else {
    let currentDate = new Date().toLocaleDateString();
    return (
      <>
        <CreateButton
          createdDiaper={createdDiaper}
          createdSleep={createdSleep}
          createdFormula={createdFormula}
        />

        <Container style={{ marginBottom: "2vh", marginTop: "2vh" }}>
          <Row
            className="justify-content-md-center"
            style={{ textAlign: "center" }}
          >
            <Col xs lg="3">
              {" "}
              {/* activity={activity} */}
              <AgoSleep activity={activity} />
            </Col>
            <Col xs lg="3">
              <AgoDiaper activity={activity} />
            </Col>
            <Col xs lg="3">
              <AgoFormula activity={activity} />
            </Col>
          </Row>
        </Container>
        {/* <TimeAgo activity={activity} />   */}

        <ul style={{ listStyleType: "none", marginRight: "40px" }}>
          <ListGroup>
            <div style={{ backgroundColor: "#c1e1df" }}>
              {moment(currentDate).format("dddd, MMMM Do YYYY")}
            </div>
            {activity.map((a, i) => {
              if (i > 0 && i < activity.length - 1) {
                let nDate = new Date(activity[i - 1].created_at);
                let tDate = new Date(a.created_at);
                if (nDate.toLocaleDateString() != tDate.toLocaleDateString()) {
                  if (a.title === "Diaper") {
                    let date = new Date(a.created_at);
                    return (
                      <>
                        <div style={{ backgroundColor: "#c1e1df" }}>
                          {moment(tDate).format("dddd, MMMM Do YYYY")}
                        </div>

                        <ListGroup.Item action variant="light" key={i}>
                          <Link
                            to={`/${a.title.toLowerCase()}/${a.id}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <div class="d-flex flex-row">
                              <div style={{ marginRight: "10px" }}>
                                {date.toLocaleString("en-US", {
                                  hour: "numeric",
                                  minute: "numeric",
                                  hour12: true,
                                })}
                              </div>
                              <div style={{ marginRight: "10px" }}>
                                <MdBabyChangingStation
                                  size={25}
                                  style={{
                                    fill: "#f0f8ff",
                                    backgroundColor: "#cf9180",
                                    borderRadius: "50%",
                                  }}
                                />
                              </div>
                              <div style={{ marginRight: "10px" }}>
                                <Link
                                  class="diaper"
                                  to={`/${a.title.toLowerCase()}/${a.id}`}
                                >
                                  {" "}
                                  {a.title}{" "}
                                </Link>
                              </div>
                              <div>
                                <small style={{ fontSize: "small" }}>
                                  {" "}
                                  {a.note}{" "}
                                </small>
                              </div>
                            </div>
                          </Link>
                        </ListGroup.Item>
                      </>
                    );
                  }
                  if (a.title === "Sleep") {
                    let date = new Date(a.created_at);
                    return (
                      <>
                        <div style={{ backgroundColor: "#c1e1df" }}>
                          {moment(tDate).format("dddd, MMMM Do YYYY")}
                        </div>
                        <ListGroup.Item action variant="light" key={i}>
                          <Link
                            to={`/${a.title.toLowerCase()}/${a.id}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <div class="d-flex flex-row">
                              <div style={{ marginRight: "10px" }}>
                                {date.toLocaleString("en-US", {
                                  hour: "numeric",
                                  minute: "numeric",
                                  hour12: true,
                                })}
                              </div>
                              <div style={{ marginRight: "10px" }}>
                                <GiNightSleep
                                  size={25}
                                  style={{
                                    fill: "#f0f8ff",
                                    backgroundColor: "#779ecb",
                                    borderRadius: "50%",
                                  }}
                                />
                              </div>
                              <div style={{ marginRight: "10px" }}>
                                <Link
                                  class="sleep"
                                  to={`/${a.title.toLowerCase()}/${a.id}`}
                                >
                                  {" "}
                                  {a.title} - {a.duration} mins{" "}
                                </Link>
                              </div>
                              <div>
                                <small style={{ fontSize: "small" }}>
                                  {" "}
                                  {a.note}{" "}
                                </small>
                              </div>
                            </div>
                          </Link>
                        </ListGroup.Item>
                      </>
                    );
                  }
                  if (a.title === "Formula") {
                    let date = new Date(a.created_at);
                    return (
                      <>
                        <div style={{ backgroundColor: "#c1e1df" }}>
                          {moment(tDate).format("dddd, MMMM Do YYYY")}
                        </div>
                        <ListGroup.Item action variant="light" key={i}>
                          <Link
                            to={`/${a.title.toLowerCase()}/${a.id}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <div class="d-flex flex-row">
                              <div style={{ marginRight: "10px" }}>
                                {date.toLocaleString("en-US", {
                                  hour: "numeric",
                                  minute: "numeric",
                                  hour12: true,
                                })}
                              </div>
                              <div style={{ marginRight: "10px" }}>
                                <GiBabyBottle
                                  size={25}
                                  style={{
                                    fill: "#f0f8ff",
                                    backgroundColor: "#a3c387",
                                    borderRadius: "50%",
                                  }}
                                />
                              </div>
                              <div style={{ marginRight: "10px" }}>
                                <Link
                                  class="formula"
                                  to={`/${a.title.toLowerCase()}/${a.id}`}
                                >
                                  {" "}
                                  {a.title} - {a.amount} ml{" "}
                                </Link>
                              </div>
                              <div>
                                <small style={{ fontSize: "small" }}>
                                  {" "}
                                  {a.note}{" "}
                                </small>
                              </div>
                            </div>
                          </Link>
                        </ListGroup.Item>
                      </>
                    );
                  }
                }
              }

              if (a.title === "Diaper") {
                let date = new Date(a.created_at);
                return (
                  <ListGroup.Item action variant="light" key={i}>
                    <Link
                      to={`/${a.title.toLowerCase()}/${a.id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <div class="d-flex flex-row">
                        <div style={{ marginRight: "10px" }}>
                          {date.toLocaleString("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                          })}
                        </div>
                        <div style={{ marginRight: "10px" }}>
                          <MdBabyChangingStation
                            size={25}
                            style={{
                              fill: "#f0f8ff",
                              backgroundColor: "#cf9180",
                              borderRadius: "50%",
                            }}
                          />
                        </div>
                        <div style={{ marginRight: "10px" }}>
                          <Link
                            class="diaper"
                            to={`/${a.title.toLowerCase()}/${a.id}`}
                          >
                            {" "}
                            {a.title}
                          </Link>
                        </div>
                        <div>
                          <small style={{ fontSize: "small" }}>
                            {" "}
                            {a.note}{" "}
                          </small>
                        </div>
                      </div>
                    </Link>
                  </ListGroup.Item>
                );
              }
              if (a.title === "Sleep") {
                let date = new Date(a.created_at);
                return (
                  <ListGroup.Item action variant="light" key={i}>
                    <Link
                      to={`/${a.title.toLowerCase()}/${a.id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <div class="d-flex flex-row">
                        <div style={{ marginRight: "10px" }}>
                          {date.toLocaleString("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                          })}
                        </div>
                        <div style={{ marginRight: "10px" }}>
                          <GiNightSleep
                            size={25}
                            style={{
                              fill: "#f0f8ff",
                              backgroundColor: "#779ecb",
                              borderRadius: "50%",
                            }}
                          />
                        </div>
                        <div style={{ marginRight: "10px" }}>
                          <Link
                            class="sleep"
                            to={`/${a.title.toLowerCase()}/${a.id}`}
                          >
                            {" "}
                            {a.title} - {a.duration} mins{" "}
                          </Link>
                        </div>
                        <div>
                          <small style={{ fontSize: "small" }}>
                            {" "}
                            {a.note}{" "}
                          </small>
                        </div>
                      </div>
                    </Link>
                  </ListGroup.Item>
                );
              }
              if (a.title === "Formula") {
                let date = new Date(a.created_at);
                return (
                  <ListGroup.Item action variant="light" key={i}>
                    <Link
                      to={`/${a.title.toLowerCase()}/${a.id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <div class="d-flex flex-row">
                        <div style={{ marginRight: "10px" }}>
                          {date.toLocaleString("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                          })}
                        </div>
                        <div style={{ marginRight: "10px" }}>
                          <GiBabyBottle
                            size={25}
                            style={{
                              fill: "#f0f8ff",
                              backgroundColor: "#a3c387",
                              borderRadius: "50%",
                            }}
                          />
                        </div>
                        <div style={{ marginRight: "10px" }}>
                          <Link
                            class="formula"
                            to={`/${a.title.toLowerCase()}/${a.id}`}
                          >
                            {" "}
                            {a.title} - {a.amount} ml{" "}
                          </Link>
                        </div>

                        <div>
                          <small style={{ fontSize: "small" }}>
                            {" "}
                            {a.note}{" "}
                          </small>
                        </div>
                      </div>
                    </Link>
                  </ListGroup.Item>
                );
              }
            })}
          </ListGroup>
        </ul>
      </>
    );
  }
}

export default ActivityIndexPage;
