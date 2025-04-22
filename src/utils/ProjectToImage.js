import copilotdesktop from "../assets/images/CopilotDesktop.png";
import windowssearchbox from "../assets/images/WSBCanvas.png";
import immigrationdash from "../assets/images/ImmigrationDash.png";
import globalteachingproject from "../assets/images/GlobalTeaching.png";
import portfolio from "../assets/images/Portfolio.png";

export const projectImage = (projName) => {
  switch (projName) {
    case "Copilot Desktop App":
      return copilotdesktop;
    case "Windows Search Box":
      return windowssearchbox;
    case "Immigration Dashboard":
      return immigrationdash;
    case "Personal Portfolio":
      return portfolio;
    case "GTP Scheduler":
      return globalteachingproject;
    default:
      break;
  }
};
