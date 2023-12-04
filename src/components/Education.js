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
      <div className="absolute -top-7 h-7" id="education">
        Education
      </div>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          minWidth: "100px",
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
        <div className="flex space-x-2">
          <SchoolIcon color="primary" />
          <div className="text-sm md:text-md">
            Murang'a University of Technology
          </div>
        </div>
        <div className="flex space-x-2">
          <LibraryBooksIcon color="primary" />
          <div className="text-sm md:text-md">Bsc Software Engineering</div>
        </div>
        <div className="flex space-x-2">
          <TimelapseIcon color="primary" />
          <div className="text-sm md:text-md">2016 - 2022</div>
        </div>
        <div className="flex space-x-2">
          <PlaceIcon color="primary" />
          <div className="text-sm md:text-md">Murang'a, Kenya</div>
        </div>
        <div
          className="flex mt-2 flex-wrap overflow-auto"
          style={{ maxHeight: "70px" }}
        >
          <Chip
            label="Data Structures & Algorithms"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="Artificial Intelligence"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="Distributed Systems"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="Database Management Systems"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="Calculus"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="Probality & Statistics"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="Distributed Systems"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="Database Management Systems"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="Calculus"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="Probality & Statistics"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="Distributed Systems"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="Database Management Systems"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="Calculus"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="Probality & Statistics"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="flex space-x-2">
          <SchoolIcon color="primary" />
          <div className="text-sm md:text-md">
            St. Joseph's High School Githunguri
          </div>
        </div>
        <div className="flex space-x-2">
          <SportsScoreIcon color="primary" />
          <div className="text-sm md:text-md">B+</div>
        </div>
        <div className="flex space-x-2">
          <TimelapseIcon color="primary" />
          <div className="text-sm md:text-md">2012 - 2015</div>
        </div>
        <div className="flex space-x-2">
          <PlaceIcon color="primary" />
          <div className="text-sm md:text-md">Kiambu, Kenya</div>
        </div>
        <div
          style={{ maxHeight: "70px" }}
          className="flex mt-2 flex-wrap overflow-auto"
        >
          <Chip
            label="Mathematics"
            size="small"
            sx={{
              marginRight: "2px",
              marginTop: "2px",
              fontSize: "10px",
            }}
          />
          <Chip
            label="English"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="Kiswahili"
            size="small"
            sx={{
              marginRight: "2px",
              marginTop: "2px",
              fontSize: "10px",
            }}
          />
          <Chip
            label="Physics"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="Biology"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="Chemistry"
            size="small"
            sx={{
              marginRight: "2px",
              marginTop: "2px",
              fontSize: "10px",
            }}
          />
          <Chip
            label="Geography"
            size="small"
            sx={{
              marginRight: "2px",
              marginTop: "2px",
              fontSize: "10px",
            }}
          />
          <Chip
            label="Christian Religious Education (C.R.E)"
            size="small"
            sx={{
              marginRight: "2px",
              marginTop: "2px",
              color: "red",
              fontSize: "10px",
            }}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="flex space-x-2">
          <SchoolIcon color="primary" />
          <div className="text-sm md:text-md">Kongo Primary School</div>
        </div>
        <div className="flex space-x-2">
          <SportsScoreIcon color="primary" />
          <div className="text-sm md:text-md">340</div>
        </div>
        <div className="flex space-x-2">
          <TimelapseIcon color="primary" />
          <div className="text-sm md:text-md">2004 - 2011</div>
        </div>
        <div className="flex space-x-2">
          <PlaceIcon color="primary" />
          <div className="text-sm md:text-md">Kiambu, Kenya</div>
        </div>
        <div
          style={{ maxHeight: "70px" }}
          className="flex mt-2 flex-wrap overflow-auto"
        >
          <Chip
            label="Mathematics"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="English"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="Kiswahili"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="Social Studies & C.R.E"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="Science"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="flex space-x-2">
          <SchoolIcon color="primary" />
          <div className="text-sm md:text-md">Youtube</div>
        </div>
        <div className="flex space-x-2">
          <LibraryBooksIcon color="primary" />
          <div className="text-sm md:text-md">
            Frontend Web Development with the ReactJS ecosystem
          </div>
        </div>
        <div className="flex space-x-2">
          <TimelapseIcon color="primary" />
          <div className="text-sm md:text-md">2020 - Present</div>
        </div>
        <div className="flex space-x-2">
          <PlaceIcon color="primary" />
          <div className="text-sm md:text-md">Everywhere</div>
        </div>
        <div
          style={{ maxHeight: "70px" }}
          className="flex mt-2 flex-wrap overflow-auto"
        >
          <Chip
            label="HTML"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="CSS"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="JavaScript"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="React"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="Redux & Redux Toolkit"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="Tailwind"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="MaterialUI"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="Framer Motion"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className="flex space-x-2">
          <SchoolIcon color="primary" />
          <div className="text-sm md:text-md">
            Petanns Driving School and Computer College
          </div>
        </div>
        <div className="flex space-x-2">
          <LibraryBooksIcon color="primary" />
          <div className="text-sm md:text-md">Computer Packages</div>
        </div>
        <div className="flex space-x-2">
          <SportsScoreIcon color="primary" />
          <div className="text-sm md:text-md">A</div>
        </div>
        <div className="flex space-x-2">
          <TimelapseIcon color="primary" />
          <div className="text-sm md:text-md">2017</div>
        </div>
        <div className="flex space-x-2">
          <PlaceIcon color="primary" />
          <div className="text-sm md:text-md">Kiambu, Kenya</div>
        </div>
        <div
          style={{ maxHeight: "70px" }}
          className="flex mt-2 flex-wrap overflow-auto"
        >
          <Chip
            label="MS Word"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            size="small"
            label="MsExcel"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            label="Ms PowerPoint"
            size="small"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            size="small"
            label="Ms Access"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            size="small"
            label="Ms Publisher"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
          <Chip
            size="small"
            label="MS Paint"
            sx={{ marginRight: "2px", marginTop: "2px", fontSize: "10px" }}
          />
        </div>
      </TabPanel>
    </Box>
  );
}
