import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PlaceIcon from "@mui/icons-material/Place";
import SchoolIcon from "@mui/icons-material/School";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { Chip } from "@mui/material";

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
        height: "235px",
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
          minWidth: "100px",
        }}
      >
        <Tab label="University" {...a11yProps(0)} />
        <Tab label="Secondary" {...a11yProps(1)} />
        <Tab label="Primary" {...a11yProps(2)} />
        <Tab label="YouTube" {...a11yProps(3)} />
        <Tab label="Petanns" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="flex space-x-2">
          <SchoolIcon color="primary" />
          <div>Murang'a University of Technology</div>
        </div>
        <div className="flex space-x-2">
          <LibraryBooksIcon color="primary" />
          <div>Bsc Software Engineering</div>
        </div>
        <div className="flex space-x-2">
          <TimelapseIcon color="primary" />
          <div>2016 - 2022</div>
        </div>
        <div className="flex space-x-2">
          <PlaceIcon color="primary" />
          <div>Murang'a, Kenya</div>
        </div>
        <div
          className="flex mt-2 flex-wrap overflow-auto"
          style={{ maxHeight: "70px" }}
        >
          <Chip
            label="Data Structures & Algorithms"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="Artificial Intelligence"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="Distributed Systems"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="Database Management Systems"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="Calculus"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="Probality & Statistics"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="Distributed Systems"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="Database Management Systems"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="Calculus"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="Probality & Statistics"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="Distributed Systems"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="Database Management Systems"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="Calculus"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="Probality & Statistics"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="flex space-x-2">
          <SchoolIcon color="primary" />
          <div>St. Joseph's High School Githunguri</div>
        </div>
        <div className="flex space-x-2">
          <SportsScoreIcon color="primary" />
          <div>B+</div>
        </div>
        <div className="flex space-x-2">
          <TimelapseIcon color="primary" />
          <div>2012 - 2015</div>
        </div>
        <div className="flex space-x-2">
          <PlaceIcon color="primary" />
          <div>Kiambu, Kenya</div>
        </div>
        <div
          style={{ maxHeight: "70px" }}
          className="flex mt-2 flex-wrap overflow-auto"
        >
          <Chip
            label="Mathematics"
            sx={{
              marginRight: "2px",
              marginTop: "2px",
              fontSize: "12px",
            }}
          />
          <Chip
            label="English"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="Kiswahili"
            sx={{
              marginRight: "2px",
              marginTop: "2px",
              fontSize: "12px",
            }}
          />
          <Chip
            label="Physics"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="Biology"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="Chemistry"
            sx={{
              marginRight: "2px",
              marginTop: "2px",
              fontSize: "12px",
            }}
          />
          <Chip
            label="Geography"
            sx={{
              marginRight: "2px",
              marginTop: "2px",
              fontSize: "12px",
            }}
          />
          <Chip
            label="Christian Religious Education (C.R.E)"
            sx={{
              marginRight: "2px",
              marginTop: "2px",
              color: "red",
              fontSize: "12px",
            }}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="flex space-x-2">
          <SchoolIcon color="primary" />
          <div>Kongo Primary School</div>
        </div>
        <div className="flex space-x-2">
          <SportsScoreIcon color="primary" />
          <div>340</div>
        </div>
        <div className="flex space-x-2">
          <TimelapseIcon color="primary" />
          <div>2004 - 2011</div>
        </div>
        <div className="flex space-x-2">
          <PlaceIcon color="primary" />
          <div>Kiambu, Kenya</div>
        </div>
        <div
          style={{ maxHeight: "70px" }}
          className="flex mt-2 flex-wrap overflow-auto"
        >
          <Chip
            label="Mathematics"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="English"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="Kiswahili"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="Social Studies & C.R.E"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="Science"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="flex space-x-2">
          <SchoolIcon color="primary" />
          <div>Youtube</div>
        </div>
        <div className="flex space-x-2">
          <LibraryBooksIcon color="primary" />
          <div>Frontend Web Development with ReactJS</div>
        </div>
        <div className="flex space-x-2">
          <TimelapseIcon color="primary" />
          <div>2020 - Present</div>
        </div>
        <div className="flex space-x-2">
          <PlaceIcon color="primary" />
          <div>Everywhere</div>
        </div>
        <div
          style={{ maxHeight: "70px" }}
          className="flex mt-2 flex-wrap overflow-auto"
        >
          <Chip
            label="HTML"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="CSS"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="JavaScript"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="React"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="Redux & Redux Toolkit"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="Tailwind"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="MaterialUI"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="Framer Motion"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className="flex space-x-2">
          <SchoolIcon color="primary" />
          <div>Petanns Driving School and Computer Packages</div>
        </div>
        <div className="flex space-x-2">
          <LibraryBooksIcon color="primary" />
          <div>Computer Packages</div>
        </div>
        <div className="flex space-x-2">
          <SportsScoreIcon color="primary" />
          <div>A</div>
        </div>
        <div className="flex space-x-2">
          <TimelapseIcon color="primary" />
          <div>2017</div>
        </div>
        <div className="flex space-x-2">
          <PlaceIcon color="primary" />
          <div>Kiambu, Kenya</div>
        </div>
        <div
          style={{ maxHeight: "70px" }}
          className="flex mt-2 flex-wrap overflow-auto"
        >
          <Chip
            label="MS Word"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="MsExcel"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="Ms PowerPoint"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="Ms Access"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="Ms Publisher"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
          <Chip
            label="MS Paint"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "12px" }}
          />
        </div>
      </TabPanel>
    </Box>
  );
}
