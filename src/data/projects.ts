import Scoutfy from "../assets/project-scoutfy1.png";
import Caule from "../assets/project-caule1.png";
import CoffeeHouse from "../assets/project-coffeehouse1.png";
import WeeTravel from "../assets/project-weetravel1.png";
import FilmNChips from "../assets/project-film-n-chips1.png";
import APPqd from "../assets/project-appqd1.png";
import WA from "../assets/project-wa1.png";
import GoFinances from "../assets/project-gofinances1.png";

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
    id: "film-n-chips",
    title: "Film N Chips",
    category: "Web Application",
    image: FilmNChips,
  },
  {
    id: "appqd",
    title: "APPqd",
    category: "Mobile Application",
    image: APPqd,
  },
  {
    id: "web-accessibility",
    title: "Web Accessibility",
    category: "Web Application",
    image: WA,
  },
  {
    id: "gofinances",
    title: "GoFinances",
    category: "Mobile Application",
    image: GoFinances,
  },
];
