"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Personal from "../accordion/page";
import AcademicDetails from "../accordion/academic/page";
import Address from "../accordion/address/page";
import PhotoAndSignDetails from "../accordion/photoandsign/page";
import Subject from "../accordion/subject/page";
import Fees from "../accordion/fees/page";
import Documents from "../accordion/document/page";

import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import SubjectIcon from "@mui/icons-material/Subject";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DescriptionIcon from "@mui/icons-material/Description";

const TabLabel = ({ children }) => (
  <div style={{ display: "flex", alignSelf: "flex-start", color: "black" }}>
    {children}
  </div>
);

TabLabel.propTypes = {
  children: PropTypes.node.isRequired,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", padding: "30px" }}>
      <Box
        sx={{
          width: "20%",
          bgcolor: "background.paper",
          borderRight: 1,
          borderColor: "divider",
          marginTop: "3.5vh",
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          overflow: "hidden",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ width: "100%", borderRight: 1, borderColor: "divider" }}
        >
          <Tab
            {...a11yProps(0)}
            label={
              <TabLabel>
                <PersonIcon />
                <Typography variant="body1">Personal</Typography>
              </TabLabel>
            }
            sx={value === 0 ? selectedTabStyles : {}}
          />
          <Tab
            {...a11yProps(1)}
            label={
              <TabLabel>
                <SchoolIcon />
                <Typography variant="body1">Academic</Typography>
              </TabLabel>
            }
            sx={value === 1 ? selectedTabStyles : {}}
          />
          <Tab
            {...a11yProps(2)}
            label={
              <TabLabel>
                <LocationOnIcon />
                <Typography variant="body1">Address</Typography>
              </TabLabel>
            }
            sx={value === 2 ? selectedTabStyles : {}}
          />
          <Tab
            {...a11yProps(3)}
            label={
              <TabLabel>
                <PhotoCameraIcon />
                <Typography variant="body1">Photo and Sign</Typography>
              </TabLabel>
            }
            sx={value === 3 ? selectedTabStyles : {}}
          />
          <Tab
            {...a11yProps(4)}
            label={
              <TabLabel>
                <SubjectIcon />
                <Typography variant="body1">Subject</Typography>
              </TabLabel>
            }
            sx={value === 4 ? selectedTabStyles : {}}
          />
          <Tab
            {...a11yProps(5)}
            label={
              <TabLabel>
                <AttachMoneyIcon />
                <Typography variant="body1">Fees</Typography>
              </TabLabel>
            }
            sx={value === 5 ? selectedTabStyles : {}}
          />
          <Tab
            {...a11yProps(6)}
            label={
              <TabLabel>
                <DescriptionIcon />
                <Typography variant="body1">Documents</Typography>
              </TabLabel>
            }
            sx={value === 6 ? selectedTabStyles : {}}
          />
        </Tabs>
      </Box>
      <Box sx={{ width: "80%" }}>
        <TabPanel value={value} index={0}>
          <Personal />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AcademicDetails />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Address />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <PhotoAndSignDetails />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Subject />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Fees />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <Documents />
        </TabPanel>
      </Box>
    </Box>
  );
}

const selectedTabStyles = {
  backgroundColor: "#6777F0",
  border: "1px solid grey",
  color: "white",
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
