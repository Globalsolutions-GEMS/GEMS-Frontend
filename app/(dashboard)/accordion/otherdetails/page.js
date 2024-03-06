"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

const OtherDetails = () => {
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
                    <Form.Label htmlFor="inputPassword5">
                      Board Verified
                    </Form.Label>
                    <Form.Check // prettier-ignore
                      type="checkbox"
                      id=""
                      label={
                        <>
                          Are you{" "}
                          <span className="text-danger">Board Verified</span> ?
                        </>
                      }
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="inputPassword5">Hostel</Form.Label>
                    <Form.Check // prettier-ignore
                      type="checkbox"
                      id=""
                      label={
                        <>
                          Do you stay in{" "}
                          <span className="text-danger">hostel</span> ?
                        </>
                      }
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="inputPassword5">Bus</Form.Label>
                    <Form.Check // prettier-ignore
                      type="checkbox"
                      id=""
                      label={
                        <>
                          Do you use the college{" "}
                          <span className="text-danger">bus</span> for travel ?
                        </>
                      }
                    />
                  </Col>
                </Row>
                <Row className="mb-3 mt-2">
                  <Col>
                    <span className="text-danger">*</span>
                    <Form.Label htmlFor="inputPassword5">
                      Caste Category
                    </Form.Label>
                    <Form.Control
                      type="password"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="inputPassword5">Sub Caste</Form.Label>
                    <Form.Control
                      type="password"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <span className="text-danger">*</span>
                    <Form.Label htmlFor="inputPassword5">Relegion</Form.Label>
                    <Form.Control
                      type="password"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                </Row>
                <Row className="mb-3 mt-2">
                  <Col>
                    <Form.Label htmlFor="inputPassword5">Handicap</Form.Label>
                    <Form.Control
                      type="password"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="inputPassword5">
                      Handicap Percentage
                    </Form.Label>
                    <Form.Control
                      type="password"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="inputPassword5">ID Proof</Form.Label>
                    <Form.Control
                      type="text"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Form.Label htmlFor="inputPassword5">
                      ID proof No.
                    </Form.Label>
                    <Form.Control
                      type="password"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="inputPassword5">
                      Total Family Number
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
                      Family Income
                    </Form.Label>
                    <Form.Control
                      type="password"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Form.Label htmlFor="inputPassword5">EID Number</Form.Label>
                    <Form.Control
                      type="password"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="inputPassword5">
                      Eligibiliy Number
                    </Form.Label>
                    <Form.Control
                      type="password"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="inputPassword5">Voter Id</Form.Label>
                    <Form.Control
                      type="password"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Form.Label htmlFor="inputPassword5">
                      Board / Council
                    </Form.Label>
                    <Form.Control
                      type="password"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="inputPassword5">
                      Anti Ragging Undertaking Reference No.
                    </Form.Label>
                    <Form.Control
                      type="password"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="inputPassword5">
                      Academic Bank Credit (ABC) No.
                    </Form.Label>
                    <Form.Control
                      type="password"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Form.Label htmlFor="inputPassword5">Remark</Form.Label>
                    <Form.Control
                      as="textarea"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      disabled
                    />
                  </Col>
                  <Col></Col>
                  <Col></Col>
                </Row>
                <Row className="align-items-center">
                  <Col className="d-flex align-items-center justify-content-center">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OtherDetails;
