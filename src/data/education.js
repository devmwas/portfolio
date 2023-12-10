import PlaceIcon from "@mui/icons-material/Place";
import SchoolIcon from "@mui/icons-material/School";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

// All education data is contained in this file since the Education component was becoming too huge
const collegeUnits = [
  "Data Structures & Algorithms",
  "Artificial Intelligence",
  "Distributed Systems",
  "Database Management Systems",
  "Calculus",
  "Probality & Statistics",
  "Distributed Systems",
  "Object Oriented Programming",
  "Object Oriented Analysis & Design",
  "Human Computer Interaction",
  "Network Practicum",
  "Network Design",
  "Machine Learning",
  "Research Methods in Computing",
  "Project",
  "Cryptology",
  "System Analysis & Design",
  "Web Development",
  "Software Quality Assurance",
  "Database Management Systems",
  "Database Practicum",
  "Open Source Trends",
  "Knowledge Based Systems",
  "Business Process Outsourcing",
  "Design & Analysis of Algorithms",
  "Business Intelligence",
];

const highSchoolUnits = [
  "Mathematics",
  "English",
  "Kiswahili",
  "Physics",
  "Biology",
  "Chemistry",
  "Geography",
  "Christian Religious Education (C.R.E)",
];

const primarySchoolUnits = [
  "Mathematics",
  "English",
  "Kiswahili",
  "Science",
  "Social Studies & Christian Religious Education (C.R.E)",
];

const youtubeUnits = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux & Redux Toolkit",
  "Tailwind",
  "MaterialUI",
  "Framer Motion",
  "Python",
];

const petannsUnits = [
  "MS Word",
  "Ms Excel",
  "Ms PowerPoint",
  "Ms Access",
  "Ms Publisher",
  "Ms Paint",
];

// We include the piece of data and an icon
export const institutionsData = [
  {
    mainData: [
      [SchoolIcon, "Murang'a University of Technology"],
      [LibraryBooksIcon, "Bsc Software Engineering"],
      [TimelapseIcon, "2016 - 2022"],
      [PlaceIcon, "Murang'a, Kenya."],
    ],
    units: collegeUnits,
  },
  {
    mainData: [
      [SchoolIcon, "St. Joseph's High School Githunguri"],
      [SportsScoreIcon, "B+"],
      [TimelapseIcon, "2012 - 2015"],
      [PlaceIcon, "Kiambu, Kenya."],
    ],
    units: highSchoolUnits,
  },
  {
    mainData: [
      [SchoolIcon, "Kongo Primary School"],
      [SportsScoreIcon, "340"],
      [TimelapseIcon, "2004 - 2011"],
      [PlaceIcon, "Kiambu, Kenya."],
    ],
    units: primarySchoolUnits,
  },
  {
    mainData: [
      [SchoolIcon, "Youtube"],
      [LibraryBooksIcon, "Frontend Web Development"],
      [TimelapseIcon, "2020 - Present"],
      [PlaceIcon, "Anywhere."],
    ],
    units: youtubeUnits,
  },
  {
    mainData: [
      [SchoolIcon, "Petanns Driving School and Computer College"],
      [LibraryBooksIcon, "Computer Packages"],
      //   [SportsScoreIcon, "A"],
      [TimelapseIcon, "2017"],
      [PlaceIcon, "Kiambu, Kenya."],
    ],
    units: petannsUnits,
  },
];
