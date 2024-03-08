"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AccordionForStudent from "../accordion/page";
import AcademicDetails from '../accordion/academic/page'

import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import SubjectIcon from "@mui/icons-material/Subject";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DescriptionIcon from "@mui/icons-material/Description";

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

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

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
              <>
                <PersonIcon /> Personal
              </>
            }
          />
          <Tab
            {...a11yProps(1)}
            label={
              <>
                <SchoolIcon /> Academic
              </>
            }
          />
          <Tab
            {...a11yProps(2)}
            label={
              <>
                <LocationOnIcon /> Address
              </>
            }
          />
          <Tab
            {...a11yProps(3)}
            label={
              <>
                <PhotoCameraIcon /> Photo and Sign
              </>
            }
          />
          <Tab
            {...a11yProps(4)}
            label={
              <>
                <SubjectIcon /> Subject
              </>
            }
          />
          <Tab
            {...a11yProps(5)}
            label={
              <>
                <AttachMoneyIcon /> Fees
              </>
            }
          />
          <Tab
            {...a11yProps(6)}
            label={
              <>
                <DescriptionIcon /> Documents
              </>
            }
          />
        </Tabs>
      </Box>
      <Box sx={{ width: "80%" }}>
        <TabPanel value={value} index={0}>
          <AccordionForStudent />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AcademicDetails/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </Box>
    </Box>
  );
}
