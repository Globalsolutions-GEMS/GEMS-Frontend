"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

const Passport = () => {
  const hasMounted = useMounted();

  return (
    <Container>
      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <div>
            {hasMounted && (
              <Form>
                <Row className="mb-3 mt-2">
                  <Col>
                    <Form.Label htmlFor="inputPassword5">Passport Number</Form.Label>
                    <Form.Control
                      type="text"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="inputPassword5">Passport Issue Place</Form.Label>
                    <Form.Control
                      type="text"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="inputPassword5">Passport Issue Date</Form.Label>
                    <Form.Control
                      type="text"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                </Row>
                <Row className="mb-3 mt-2">
                  <Col>
                    <Form.Label htmlFor="inputPassword5">Passport Expiry Date</Form.Label>
                    <Form.Control
                      type="text"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="inputPassword5">Visa Number</Form.Label>
                    <Form.Control
                      type="text"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="inputPassword5">Visa Issue Place</Form.Label>
                    <Form.Control
                      type="text"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label htmlFor="inputPassword5">
                      Visa Issue Date 
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="inputPassword5">
                      Visa Expiry Date 
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col></Col>
                </Row>
              </Form>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Passport;
