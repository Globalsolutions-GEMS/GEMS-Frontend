'use client';
// Import react-bootstrap components
import { Alert, Badge, Breadcrumb, Container, Button, Row, Col } from 'react-bootstrap';

// Import widget as custom components
import { PageHeading } from 'widgets';

// Import sub components
import useMounted from 'hooks/useMounted';

import * as React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import AcademicDetails from './academicdetails/page';
import SearchStudent from './searchstudent/page';

import {
    AccessTime as AccessTimeIcon,
    School as SchoolIcon,
    Person as PersonIcon,
    LocationOn as LocationOnIcon,
    PhotoCamera as PhotoCameraIcon,
    Description as DescriptionIcon,
    Assignment as AssignmentIcon,
    Subject as SubjectIcon,
    MonetizationOn as MonetizationOnIcon,
    CheckCircle as CheckCircleIcon,
} from '@mui/icons-material'; // Import icons from @mui/icons-material
import AddressDetails from './addressdetails/page';
import PersonalDetails from './personaldetails/page';
import PhotoAndSignatureDetails from './photoandsigndetails/page';
import DocumentDetails from './documentdetails/page';
import ExaminationDetails from './examinationdetails/page';
import SubjectDetails from './subjectdetails/page';
import FeesDetails from './feesdetails/page';

const steps = [
    // { label: 'Search Student', icon: <AccessTimeIcon /> },
    { label: 'Academic Details', icon: <SchoolIcon /> },
    { label: 'Personal Details', icon: <PersonIcon /> },
    { label: 'Address Details', icon: <LocationOnIcon /> },
    { label: 'Photo and Signature Details', icon: <PhotoCameraIcon /> },
    { label: 'Document Details', icon: <DescriptionIcon /> },
    { label: 'Examination Details', icon: <AssignmentIcon /> },
    { label: 'Subject Details', icon: <SubjectIcon /> },
    { label: 'Fees Details', icon: <MonetizationOnIcon /> },
];



const StudentInformation = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completedSteps, setCompletedSteps] = React.useState([]); // Track completed steps

    const handleNext = () => {
        setCompletedSteps([...completedSteps, activeStep]); // Mark current step as completed
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        const updatedCompletedSteps = [...completedSteps];
        updatedCompletedSteps.pop(); // Remove the last completed step
        setCompletedSteps(updatedCompletedSteps);
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    return (
        <Container fluid className="p-3">
            {/* Page Heading */}
            <PageHeading heading="Student Information" />
            <Breadcrumb className='md-3'>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Transaction</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Data Entry</Breadcrumb.Item>
                <Breadcrumb.Item active>Student Information</Breadcrumb.Item>
            </Breadcrumb>
            <Row className="align-items-end">
                <Col xs={12} className="d-flex align-items-end justify-content-end">
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        style={{ marginRight: "20px" }}
                    >
                        Back
                    </Button>
                    <Button onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </Col>
            </Row>

            <div className='m-3'>
                <SearchStudent />
            </div>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((step, index) => (
                        <Step key={index} completed={completedSteps.includes(index)}>
                            {/* Apply completed style */}
                            <StepLabel
                                icon={
                                    completedSteps.includes(index) ? (
                                        <CheckCircleIcon style={{ color: 'green' }} /> // Display check mark for completed steps
                                    ) : (
                                        step.icon
                                    )
                                }
                            >
                                {step.label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Box sx={{ p: 1 }}>

                    {activeStep === 0 && <AcademicDetails />}
                    {activeStep === 1 && <PersonalDetails/> }
                    {activeStep === 2 && <AddressDetails />}
                    {activeStep === 3 && <PhotoAndSignatureDetails />}
                    {activeStep === 4 && <DocumentDetails />}
                    {activeStep === 5 && <ExaminationDetails />}
                    {activeStep === 6 && <SubjectDetails />}
                    {activeStep === 7 && <FeesDetails />}
                </Box>

            </Box>
        </Container>
    );
};

export default StudentInformation;
