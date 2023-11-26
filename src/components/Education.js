import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
        <Box sx={{ p: 3, color: "black" }}>
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

export default function Education() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        display: "flex",
        height: "224px",
        marginBottom: "50px",
        marginTop: "80px",
        marginX: "auto",
        position: "relative",
      }}
    >
      <div className="absolute -top-7 h-7">Education</div>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          bgcolor: "green",
        }}
      >
        <Tab label="University" {...a11yProps(0)} />
        <Tab label="Secondary" {...a11yProps(1)} />
        <Tab label="Primary" {...a11yProps(2)} />
        <Tab label="YouTube" {...a11yProps(3)} />
        <Tab label="Petanns" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div>Murang'a University of Technology</div>
        <div>Bsc Software Engineering</div>
        <div>2016 - 2022</div>
        <div>I'll add some or all of the units covered</div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>St. Joseph's High School Githunguri</div>
        <div>2012 - 2015</div>
        <div>B+</div>
        <div>I'll add individual subjects and marks</div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>Kongo Primary School</div>
        <div>2004 - 2021</div>
        <div>340</div>
        <div>I'll add individual subjects and marks</div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div>Frontend Web Development with ReactJS</div>
        <div>2020 - Present</div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div>Computer Packages</div>
        <div>2017</div>
      </TabPanel>
    </Box>
  );
}
