'use client';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import useMounted from 'hooks/useMounted';
import { uploadImages } from 'app/api/photoandsign';

const MAX_IMAGE_SIZE_KB = 200; // Maximum image size in kilobytes

const PhotoAndSignatureDetails = () => {
    const hasMounted = useMounted();
    const [photo, setPhoto] = useState(null);
    const [sign, setSign] = useState(null);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileSizeKB = file.size / 1024; // Convert bytes to kilobytes
            if (fileSizeKB <= MAX_IMAGE_SIZE_KB) {
                setPhoto(file);
            } else {
                // Reset photo state and display error message
                setPhoto(null);
                alert('Photo size exceeds 200kb limit');
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
                alert('Signature size exceeds 200kb limit');
            }
        } else {
            setSign(null);
        }
    };

    const handleUpload = async () => {
        try {
            // Check if both photo and signature are selected
            if (photo && sign) {
                // Make upload request using the Axios function
                await uploadImages(photo, sign);

                // Optionally, you can reset the form after successful upload
                setPhoto(null);
                setSign(null);
                alert('Uploaded Successfully.');
                // Add any additional success handling here
            } else {
                alert('Please upload both photo and signature.');
            }
        } catch (error) {
            console.error('Error uploading images:', error);
            // Add error handling as needed
        }
    };



    return (
        <Container fluid>
            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted && (
                                    <Form>
                                        <Row className="mb-3">
                                            <Col>
                                                <Container fluid>
                                                    <PageHeading heading="Student Photo" />
                                                    <Row className="mb-8">
                                                        <Col xl={12} lg={8} md={12} xs={12}>
                                                            <Card>
                                                                <Card.Body>
                                                                    <Form.Group>
                                                                        <Form.Label>Upload Photo</Form.Label>
                                                                        <Form.Control type="file" onChange={handlePhotoChange} />
                                                                        {photo && (
                                                                            <img
                                                                                src={URL.createObjectURL(photo)}
                                                                                alt="Photo Preview"
                                                                                style={{ maxWidth: '100%', marginTop: '10px' }}
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
                                                    <Row className="mb-8">
                                                        <Col xl={12} lg={8} md={12} xs={12}>
                                                            <Card>
                                                                <Card.Body>
                                                                    <Form.Group>
                                                                        <Form.Label>Upload Signature</Form.Label>
                                                                        <Form.Control type="file" onChange={handleSignatureChange} />
                                                                        {sign && (
                                                                            <img
                                                                                src={URL.createObjectURL(sign)}
                                                                                alt="Signature Preview"
                                                                                style={{ maxWidth: '100%', marginTop: '10px' }}
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
                                        <Col className="d-flex align-items-center justify-content-center mb-3">
                                            <Button variant="primary" type="button" onClick={handleUpload}>
                                                Upload
                                            </Button>
                                        </Col>
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

export default PhotoAndSignatureDetails;
