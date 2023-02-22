import Scoutfy from "../assets/project-scoutfy1.png";
import Caule from "../assets/project-caule1.png";
import CoffeeHouse from "../assets/project-coffeehouse1.png";
import WeeTravel from "../assets/project-weetravel1.png";
import FilmNChips from "../assets/project-film-n-chips1.png";
import APPqd from "../assets/project-appqd1.png";
import WA from "../assets/project-wa1.png";
import GoFinances from "../assets/project-gofinances1.png";

export interface ProjecSchema {
  id?: number;
  title: string;
  category: string;
  image: string;
}

export const projectsData = [
  {
    id: 1,
    title: "Scoutfy",
    category: "Web Application",
    image: Scoutfy,
  },
  {
    id: 2,
    title: "Caule App",
    category: "Mobile Application",
    image: Caule,
  },
  {
    id: 3,
    title: "CoffeeHouse",
    category: "Web Application",
    image: CoffeeHouse,
  },
  {
    id: 4,
    title: "Wee Travel",
    category: "Mobile Application",
    image: WeeTravel,
  },
  {
    id: 5,
    title: "Film N Chips",
    category: "Web Application",
    image: FilmNChips,
  },
  {
    id: 6,
    title: "APPqd",
    category: "Mobile Application",
    image: APPqd,
  },
  {
    id: 7,
    title: "Web Accessibility",
    category: "Web Application",
    image: WA,
  },
  {
    id: 8,
    title: "GoFinances",
    category: "Mobile Application",
    image: GoFinances,
  },
];
