'use client'
// import node module libraries
import { Alert, Badge, Breadcrumb, Container, Nav } from 'react-bootstrap';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import useMounted from 'hooks/useMounted';
import { CheckCircleFill } from 'react-bootstrap-icons';
import CasteCategory from '../castecategory/page';
import SubCaste from '../subcaste/page';


const Caste = () => {
    const hasMounted = useMounted();

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Caste" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Common Master</Breadcrumb.Item>
                <Breadcrumb.Item active>Caste</Breadcrumb.Item>
            </Breadcrumb>


            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted &&
                                    <Nav fill variant="tabs" defaultActiveKey="/home">
                                    <Nav.Item>
                                      {/* <Nav.Link href="/home">Caste Category</Nav.Link> */}
                                      <CasteCategory/>
                                    </Nav.Item>
                                    <Nav.Item>
                                      {/* <Nav.Link eventKey="link-1">Sub Caste</Nav.Link> */}
                                      <SubCaste/>
                                    </Nav.Item>
                                  </Nav>
                                }
                            </div>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    )
}

export default Caste