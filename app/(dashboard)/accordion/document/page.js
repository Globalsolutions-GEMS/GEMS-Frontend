"use client";
import React, { useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Button,
  InputGroup,
  Table,
} from "react-bootstrap";
import { PageHeading } from "widgets";
import useMounted from "hooks/useMounted";
import { uploadImages } from "app/api/photoandsign";
import { Cropper } from "react-advanced-cropper"; // Correct import statement
import "react-advanced-cropper/dist/style.css";
import { BsBell } from "react-icons/bs";

const MAX_IMAGE_SIZE_KB = 200;

const Documents = () => {
  const hasMounted = useMounted();
  const [photo, setPhoto] = useState(null);
  const [sign, setSign] = useState(null);
  const photoCropperRef = useRef(null);
  const signCropperRef = useRef(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileSizeKB = file.size / 1024; // Convert bytes to kilobytes
      if (fileSizeKB <= MAX_IMAGE_SIZE_KB) {
        setPhoto(file);
      } else {
        // Reset photo state and display error message
        setPhoto(null);
        alert("Photo size exceeds 200kb limit");
      }
    } else {
      setPhoto(null);
    }
  };

  const handleSignatureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileSizeKB = file.size / 1024; // Convert bytes to kilobytes
      if (fileSizeKB <= MAX_IMAGE_SIZE_KB) {
        setSign(file);
      } else {
        // Reset signature state and display error message
        setSign(null);
        alert("Signature size exceeds 200kb limit");
      }
    } else {
      setSign(null);
    }
  };

  const handleUpload = async () => {
    try {
      // Check if both photo and signature are selected
      if (photo && sign) {
        // Use cropper refs to get cropped images
        const croppedPhoto = photoCropperRef.current.getCroppedImage();
        const croppedSign = signCropperRef.current.getCroppedImage();

        // Make upload request using the Axios function
        await uploadImages(croppedPhoto, croppedSign);

        // Optionally, you can reset the form after successful upload
        setPhoto(null);
        setSign(null);
        alert("Uploaded Successfully.");
        // Add any additional success handling here
      } else {
        alert("Please upload both photo and signature.");
      }
    } catch (error) {
      console.error("Error uploading images:", error);
      // Add error handling as needed
    }
  };

  return (
    <Container>
      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <div>
            {hasMounted && (
              <Form>
                <Row>
                  <Col sm={5}>
                    <Card className="mb-5">
                      <Card.Body>
                        <PageHeading heading="Select Documents" />
                        <Row className="mb-3">
                          
                          <Form.Label> <span className="text-danger">*</span>Select Document</Form.Label>
                          <Form.Select
                            type="text"
                            aria-describedby="passwordHelpBlock"
                          />
                        </Row>
                        <Row className="mb-4">
                          <Form.Group>
                            <span className="text-danger">*</span>
                            <Form.Label>Upload File</Form.Label>
                            <Form.Control
                              type="file"
                              onChange={handlePhotoChange}
                            />
                            {photo && (
                              <Cropper
                                ref={photoCropperRef}
                                image={photo}
                                width={200}
                                height={200}
                                cropRatio={1}
                                maxZoom={10}
                                src={URL.createObjectURL(photo)}
                                className={"cropper mt-4"}
                                style={{ width: "300px", height: "200px" }}
                              />
                            )}
                          </Form.Group>
                        </Row>
                        <Row className="align-items-center">
                          <Col className="d-flex align-items-center justify-content-center">
                            <Button variant="primary" type="submit">
                              Submit
                            </Button>
                            <Button
                              variant="secondary"
                              type="reset"
                              style={{ marginLeft: "10px" }}
                            >
                              Cancel
                            </Button>
                          </Col>
                        </Row>
                        <Row className="mb-3 mt-3 border border-secondary p-2">
                          <Col>
                            <div className="bg-blue d-flex align-items-center justify-content-center ">
                              <div className="me-3">
                                <BsBell size={20} />
                              </div>
                              <div>
                                <span>
                                  Valid formats are JPG, JPEG, PNG and max size
                                  of the file should not exceed 200 KB.
                                </span>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="mb-5">
                      <Card.Body>
                        <PageHeading heading="Document List" />
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>
                                <b>Edit</b>
                              </th>
                              <th>
                                <b>Document Name</b>
                              </th>
                              <th>
                                <b>Download</b>
                              </th>
                            </tr>
                          </thead>
                        </Table>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Form>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Documents;
