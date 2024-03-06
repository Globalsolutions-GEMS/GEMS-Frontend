"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container, Table } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

const PayableFees = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Payable Fees" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">NEP</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Masters</Breadcrumb.Item>
        <Breadcrumb.Item active>Payable Fees</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Form>
            <Card>
              <Card.Body>
                <div>
                  {hasMounted && (
                    <Row>
                      <Col sm={8}>
                        <Row className="mb-3">
                          <Form.Label className="col-sm-4 col-form-label form-label">
                            Course<span className="text-danger">*</span>
                          </Form.Label>
                          <Col sm={6} className="mb-3 mb-lg-0">
                            <Form.Select
                              type="text"
                              placeholder="Please Enter Subject Category Name"
                              id="session"
                              required
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col sm={4}></Col>

                      <Row>
                        <Col>
                          <Table striped border hower>
                            <thead>
                              <tr>
                                <th style={{ width: "300px" }}>
                                  <b>Fee Type</b>
                                </th>
                                <th style={{ width: "300px" }}>
                                  <b>Total Fee</b>
                                </th>
                                <th className="col-3">
                                  <b>Paid/Adjusted Fee</b>
                                </th>
                                <th>
                                  <b>Balance Fee</b>
                                </th>
                                <th>
                                  <b>Current Fee</b>
                                </th>
                                <th>
                                  <b>Action</b>
                                </th>
                              </tr>
                            </thead>
                          </Table>
                        </Col>
                      </Row>
                    </Row>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default PayableFees;
