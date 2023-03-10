import Scoutfy from "../assets/projects/project-scoutfy1.png";
import Caule from "../assets/projects/project-caule1.png";
import CoffeeHouse from "../assets/projects/project-coffeehouse1.png";
import WeeTravel from "../assets/projects/project-weetravel1.png";
import FilmNChips from "../assets/projects/project-film-n-chips1.png";
import APPqd from "../assets/projects/project-appqd1.png";
import WA from "../assets/projects/project-wa1.png";
import GoFinances from "../assets/projects/project-gofinances1.png";
import Portfolio1 from "../assets/projects/project-portfolio1.png";

export interface ProjecSchema {
  id?: string;
  title: string;
  category: string;
  image: string;
  onClick?: () => void;
}

export const projectsData = [
  {
    id: "scoutfy",
    title: "Scoutfy",
    category: "Web Application",
    image: Scoutfy,
  },
  {
    id: "caule",
    title: "Caule App",
    category: "Mobile Application",
    image: Caule,
  },
  {
    id: "coffee-house",
    title: "CoffeeHouse",
    category: "Web Application",
    image: CoffeeHouse,
  },
  {
    id: "wee-travel",
    title: "Wee Travel",
    category: "Mobile Application",
    image: WeeTravel,
  },
  {
    id: "web-accessibility",
    title: "Web Accessibility",
    category: "Web Application",
    image: WA,
  },
  {
    id: "appqd",
    title: "APPqd",
    category: "Mobile Application",
    image: APPqd,
  },
  {
    id: "film-n-chips",
    title: "Film N Chips",
    category: "Web Application",
    image: FilmNChips,
  },
  {
    id: "gofinances",
    title: "GoFinances",
    category: "Mobile Application",
    image: GoFinances,
  },

  {
    id: "portfolio",
    title: "Portfolio",
    category: "Web Application",
    image: Portfolio1,
  },
];
