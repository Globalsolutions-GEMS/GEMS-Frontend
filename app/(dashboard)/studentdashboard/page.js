"use client";
// import node module libraries
import { Fragment, } from "react";
import * as React from "react";
import { Container, Col, Row } from "react-bootstrap";

// import widget/custom components
import StudentChart from "../../../sub-components/studentdashboard/StudentChart";
import Notifications from "../../../sub-components/studentdashboard/Notifications";
import Attendance from "../../../sub-components/studentdashboard/Attendance";
import TodaysEvents from "../../../sub-components/studentdashboard/TodaysEvents"


const Home = () => {
  return (
    <Fragment>
      <Container fluid className="mt-n22 px-6 pt-18">
        <Row className="my-6">
          <Col xl={6} lg={12} md={12} xs={12} >
            <StudentChart />
          </Col>
          <Col xl={6} lg={12} md={12} xs={12}>
            <Notifications />
          </Col>
        </Row>

        <Row >
          <Col xl={7} lg={12} md={12} xs={12} >
            <Attendance/>
          </Col>

          <Col xl={5} lg={12} md={12} xs={12}>
            <TodaysEvents/>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default Home;
