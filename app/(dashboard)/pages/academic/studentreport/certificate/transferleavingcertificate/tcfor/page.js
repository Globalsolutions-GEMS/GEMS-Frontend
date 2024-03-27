"use client";
import React, { useState } from "react";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import useMounted from "hooks/useMounted";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import ParticularStudentTC from "./particularstudent";
import BulkStudentTC from "./bulkstudent";
import ExternalStudentTC from "./externalstudent";

const TCFor = () => {
  const [selectedOption, setSelectedOption] = useState("regular");
  const hasMounted = useMounted();

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Container fluid>
      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <div>
            {hasMounted && (
              <>
                <Form className="mb-5 d-flex align-item-center justify-content-center">
                  <Form.Check
                    inline
                    type="radio"
                    label="Particular Student"
                    name="studentType"
                    value="particular"
                    checked={selectedOption === "particular"}
                    onChange={handleRadioChange}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Bulk Student"
                    name="studentType"
                    value="bulk"
                    checked={selectedOption === "bulk"}
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
                {selectedOption === "particular" && <ParticularStudentTC />}
                {selectedOption === "bulk" && <BulkStudentTC />}
                {selectedOption === "external" && <ExternalStudentTC />}
              </>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TCFor;
