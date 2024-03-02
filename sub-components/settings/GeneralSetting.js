// import node module libraries
import { Col, Row, Form, Card, Button, Image } from 'react-bootstrap';

// import widget as custom components
import { FormSelect, DropFiles } from 'widgets';

// import hooks
import useMounted from 'hooks/useMounted';

const GeneralSetting = () => {
  const hasMounted = useMounted();
  const countryOptions = [
    { value: 'India', label: 'India' },
    { value: 'US', label: 'US' },
    { value: 'UK', label: 'UK' },
    { value: 'UAE', label: 'UAE' }
  ];

  return (
    <Row className="mb-8">
      <Col xl={3} lg={4} md={12} xs={12}>
        <div className="mb-4 mb-lg-0">
          <h4 className="mb-1">General Setting</h4>
          <p className="mb-0 fs-5 text-muted">Profile configuration settings </p>
        </div>
      </Col>
      <Col xl={9} lg={8} md={12} xs={12}>
        <Card>
          {/* card body */}
          <Card.Body>
            
            {/* col */}
            
            <div>
              <div className="mb-6 ">
                <h4 className="mb-1">Basic information</h4>
              </div>
              <Row className="align-items-center mb-8">
              
              <Col md={9} className='d-flex'>
                <Form.Label className="col-sm-5 col-form-label form-label" htmlFor="fullName">Profile Photo</Form.Label>
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <Image src="/images/avatar/avatar-4.jpg" className="rounded-circle avatar avatar-lg" alt="" />
                  </div>
                  <div>
                    <Button variant="outline-white" className="me-2" type="submit">Change </Button>
                    <Button variant="outline-white" type="submit">Remove </Button>
                  </div>
                </div>
              </Col>
            </Row>
              {hasMounted && 
              <Form>
                <Row className="mb-3">
                  <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="fullName">Full name</Form.Label>
                  <Col sm={4} className="mb-3 mb-lg-0">
                    <Form.Control type="text" placeholder="First name" id="fullName" required />
                  </Col>
                  <Col sm={4}>
                    <Form.Control type="text" placeholder="Last name" id="lastName" required />
                  </Col>
                </Row>
                {/* row */}
                <Row className="mb-3">
                <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="email">Email</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="email" placeholder="Email" id="email" required />
                  </Col>
                </Row>
                {/* row */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="phone">Mobile Number</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="Enter Mobile Number" id="phone" />
                  </Col>
                </Row>

                {/* Location */}
                {/* <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="country">Location</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control as={FormSelect} placeholder="Select Country" id="country" options={countryOptions} />
                  </Col>
                </Row> */}

                {/* Address Line One */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="addressLine">Address</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control as="textarea" placeholder="Enter Address" id="addressLine" required />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="addressLine">Designation</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type='text' placeholder="Enter Designation" id="addressLine" required />
                  </Col>
                </Row>
                {/* Address Line Two */}
                <Row className="mb-3">
                 <Form.Label className="col-sm-4" htmlFor="zipcode">Counter Number</Form.Label>

                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="Enter Counter Number" id="zipcode" required />
                  </Col>
                </Row>

                <Row className="mb-3">
                 <Form.Label className="col-sm-4" htmlFor="zipcode">Last Login</Form.Label>
                </Row>

                {/* Zip code */}
                <Row className="align-items-center">
                  <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
                    <Button variant="primary" type="submit">
                      Save Changes
                    </Button>
                  </Col>

                </Row>
              </Form>
              }
            </div>
          </Card.Body>
        </Card>

      </Col>
    </Row>
  )
}

export default GeneralSetting