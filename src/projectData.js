import AutoScriptImg from "./images/AutoScript.png";
import FoodguiderImg from "./images/Foodguider.png";
import HoteliqImg from "./images/Hoteliq.png";
import RevergImg from "./images/Reverg.png";

const projectData = [
  {
    id: 1,
    name: "AutoScript",
    image: AutoScriptImg,
    location: "Lyon",
    type: "Web Application",
    description:
      "AutoScript is a  bringing in a new way to measure tire wear with the aid of web development",
    industry: "Automotive",
    technologies: ["React", "JavaScript", "Express", "Node.js", "MySQL"],
    team: {
      Manager: "Tom Cruise",
      ScrumMaster: "Jane Doe",
      TechLead: "Mark zuckerberg",
      WebDeveloper: "",
      JuniorDeveloper: "Bill Gates",
      DevOps: "Steve Carrell",
    },
    contact: "AutoScript@mail.com",
    resources: "",
    employeeviews: 10,
    requestaccess: "Unavailable",
    status: 20,
  },
  {
    id: 2,
    name: "Foodguider",
    image: FoodguiderImg,
    location: "Berlin",
    type: "Web Application",
    description:
      "An app helping you to find the best food places near your location",
    industry: "Gastronomy",
    technologies: ["React", "JavaScript", "Express", "Node.js", "MongoDB"],
    team: {
      Manager: "Thomas Mueller",
      ScrumMaster: "Claudia Roth",
      TechLead: "Gordon Ramsay",
      WebDeveloper: "Shaun Pelling",
      JuniorDeveloper: "Emma Stone",
      DevOps: "Hugh Laurie",
    },
    contact: "Foodguider@mail.com",
    resources: "",
    employeeviews: "8",
    requestaccess: "Available",
    status: 40,
  },
  {
    id: 3,
    name: "Hoteliq",
    image: HoteliqImg,
    location: "Paris",
    type: "Web Application",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
    industry: "Hospitality",
    technologies: ["JavaScript", "React", "MUI", "Node.js", "MySQL"],
    team: {
      Manager: "Peter White",
      ScrumMaster: "John Smith",
      TechLead: "Maria Styles",
      WebDeveloper: "Liam Huff",
      JuniorDeveloper: "Mario Mendez",
      DevOps: "Luis Baker",
    },
    contact: "Hoteliq@mail.com",
    resources: "",
    employeeviews: 12,
    requestaccess: "Available",
    status: 80,
  },
  {
    id: 4,
    name: "Reverg",
    image: RevergImg,
    location: "Nantes",
    type: "Online store",
    description:
      "Building an online store for plate artworks. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    industry: "Web development",
    technologies: ["React", "JavaScript", "Express", "Node.js", "MongoDB"],
    team: {
      Manager: "Lydia Cortez",
      ScrumMaster: "Bob Ross",
      TechLead: "Jonathan Brown",
      WebDeveloper: "Anais Dufour",
      JuniorDeveloper: "Kelly Smith",
      DevOps: "Sebastian Haller",
    },
    contact: "reverg@mail.com",
    resources: "",
    employeeviews: 101,
    requestaccess: "Available",
    status: 60,
  },
];

export default projectData;
