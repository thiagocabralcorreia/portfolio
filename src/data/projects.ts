import Scoutfy from "../assets/projects/project-scoutfy0.png";
import Caule from "../assets/projects/project-caule0.png";
import CoffeeHouse from "../assets/projects/project-coffeehouse0.png";
import WeeTravel from "../assets/projects/project-weetravel0.png";
import FilmNChips from "../assets/projects/project-film-n-chips0.png";
import APPqd from "../assets/projects/project-appqd0.png";
import WA from "../assets/projects/project-wa0.png";
import GoFinances from "../assets/projects/project-gofinances0.png";
import Portfolio from "../assets/projects/project-portfolio0.png";
import DevMeetup from "../assets/projects/project-devmeetup0.png";
import ComidaNaHora from "../assets/projects/project-cnh0.png";

export interface ProjecSchema {
  id?: string;
  title: string;
  category: string;
  image: string;
  onClick?: () => void;
}

export const enIntroProjectsData = {
  title: "Projects",
  description: "Here are a few professional and personal projects I’ve built.",
  filter: "You can filter them by category.",
};

export const ptIntroProjectsData = {
  title: "Projetos",
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
    id: "dev-meetup",
    title: "DevMeetup",
    category: "Web",
    image: DevMeetup,
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
    id: "cnh",
    title: "Comida na Hora",
    category: "Mobile",
    image: ComidaNaHora,
  },
  {
    id: "portfolio",
    title: "Portfolio",
    category: "Web",
    image: Portfolio,
  },
  {
    id: "web-accessibility",
    title: "Web Accessibility",
    category: "Web",
    image: WA,
  },
  {
    id: "gofinances",
    title: "GoFinances",
    category: "Mobile",
    image: GoFinances,
  },
];
