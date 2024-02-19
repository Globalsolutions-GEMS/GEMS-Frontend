'use client'
// import node module libraries
import { Container, Table } from 'react-bootstrap';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';


// import sub components
import useMounted from 'hooks/useMounted';


const BankAccount = () => {
    const hasMounted = useMounted();

    return (
        <Container fluid >

            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted &&
                                    <Form>
                                        <Row><Col>
                                            <Row className="mb-3">
                                                <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Bank Name<span className="text-danger">*</span></Form.Label>
                                                <Col sm={9} className="mb-3 mb-lg-0">
                                                    <Form.Select type="text" placeholder="Please Enter Caste Category" id="castecategory" required />
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Account No.<span className="text-danger">*</span></Form.Label>
                                                <Col sm={9} className="mb-3 mb-lg-0">
                                                    <Form.Control type="text" placeholder="Please Enter Account No." id="description" required />
                                                </Col>
                                            </Row>

                                            <Row className="mb-3">
                                                <Form.Label className="col-sm-3 col-form-label form-label">
                                                    Active
                                                </Form.Label>
                                                <Col style={{ marginBottom: '20px' }}>
                                                    <Form.Check
                                                        type="switch"
                                                        id="checkIfActive"
                                                        label="Check If Active"
                                                        defaultChecked
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className="align-items-center">
                                                <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
                                                    <Button variant="primary" type="submit" >
                                                        Submit
                                                    </Button>
                                                    <Button variant="secondary" type="" style={{ marginLeft: '10px' }}>
                                                        Cancel
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                <b>Account Number</b>
                                                            </th>
                                                            <th>
                                                                <b>Status</b>
                                                            </th>
                                                            <th className="col-2">
                                                                <b>Action</b>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Form>
                                }
                            </div>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    )
}

export default BankAccount