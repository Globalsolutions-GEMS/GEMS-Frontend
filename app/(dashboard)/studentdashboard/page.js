"use client";
// import node module libraries
import { Fragment, useState } from "react";
import * as React from "react";
import Link from "next/link";
import { Container, Col, Row, Card } from "react-bootstrap";

// import widget/custom components
import { StatRightTopIcon } from "widgets";
import StudentChart from "../../../sub-components/studentdashboard/StudentChart";
import Notifications from "../../../sub-components/studentdashboard/Notifications";
import Attendance from "../../../sub-components/studentdashboard/Attendance";
import TodaysEvents from "../../../sub-components/studentdashboard/TodaysEvents"

// import required data files
import ProjectsStatsData from "data/dashboard/ProjectsStatsData";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

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
