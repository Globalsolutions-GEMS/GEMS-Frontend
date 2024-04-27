"use client";
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Button,
} from "react-bootstrap";
import useMounted from "hooks/useMounted";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import ExternalStudent from "./externalstudent/page";
import RegularStudent from "./regularstudent/page";

const RegularStudentMaster = () => {
  const [selectedOption, setSelectedOption] = useState("regular");
  const hasMounted = useMounted();

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Container fluid>
      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Card>
            <Card.Body>
              <div>
                {hasMounted && (
                  <>
                    <Form className="mb-5 mt-3 d-flex align-item-center justify-content-center">
                      <Form.Check
                        inline
                        type="radio"
                        label="Regular Student"
                        name="studentType"
                        value="regular"
                        checked={selectedOption === "regular"}
                        onChange={handleRadioChange}
                      />
                      <Form.Check
                        inline
                        type="radio"
                        label="External Student"
                        name="studentType"
                        value="external"
                        checked={selectedOption === "external"}
                        onChange={handleRadioChange}
                      />
                    </Form>
                    {selectedOption === "regular" && <RegularStudent />}
                    {selectedOption === "external" && <ExternalStudent />}
                  </>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegularStudentMaster;
