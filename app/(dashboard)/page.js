"use client";
// import node module libraries
import { Fragment, useState } from "react";
import * as React from "react";
import Link from "next/link";
import { Container, Col, Row, Card } from "react-bootstrap";

// import widget/custom components
import { StatRightTopIcon } from "widgets";

// import sub components
import {
  ActiveProjects,
  Teams,
  TasksPerformance,
  GenderWisePosition,
  CasteCategoryWiseStrength,
} from "sub-components";

// import required data files
import ProjectsStatsData from "data/dashboard/ProjectsStatsData";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const Home = () => {
  return (
    <Fragment>
      <div className="bg-gray-700 pt-10 pb-21"></div>
      <Container fluid className="mt-n22 px-6">
        <Row>
          <Col lg={12} md={12} xs={12}>
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="mb-2 mb-lg-0">
                  <h3 className="mb-0  text-white">
                    Sinhgad Academy of Engineering Kondhwa Bk, Pune
                  </h3>
                </div>
                <div>
                  <Link href="./studentdashboard" className="btn btn-white">
                    Student Section
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          {ProjectsStatsData.map((item, index) => {
            return (
              <Col xl={3} lg={6} md={12} xs={12} className="mt-6" key={index}>
                <StatRightTopIcon info={item} />
              </Col>
            );
          })}
        </Row>

        {/* <ActiveProjects /> */}

        <Row className="my-6">
          <Col xl={4} lg={12} md={12} xs={12} className="mb-6 mb-xl-0">
            <TasksPerformance />
          </Col>
          <Col xl={4} lg={12} md={12} xs={12} className="mb-6 mb-xl-0">
            <GenderWisePosition />
          </Col>
          <Col xl={4} lg={12} md={12} xs={12} className="mb-6 mb-xl-0">
            <CasteCategoryWiseStrength />
          </Col>
        </Row>
        <Row className="my-6">
          <Col xl={8} lg={12} md={12} xs={12}>
            <Teams />
          </Col>
         
          <Col xl={4} lg={12} md={12} xs={12} className="mb-6 mb-xl-0"></Col>
        </Row>
        {/* <Row className="my-6">
          <Col sm={8}></Col>
          <Col sm={4}>
            <Card className="h-100">
              <Card.Header className="bg-white py-4">
                <h4 className="mb-0">Calendar </h4>
              </Card.Header>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
            </Card>
          </Col>
        </Row> */}
      </Container>
    </Fragment>
  );
};
export default Home;
