"use client";

// import node module libraries
import { Card, Col, Row, Container } from "react-bootstrap";

const cardBodyStyle = {
    maxHeight: "330px",
    overflowY: "auto",
    scrollbarWidth: "none", /* Firefox */
    msOverflowStyle: "none" /* IE and Edge */
  };

const Notifications = () => {
  return (
    <Container fluid className="p-6">
      <Row>
        <Col lg={12} md={12} sm={12}>
          <Card>
            <Card.Header className="bg-white  py-4">
              <h4 className="mb-0">Notice</h4>
            </Card.Header>
            <Card.Body style={cardBodyStyle}>
              <h4 className="fw-bold">Result Published :</h4>
              <p>
                Dear Student, your result of examination OCTOBER-2021 has been published.
              </p>
              <hr className="mb-5 mt-5" />
              <h4 className="fw-bold">Result Published :</h4>
              <p>
                Dear Student, your result of examination OCTOBER-2021 has been published.
              </p>
              <hr className="mb-5 mt-5" />
              <h4 className="fw-bold">Result Published :</h4>
              <p>
                Dear Student, your result of examination OCTOBER-2021 has been published.
              </p>
              <hr className="mb-5 mt-5" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Notifications;
