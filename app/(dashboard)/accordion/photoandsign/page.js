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
} from "react-bootstrap";
import { PageHeading } from "widgets";
import useMounted from "hooks/useMounted";
import { uploadImages } from "app/api/photoandsign";
import { Cropper } from "react-advanced-cropper"; // Correct import statement
import "react-advanced-cropper/dist/style.css";
import { BsBell } from "react-icons/bs";

const MAX_IMAGE_SIZE_KB = 200; // Maximum image size in kilobytes

const PhotoAndSignDetails = () => {
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
    <Container fluid>
      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <div>
            {hasMounted && (
              <Form>
                <Row className="mb-3">
                  <Col>
                    <Container fluid>
                      <PageHeading heading="Student Photo" />
                      <Row className="mb-4">
                        <Col xl={12} lg={8} md={12} xs={12}>
                          <Card>
                            <Card.Body>
                              <Form.Group>
                                <Form.Label>Upload Photo</Form.Label>
                                <Form.Control
                                  type="file"
                                  onChange={handlePhotoChange}
                                  className="mb-4 mt-4"
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
                                    className={"cropper"}
                                    style={{ width: "300px", height: "200px" }}
                                  />
                                )}
                              </Form.Group>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                  <Col>
                    <Container fluid>
                      <PageHeading heading="Student Signature" />
                      <Row className="mb-4">
                        <Col xl={12} lg={8} md={12} xs={12}>
                          <Card>
                            <Card.Body>
                              <Form.Group>
                                <Form.Label>Upload Signature</Form.Label>
                                <Form.Control
                                  type="file"
                                  onChange={handleSignatureChange}
                                  className="mb-4 mt-4"
                                />
                                {sign && (
                                  <Cropper
                                    ref={signCropperRef}
                                    image={sign}
                                    width={200}
                                    height={200}
                                    cropRatio={1}
                                    maxZoom={10}
                                    src={URL.createObjectURL(sign)}
                                    className={"cropper"}
                                    style={{ width: "300px", height: "200px" }}
                                  />
                                )}
                              </Form.Group>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>
                <Row className="mb-3 ms-3 me-3">
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col sm={1}>
                          <BsBell className="me-1" />{" "}
                        </Col>
                        <Col sm={11}>
                          <Form.Label>
                            Valid formats are{" "}
                            <span className="text-danger">JPG,JPEG,PNG</span>{" "}
                            and max size of the file should not exceed{" "}
                            <span className="text-danger">
                              500 KB for Photo and 300 KB for Signature
                            </span>
                            .
                          </Form.Label>
                        </Col>
                      </Row>
                      {/* <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><BsBell className="me-1" /></InputGroup.Text>
                        <Form.Control
                          placeholder="Valid formats are JPG, JPEG, PNG and max size of the file should not exceed 500 KB for Photo and 300 KB for Signature."
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          disabled
                        />
                      </InputGroup> */}
                    </Card.Body>
                  </Card>
                </Row>

                <Col className="d-flex align-items-center justify-content-center mb-3">
                  <Button
                    variant="primary"
                    type="button"
                    onClick={handleUpload}
                  >
                    Upload
                  </Button>
                </Col>
              </Form>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PhotoAndSignDetails;
