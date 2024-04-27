"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const AdminReceiptCancellation = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Admin Receipt Cancellation" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Transaction</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Receipts</Breadcrumb.Item>
        <Breadcrumb.Item active>Admin Receipt Cancellation</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Card>
            <Card.Body>
              <div>
                {hasMounted && (
                  <Form>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Academic Year<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={3} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Enter "
                          id="Academic Year"
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Recceipt Book<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={3} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Select Course"
                          id="course"
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        From Date
                      </Form.Label>
                      <Col sm={3} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder="Please Enter From Date"
                          id="Academic Year"
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        To Date
                      </Form.Label>
                      <Col sm={3} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder="Please Enter To Date"
                          id="course"
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col sm={2}>
                        <Form.Label
                          className=" col-form-label form-label"
                          htmlFor="fullName"
                        >
                          Search By<span className="text-danger">*</span>
                        </Form.Label>
                      </Col>
                      <Col sm={2} className="mt-2">
                        <Form.Check // prettier-ignore
                          type="radio"
                          label="Receipt No"
                          name="search"
                        />
                      </Col>
                      <Col className="mt-2">
                        <Form.Check
                          type="radio"
                          label="Student Name"
                          name="search"
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Receipt Search<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={3} className="mb-3 mb-lg-0">
                        <InputGroup>
                          <Form.Control
                            placeholder="Input group append..."
                            aria-label="Input group append..."
                            aria-describedby="basic-addon2"
                          />
                          <Button
                            variant="outline-secondary"
                            id="button-addon2"
                          >
                            <FontAwesomeIcon icon={faSearch} />
                          </Button>
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Reason
                      </Form.Label>
                      <Col sm={3} className="mb-3 mb-lg-0">
                        <Form.Control
                          type="text"
                          placeholder="Please Enter Reason"
                          id="course"
                          required
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="primary" type="submit">
                          Reprint Cancel
                        </Button>
                        <Button
                          variant="primary"
                          type=""
                          style={{ marginLeft: "10px" }}
                        >
                          Cancel
                        </Button>
                      </Col>
                      <Col></Col>
                    </Row>
                  </Form>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminReceiptCancellation;
