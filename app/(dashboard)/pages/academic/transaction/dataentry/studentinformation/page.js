'use client'
// import node module libraries
import { Alert, Badge, Breadcrumb, Container, Nav } from 'react-bootstrap';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import useMounted from 'hooks/useMounted';

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AcademicDetails from './academicdetails/page';
import SearchStudent from './searchstudent/page';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const StudentInformation = () => {
    const hasMounted = useMounted();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Student Information" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Transaction</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Data Entry</Breadcrumb.Item>
                <Breadcrumb.Item active>Student Information</Breadcrumb.Item>
            </Breadcrumb>

            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                        <Tab label="Search Student" {...a11yProps(0)} />
                        <Tab label="Academic Details" {...a11yProps(1)} />
                        <Tab label="Personal Details" {...a11yProps(2)} />
                        <Tab label="Address Details" {...a11yProps(3)} />
                        <Tab label="Photo And Signature Details" {...a11yProps(4)} />
                        <Tab label="Document Details" {...a11yProps(5)} />
                        <Tab label="Examination Details" {...a11yProps(6)} />
                        <Tab label="Subject Details" {...a11yProps(7)} />
                        <Tab label="Fees Details" {...a11yProps(8)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <SearchStudent/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <AcademicDetails/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    Personal Details
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    Address Details
                </CustomTabPanel>
                <CustomTabPanel value={value} index={4}>
                    Photo And Signature Details
                </CustomTabPanel>
                <CustomTabPanel value={value} index={5}>
                    Document Details
                </CustomTabPanel>
                <CustomTabPanel value={value} index={6}>
                    Examination Details
                </CustomTabPanel>
                <CustomTabPanel value={value} index={7}>
                    Subject Details
                </CustomTabPanel>
                <CustomTabPanel value={value} index={8}>
                    Fees Details
                </CustomTabPanel>
            </Box>

        </Container>
    )
}

export default StudentInformation