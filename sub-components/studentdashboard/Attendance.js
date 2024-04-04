"use client";

// import node module libraries
import { Card, Col, Row, Container } from "react-bootstrap";

const cardBodyStyle = {
  maxHeight: "330px",
  overflowY: "auto",
  scrollbarWidth: "none" /* Firefox */,
  msOverflowStyle: "none" /* IE and Edge */,
};

const Attendance = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <Card>
            <Card.Header className="bg-white  py-4">
              <h4 className="mb-0">Attendance</h4>
            </Card.Header>
            <Card.Body ></Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Attendance;
