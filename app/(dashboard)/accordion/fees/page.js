"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container, Table } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

const Fees = () => {
  const hasMounted = useMounted();

  return (
    <Container>
      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <div>
            {hasMounted && (
              <Form>
                <Card className="mb-5">
                  <Card.Body>
                    <PageHeading heading="Admission Fees Details" />
                    <Row className="mb-3 ">
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>
                              <b>Course</b>
                            </th>
                            <th>
                              <b>Applicable Amount</b>
                            </th>
                            <th>
                              <b>Paid</b>
                            </th>
                            <th>
                              <b>Adjusted</b>
                            </th>
                            <th>
                              <b>Excess</b>
                            </th>
                            <th>
                              <b>Refund</b>
                            </th>
                            <th>
                              <b>ConAcademic Year</b>
                            </th>
                            <th>
                              <b>Total</b>
                            </th>
                          </tr>
                        </thead>
                      </Table>
                    </Row>
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Body>
                    <PageHeading heading="Receipt" />

                    <Row className="mb-3 mt-2">
                      <Col sm={3}>
                      </Col>
                      <Col sm={6}>
                     
                        <Form.Label> <span className="text-danger">*</span>Receipt Type</Form.Label>
                        <Form.Select
                          type="text"
                          aria-describedby="passwordHelpBlock"
                          disabled
                        />
                      </Col>
                      <Col>
                        
                      </Col>
                    </Row>
                    <Row className="align-items-center">
                      <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Form>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Fees;
