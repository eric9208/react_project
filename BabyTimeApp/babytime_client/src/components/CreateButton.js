import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { GiNightSleep, GiBabyBottle } from "react-icons/gi";
import { MdBabyChangingStation } from "react-icons/md";
import { useState, useEffect } from "react";
import moment from "moment";
import AgoDiaper from "./AgoDiaper";

function CreateButton({
  createdSleep,
  createdDiaper,
  createdFormula,
  activity,
}) {
  return (
    <Container
      style={{ marginBottom: "2vh", marginTop: "2vh", textAlign: "center" }}
    >
      <Row className="justify-content-md-center">
        <Col xs lg="3">
          <div class="d-flex flex-column" style={{ alignItems: "center" }}>
            <GiNightSleep
              class="iconSleep"
              onClick={() => {
                createdSleep();
              }}
              size={50}
              style={{
                fill: "#f0f8ff",
                backgroundColor: "#779ecb",
                borderRadius: "50%",
              }}
            />
            Sleep
          </div>
        </Col>

        <Col xs lg="3">
          <div class="d-flex flex-column" style={{ alignItems: "center" }}>
            <MdBabyChangingStation
              class="iconDiaper"
              onClick={() => {
                createdDiaper();
              }}
              size={50}
              style={{
                fill: "#f0f8ff",
                backgroundColor: "#cf9180",
                borderRadius: "50%",
              }}
            />
            Diaper
          </div>
        </Col>
        <Col xs lg="3">
          <div class="d-flex flex-column" style={{ alignItems: "center" }}>
            <GiBabyBottle
              class="iconFormula"
              onClick={() => {
                createdFormula();
              }}
              size={50}
              style={{
                fill: "#f0f8ff",
                backgroundColor: "#a3c387",
                borderRadius: "50%",
              }}
            />
            Formula
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateButton;
