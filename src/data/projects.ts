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

export const enIntroProjectsData = {
  title: "PROJECTS",
  description: "Here are a few professional and personal projects I’ve built.",
  filter: "You can filter them by category.",
};

export const ptIntroProjectsData = {
  title: "PROJETOS",
  description:
    "Aqui estão alguns projetos profissionais e pessoais que eu desenvolvi.",
  filter: "Você pode filtrá-los por categoria.",
};

export const projectsData = [
  {
    id: "scoutfy",
    title: "Scoutfy",
    category: "Web",
    image: Scoutfy,
  },
  {
    id: "caule",
    title: "Caule App",
    category: "Mobile",
    image: Caule,
  },
  {
    id: "coffee-house",
    title: "CoffeeHouse",
    category: "Web",
    image: CoffeeHouse,
  },
  {
    id: "wee-travel",
    title: "Wee Travel",
    category: "Mobile",
    image: WeeTravel,
  },
  {
    id: "web-accessibility",
    title: "Web Accessibility",
    category: "Web",
    image: WA,
  },
  {
    id: "appqd",
    title: "APPqd",
    category: "Mobile",
    image: APPqd,
  },
  {
    id: "film-n-chips",
    title: "Film N Chips",
    category: "Web",
    image: FilmNChips,
  },
  {
    id: "gofinances",
    title: "GoFinances",
    category: "Mobile",
    image: GoFinances,
  },

  {
    id: "portfolio",
    title: "Portfolio",
    category: "Web",
    image: Portfolio1,
  },
];
