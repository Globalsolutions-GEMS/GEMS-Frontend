'use client'
import { useEffect, useState } from 'react';
// import node module libraries
import { Breadcrumb, Container, Col, Row, Form, Card, Button } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import useMounted from 'hooks/useMounted';

import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';

import { getBasicCourse, getCoursePattern, getFeePattern, createCourse } from '../../../../../../api/coursecreation';

const CourseCreation = () => {
    const hasMounted = useMounted();

    const [courseCretionData, setCourseCreationData] = useState([]);
    const [itemsPerPage] = useState(5);
    const [formData, setFormData] = useState({
        basicCourse: '',
        duration: '',
        coursePattern: '',
        feePattern: '',
        checkIfActive: false
    });

    const [basicCourse, setBasicCourse] = useState([]);
    const [coursePattern, setCoursePattern] = useState([]);
    const [feePattern, setFeePattern] = useState([]);

    const success = () => toast.success("Data Submitted Successfully!!!");
    const update = () => toast.success("Data Updated Successfully!!!");
    const errors = () => toast.error("Ooops!!! Somthing went Wrong")

    const handleInputChange = (event) => {
        const { id, type, checked, value } = event.target;

        const newValue = type === 'checkbox' ? checked : value;

        setFormData(prevFormData => ({
            ...prevFormData,
            [id]: newValue === 'on' ? true : newValue, // Convert 'on' to true, otherwise use the value directly
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await createCourse(formData)
            success()
        } catch (error) {
            console.log(error);
            errors()
        }
    }

    useEffect(() => {
        if (hasMounted) {
            getBasicCourse()
                .then(response => {
                    const data = response.data; // Access data from the response
                    setBasicCourse(data);
                })
                .catch(error => console.error('Error fetching Faculty:', error));
        }
    }, [hasMounted]);

    useEffect(() => {
        if (hasMounted) {
            getCoursePattern()
                .then(response => {
                    const data = response.data; // Access data from the response
                    setCoursePattern(data);
                })
                .catch(error => console.error('Error fetching Faculty:', error));
        }
    }, [hasMounted]);

    useEffect(() => {
        if (hasMounted) {
            getFeePattern()
                .then(response => {
                    const data = response.data; // Access data from the response
                    setFeePattern(data);
                })
                .catch(error => console.error('Error fetching Faculty:', error));
        }
    }, [hasMounted]);


    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Course Creation" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Pre Admission</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Fees</Breadcrumb.Item>
                <Breadcrumb.Item active>Course Creation</Breadcrumb.Item>
            </Breadcrumb>


            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted &&
                                    <Form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col>
                                                <Row className="mb-3">
                                                    <Form.Label className="col-sm-3 col-form-label form-label" >Basic Course<span className="text-danger">*</span></Form.Label>
                                                    <Col sm={9} className="mb-3 mb-lg-0">
                                                        <Form.Select id='basicCourse' value={formData.basicCourse} onChange={handleInputChange}  >
                                                            <option value="" disabled>Please Select a Basic Course</option>
                                                            {basicCourse.map(basicCourse => (
                                                                <option key={basicCourse.id} value={basicCourse.id}>{basicCourse.basicCourse}</option>
                                                            ))}
                                                        </Form.Select>
                                                    </Col>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Label className="col-sm-3 col-form-label form-label" >Duration<span className="text-danger">*</span></Form.Label>
                                                    <Col sm={9} className="mb-3 mb-lg-0">
                                                        <Form.Control type="text" placeholder="Please Enter Duration" id="duration" value={formData.duration} onChange={handleInputChange}  />
                                                    </Col>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Label className="col-sm-3 col-form-label form-label" >Course Pattern<span className="text-danger">*</span></Form.Label>
                                                    <Col sm={9} className="mb-3 mb-lg-0">
                                                        <Form.Select id='coursePattern' value={formData.coursePattern} onChange={handleInputChange}  >
                                                            <option value="" disabled>Please Select a Course Pattern</option>
                                                            {coursePattern.map(coursepattern => (
                                                                <option key={coursepattern.id} value={coursepattern.id}>{coursepattern.coursePatternName}</option>
                                                            ))}
                                                        </Form.Select>
                                                    </Col>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Label className="col-sm-3 col-form-label form-label" >Fee Pattern<span className="text-danger">*</span></Form.Label>
                                                    <Col sm={9} className="mb-3 mb-lg-0">
                                                        <Form.Select id='feePattern' value={formData.feePattern} onChange={handleInputChange}  >
                                                            <option value="" disabled>Please Select a Fee Pattern</option>
                                                            {feePattern.map(feepattern => (
                                                                <option key={feepattern.id} value={feepattern.id}>{feepattern.feePatternName}</option>
                                                            ))}
                                                        </Form.Select>
                                                    </Col>
                                                </Row>
                                                <Row className='mb-3'>
                                                    <Form.Check.Label className="col-sm-3 col-form-label form-label" >Active</Form.Check.Label>
                                                    <Col md={9} xs={12}>
                                                        <Form.Check className="col-form-label form-label" type="checkbox" id="checkIfActive" value={formData.checkIfActive} onChange={handleInputChange}>
                                                            <Form.Check.Input type="checkbox" id="checkIfActive" value={formData.checkIfActive} onChange={handleInputChange}/>
                                                            <Form.Check.Label >Check If Active</Form.Check.Label>
                                                        </Form.Check>
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
                                            <Col></Col>
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

export default CourseCreation