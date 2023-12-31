import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Chip } from "@mui/material";
import { institutionsData } from "../data/education";
import { useState } from "react";
import DelayAnimation from "./animations/DelayAnimation";
import HeadingAnimation from "./animations/HeadingAnimation";

// Tab panels for our tab
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
        <Box
          sx={{
            p: 2,
            color: "black",
          }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// TypeScript tings
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// Props for our Tabs
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
    sx: { color: "black" },
  };
}

// Our main componet
export default function Education() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // This approach appealed to me since it eliminated a lot of Lines of Code (LOCs), from 678 to 148
  // Maintenance will also be easier and quicker. Couldn't feel prouder.
  const tabPanels = institutionsData.map((institutionData, index) => {
    return (
      <TabPanel value={value} index={index} key={index}>
        {institutionData["mainData"].map((item, index) => {
          // It's very important that OurIcon starts with a capital letter just like normal component-naming convention
          const [OurIcon, ourText] = item;
          return (
            <div className="flex" key={index}>
              {/* This icon will only show on medium-sized devices and larger */}
              <div className="hidden md:block mr-2">
                <OurIcon color="primary" fontSize="medium" />
              </div>
              {/* This icon will only show on small devices and lower */}
              <div className="md:hidden mr-2">
                <OurIcon color="primary" fontSize="small" />
              </div>
              <div
                className="text-sm md:text-md"
                style={{ lineHeight: "28px" }}
              >
                {ourText}
              </div>
            </div>
          );
        })}

        {/* Here are our subjects/units covered in the institution  */}
        <div
          className="flex mt-2 mr-2 flex-wrap overflow-auto"
          style={{
            maxHeight: "70px",
          }}
        >
          {institutionData["units"].map((unit, index) => {
            return (
              <div className="w-full">
                <Chip
                  key={index}
                  label={unit}
                  sx={{
                    padding: "2px",
                    marginRight: "2px",
                    marginLeft: "28px",
                    marginTop: "2px",
                    fontSize: "10px",
                    height: "auto",
                    "& .MuiChip-label": {
                      display: "block",
                      whiteSpace: "normal",
                    },
                  }}
                />
              </div>
            );
          })}
        </div>
      </TabPanel>
    );
  });

  // This is our tab (our Education Component)
  return (
    <DelayAnimation delay={0}>
      <Box
        id="education"
        sx={{
          bgcolor: "background.paper",
          display: "flex",
          height: "240px",
          marginBottom: "50px",
          marginTop: "80px",
          marginX: "auto",
          position: "relative",
        }}
      >
        {/* We will include the same element multiple times and only show them at the intended breakpoints  */}
        {/* This will only show on large devices and above */}
        <HeadingAnimation
          fontSize="18px"
          lineHeight="27px"
          letterSpacing="3px"
          wordSpacing="6px"
          left={"-10%"}
          top="-40px"
        >
          <div className="text-sky-400 font-semibold hidden lg:block">
            Education
          </div>
        </HeadingAnimation>

        {/* This will only show on small and medium-sized devices */}
        <HeadingAnimation
          fontSize="16px"
          lineHeight="24px"
          letterSpacing="2px"
          wordSpacing="4px"
          left={"0%"}
          top="-40px"
        >
          <div className="text-sky-400 font-semibold hidden sm:block lg:hidden">
            Education
          </div>
        </HeadingAnimation>

        {/* This will only show on mobile phones and smaller devices */}
        <HeadingAnimation
          fontSize="14px"
          lineHeight="21px"
          letterSpacing="1px"
          wordSpacing="2px"
          top="-40px"
          left="2px"
        >
          <div className="text-sky-400 font-semibold sm:hidden">Education</div>
        </HeadingAnimation>

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
            bgcolor: "darkGreen",
          }}
        >
          <Tab label="University" {...a11yProps(0)} />
          <Tab label="Secondary" {...a11yProps(1)} />
          <Tab label="Primary" {...a11yProps(2)} />
          <Tab label="YouTube" {...a11yProps(3)} />
          <Tab label="Petanns" {...a11yProps(4)} />
        </Tabs>
        {/* I consider this implementation a masterpiece. Updating anything here will be abreeze in the future */}
        {tabPanels}
      </Box>
    </DelayAnimation>
  );
}
