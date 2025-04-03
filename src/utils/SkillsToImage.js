import bootstrap from "../assets/skills/bootstrap.svg";
import canva from "../assets/skills/canva.svg";
import csharp from "../assets/skills/csharp.svg";
import css from "../assets/skills/css.svg";
import git from "../assets/skills/git.svg";
import html from "../assets/skills/html.svg";
import java from "../assets/skills/java.svg";
import javascript from "../assets/skills/javascript.svg";
import markdown from "../assets/skills/markdown.svg";
import microsoftoffice from "../assets/skills/microsoftoffice.svg";
import mysql from "../assets/skills/mysql.svg";
import python from "../assets/skills/python.svg";
import react from "../assets/skills/react.svg";
import typescript from "../assets/skills/typescript.svg";
import vue from "../assets/skills/vue.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "bootstrap":
      return bootstrap;
    case "mysql":
      return mysql;
    case "c#":
      return csharp;
    case "java":
      return java;
    case "python":
      return python;
    case "git":
      return git;
    case "markdown":
      return markdown;
    case "microsoft office":
      return microsoftoffice;
    case "canva":
      return canva;
    case "vue":
      return vue;
    default:
      break;
  }
};
