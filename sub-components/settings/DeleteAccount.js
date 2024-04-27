// import node module libraries
import Link from 'next/link';
import { Col, Row, Card } from 'react-bootstrap';

const DeleteAccount = () => {
  return (
    <Row>
      <Col xl={3} lg={4} md={12} xs={12}>
        <div className="mb-4 mb-lg-0">
          <h4 className="mb-1">Delete Account</h4>
        </div>
      </Col>
      <Col xl={9} lg={8} md={12} xs={12}>
        <Card className="mb-6">
          <Card.Body>
            <div className="mb-4">
              <h4 className="mb-1">Deleting Account</h4>
            </div>
            <div>
              <p>Confirm you want to delete your account forever.</p>
              <Link href="#" className="btn btn-danger">Delete Account</Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default DeleteAccount