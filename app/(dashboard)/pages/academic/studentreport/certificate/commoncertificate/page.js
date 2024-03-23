'use client'
// Import necessary modules and components
import React, { useState } from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import NoObjectionCertificate from './noobjectioncertificate/page'
import DOBCertificate from './dobcertificate/page'
import RegularStudentMaster from './student'
import MigrationCertificate from './migrationcertificate/page'
import AttemptCertificate from './attemptcertificate/page'

// Define the BankDetails component
const CommonCertificate = () => {
    // Use useState hook for managing tab value
    const [value, setValue] = useState(0);

    // Handle tab change
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container fluid className="p-6">
            <PageHeading heading="Common Certificates" />

            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Bonafide Certificate" id="simple-tab-0" />
                <Tab label="NOC Certificate" id="simple-tab-1" />
                <Tab label="DOB Certificate" id="simple-tab-2" />
                <Tab label="Migration Certificate" id="simple-tab-3" />
                <Tab label="Attempt Certificate" id="simple-tab-4" />
            </Tabs>
            {value === 0 && <RegularStudentMaster/>}
            {value === 1 && <NoObjectionCertificate />}
            {value === 2 && <DOBCertificate />}
            {value === 3 && <MigrationCertificate />}
            {value === 4 && <AttemptCertificate />}
        </Container>
    );
};

export default CommonCertificate;