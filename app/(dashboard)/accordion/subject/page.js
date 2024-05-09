"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container, Table } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

const Subject = () => {
  const hasMounted = useMounted();

  return (
    <Container>
      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <div>
            {hasMounted && (
              <Form>
                <Card className="mb-5">
                  <Card.Body style={{ backgroundColor: "orange" }}>
                    <Form.Label>
                      Medium is not alloted to the selected student, so please
                      allot the medium and try again!
                    </Form.Label>
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Body>
                    <PageHeading heading="Subject Details" />
                    <Row className="mb-3 ">
                      <Col>
                        <span className="text-danger">*</span>
                        <Form.Label>Medium</Form.Label>
                        <Form.Select
                          type="text"
                          aria-describedby="passwordHelpBlock"
                          disabled
                        />
                      </Col>
                      <Col></Col>
                      <Col></Col>
                    </Row>
                    <Row>
                      <Col sm={4}>
                        <h4>Compulsary</h4>
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>
                                <b>Code</b>
                              </th>
                              <th>
                                <b>Name</b>
                              </th>
                            </tr>
                          </thead>
                        </Table>
                      </Col>
                      <Col sm={8}>
                        <h4>Optional</h4>
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>
                                <b>Subject Code</b>
                              </th>
                              <th>
                                <b>Subject Name</b>
                              </th>
                              <th>
                                <b>Status</b>
                              </th>
                            </tr>
                          </thead>
                        </Table>
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

export default Subject;
