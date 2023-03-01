import Scoutfy1 from "../assets/projects/project-scoutfy1.png";
import Scoutfy2 from "../assets/projects/project-scoutfy2.png";
import Caule1 from "../assets/projects/project-caule1.png";
import Caule2 from "../assets/projects/project-caule2.png";
import CoffeeHouse1 from "../assets/projects/project-coffeehouse1.png";
import CoffeeHouse2 from "../assets/projects/project-coffeehouse2.png";
import CoffeeHouse3 from "../assets/projects/project-coffeehouse3.png";
import WeeTravel1 from "../assets/projects/project-weetravel1.png";
import WeeTravel2 from "../assets/projects/project-weetravel2.png";
import FilmNChips1 from "../assets/projects/project-film-n-chips1.png";
import FilmNChips2 from "../assets/projects/project-film-n-chips2.png";
import FilmNChips3 from "../assets/projects/project-film-n-chips3.png";
import APPqd1 from "../assets/projects/project-appqd1.png";
import APPqd2 from "../assets/projects/project-appqd2.png";
import WA1 from "../assets/projects/project-wa1.png";
import WA2 from "../assets/projects/project-wa2.png";
import WA3 from "../assets/projects/project-wa3.png";
import GoFinances1 from "../assets/projects/project-gofinances2.png";
import GoFinances2 from "../assets/projects/project-gofinances3.png";
import Portfolio1 from "../assets/projects/project-portfolio1.png";
import Portfolio2 from "../assets/projects/project-portfolio2.png";
import Portfolio3 from "../assets/projects/project-portfolio3.png";

export interface ProjectText {
  id: string;
  text: string;
}

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
}

export interface ProjectDetailsSchema {
  id: string;
  name: string;
  date: string;
  type: string;
  professional: boolean;
  skills: string[];
  about: ProjectText[];
  website?: string;
  github?: string;
  appleStore?: string;
  playStore?: string;
  images: ProjectImage[];
}

export const projectDetailsData = [
  {
    id: "scoutfy",
    name: "Scoutfy",
    date: "Jul 2021 - Apr 2022",
    type: "Web Application",
    professional: true,
    skills: [
      "Next.js",
      "Responsive Web Design",
      "Styled-Components",
      "Storybook",
      "Redux Toolkit",
      "CI/CD",
      "Vercel",
    ],
    about: [
      {
        id: "scoutfy1",
        text: "This was the first website I developed as a team, in my first job, one of my biggest learnings, a grandiose project.",
      },
      {
        id: "scoutfy2",
        text: "Scoutfy is an intuitive sports management platform for amateurs to high-performance athletes, who can build a sports summary, apply for grants and sponsorships, contact the community, manage affiliations, members, events, competitions, teams, commission members, subscriptions and staff.",
      },
      {
        id: "scoutfy3",
        text: "Scoutfy is an intuitive sports management platform for amateurs to high-performance athletes, who can build a sports summary, apply for grants and sponsorships, contact the community, manage affiliations, members, events, competitions, teams, commission members, subscriptions and staff.",
      },
    ],
    website: "https://scoutfy.webflow.io",
    github: "",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "scoutfy1.png",
        src: Scoutfy1,
        alt: "Scoutfy logo",
      },
      {
        id: "scoutfy2.png",
        src: Scoutfy2,
        alt: "Scoutfy website login page",
      },
    ],
  },
  {
    id: "caule",
    name: "Caule",
    date: "Aug 2022 - Feb 2023",
    type: "Mobile Application",
    professional: true,
    skills: [
      "React Native",
      "TypeScript",
      "REST API",
      "Styled-Components",
      "GitLab",
    ],
    about: [
      {
        id: "scoutfy1",
        text: "One of the most ambitious projects I've been a part of. When joining the Nano Incub team, my first challenge was to work on the mobile development of this complete business platform, Caule, used by more than 25,000 employees from the biggest mills in the country.",
      },
      {
        id: "scoutfy2",
        text: "Caule is a mobile application tailored for large corporations that have thousands of employees geographically distributed (in the office, in the countryside, remotely), making life easier for both employer and employee.",
      },
      {
        id: "scoutfy3",
        text: "Through the app, employees can access payroll and annual leave, receive handouts, distribute institutional content and several other custom functionalities - all integrated with the main Enterprise Resource Planning’s on the market (SAP, Totvs, and Senior). It's implementation brings high performance against the slowness of bureaucratic processes.",
      },
    ],
    website: "https://caule.app",
    github: "",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "caule1.png",
        src: Caule1,
        alt: "Smartphones with Caule App screens",
      },
      {
        id: "caule2.png",
        src: Caule2,
        alt: "Smartphones with Caule App screens",
      },
    ],
  },
  {
    id: "coffee-house",
    name: "CoffeeHouse",
    date: "Sep 2021 - Nov 2021",
    type: "Web Application",
    professional: false,
    skills: [
      "React.js",
      "Responsive Web Design",
      "Context API",
      "JavaScript",
      "HTML",
      "SASS",
      "Photoshop",
      "Illustrator",
    ],
    about: [
      {
        id: "ch1",
        text: "This was my first personal project, built from scratch with my ideas and design As a coffee lover, I was super excited to create a fictional London coffee shop chain: brand, visual identity, menu and addresses. I even elaborated the graphic arts with signs, facades and banners of this site, edited with Adobe Photoshop.",
      },
      {
        id: "ch2",
        text: "It was a challenging and really fun way to put my knowledge of React.js into practice. Among the features: responsive design using Sass, an infinite Image slider, mobile menu, gallery grid with slideshow modal, an adresses page using store filter, coffee quiz with score, contact form and newsletter subscribe with validation, menu page with context, css animations and charts.",
      },
    ],
    website: "https://coffeehouse-website-kohl.vercel.app",
    github: "https://github.com/thiagocabralcorreia/coffeehouse-website",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "coffeehouse1.png",
        src: CoffeeHouse1,
        alt: "CoffeeHouse website page",
      },
      {
        id: "coffeehouse2.png",
        src: CoffeeHouse2,
        alt: "CoffeeHouse website page",
      },

      {
        id: "coffeehouse3.png",
        src: CoffeeHouse3,
        alt: "CoffeeHouse website page",
      },
    ],
  },
  {
    id: "wee-travel",
    name: "Wee Travel",
    date: "Apr 2021 - Aug 2021",
    type: "Mobile Application",
    professional: true,
    skills: [
      "React Native",
      "Styled-Components",
      "JavaScrip",
      "Redux",
      "GitHub",
    ],
    about: [
      {
        id: "wee1",
        text: "My first professional project with React Native. A corporate travel management mobile app with up-to-date information about airlines, OBT (Online booking travel) and Enterprise Resource Planning, accessed by different profiles, such as travel manager, cost center manager and traveler.",
      },
    ],
    website: "",
    github: "",
    appleStore: "",
    playStore: "https://apkpure.com/wee-gestão/com.weetechapp",
    images: [
      {
        id: "weetravel1.png",
        src: WeeTravel1,
        alt: "Smartphones with WeeTravel App screens",
      },
      {
        id: "weetravel2.png",
        src: WeeTravel2,
        alt: "Smartphones with WeeTravel App screens",
      },
    ],
  },
  {
    id: "film-n-chips",
    name: "Film N Chips",
    date: "Jul 2022",
    type: "Web Application",
    professional: false,
    skills: [
      "React.js",
      "Responsive Web Design",
      "TypeScript",
      "REST API",
      "Redux Toolkit",
      "Styled-Components",
      "Vercel Deploy",
    ],
    about: [
      {
        id: "film1",
        text: "After finishing a Udemy course, React Redux, I decided to put what I learned into practice. Fascinated by movies, I created my own movie website, with data from the IMDb API.",
      },
      {
        id: "film2",
        text: "This is a movie database site. Online movie-related data like movie specs, plot, cast, posters, ratings, and more. Website deployed on Vercel. This API only allows 1,000 requests per day.",
      },
    ],
    website: "https://film-and-chips-website.vercel.app",
    github: "https://github.com/thiagocabralcorreia/film-and-chips-website",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "film-n-chips1.png",
        src: FilmNChips1,
        alt: "Film N Chips website page",
      },
      {
        id: "film-n-chips2.png",
        src: FilmNChips2,
        alt: "Film N Chips website page",
      },

      {
        id: "film-n-chips3.png",
        src: FilmNChips3,
        alt: "Film N Chips website page",
      },
    ],
  },
  {
    id: "appqd",
    name: "APPqd",
    date: "Apr 2021 - Aug 2021",
    type: "Mobile Application",
    professional: true,
    skills: [
      "React Native",
      "Styled-Components",
      "JavaScrip",
      "Redux",
      "GitHub",
    ],
    about: [
      {
        id: "appqd1",
        text: "My second professional mobile app project, at NB Consulting IT. This is a very unique app, a logbook that helps skydivers. Among the various features, there are simulators, wing loading calculator, wind and weather forecast, data notebook and jump equipment.",
      },
      {
        id: "appqd2",
        text: "The user interface is very simple and beautiful, and I remember hearing a lot of praise from satisfied customers.",
      },
    ],
    website: "",
    github: "",
    appleStore:
      "https://apps.apple.com/hr/app/appqd-skydive-e-base-jump/id1548125179?l=hr",
    playStore: "https://play.google.com/store/apps/details?id=com.appqd",
    images: [
      {
        id: "appqd1.png",
        src: APPqd1,
        alt: "Smartphones with APPqd screens",
      },
      {
        id: "appqd2.png",
        src: APPqd2,
        alt: "Smartphones with APPqd screens",
      },
    ],
  },
  {
    id: "web-accessibility",
    name: "Web Accessibility",
    date: "Jul 2022",
    type: "Web Application",
    professional: false,
    skills: [
      "Next.js",
      "Responsive Web Design",
      "TypeScript",
      "Tailwind CSS",
      "Apiary",
      "AAA",
      "UX/UI",
      "Vercel",
    ],
    about: [
      {
        id: "wa1",
        text: "This responsive website was planned and developed in order to achieve theoretical knowledge and practical study on web accessibility, following good practices, such as use of contrast, alternative theme, understandable interface and easy navigation, with keyboard interaction.",
      },
      {
        id: "wa2",
        text: "Among the applied technologies, I used Next.js 13 and the new experimental features, including the new way to fetch data and handle promises inside components. Simple, well-readable user interface with a focus on user experience. I used Apiary as the API design stack to simulate data fetching. ",
      },
    ],
    website: "https://web-accessibility-nine.vercel.app",
    github: "https://github.com/thiagocabralcorreia/web-accessibility",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "wa1.png",
        src: WA1,
        alt: "Web Accessibility website page",
      },
      {
        id: "wa2.png",
        src: WA2,
        alt: "Web Accessibility website page",
      },

      {
        id: "wa3.png",
        src: WA3,
        alt: "Web Accessibility website page",
      },
    ],
  },
  {
    id: "gofinances",
    name: "GoFinances",
    date: "Sep 2022 - Oct 2022",
    type: "Mobile Application",
    professional: false,
    skills: [
      "React Native",
      "TypeScript",
      "Expo",
      "Styled-Components",
      "Social Login",
      "UX/UI",
    ],
    about: [
      {
        id: "finance1",
        text: "Another study mission. Through Rocketseat Ignite course, I developed an mobile app for user's personal finances management, including inflows/outflows cards, monthly summary chart and social login authentication.",
      },
      {
        id: "finance2",
        text: "I reviewed and practiced TypeScript and Styled-Components, learned about authentication with Google and Apple accounts, store with AsyncStorage, use of chart with date filters and Yup validation.",
      },
    ],
    website: "",
    github: "https://github.com/thiagocabralcorreia/gofinances-app",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "gofinances1.png",
        src: GoFinances1,
        alt: "Smartphones with GoFinances app screens",
      },
      {
        id: "gofinances2.png",
        src: GoFinances2,
        alt: "Smartphones with GoFinances app screens",
      },
    ],
  },
  {
    id: "portfolio",
    name: "Portfolio",
    date: "Feb 2022",
    type: "Web Application",
    professional: false,
    skills: [
      "React.js",
      "Responsive Web Design",
      "TypeScript",
      "Taildwind CSS",
      "UX/UI",
      "EmailJS",
      "Vercel Deploy",
    ],
    about: [
      {
        id: "portfolio1",
        text: "I'm proud of the work I put into this project and I hope it serves as a great representation of my skills and experience.",
      },
      {
        id: "portfolio2",
        text: "Built with React.js, TypeScript and Tailwind, this website is fully responsive and includes downloadable resume, links to social media profiles, introduction section, skills list, project grid, detailed project pages, recommendation slider, and contact form powered by EmailJS.",
      },
      {
        id: "portfolio3",
        text: "To enhance the user experience, I incorporated Framer Motion for smooth animations and React Scroll for seamless scrolling between sections.",
      },
    ],
    website: "https://thiagocabralcorreia.vercel.app",
    github: "https://github.com/thiagocabralcorreia/portfolio",
    appleStore: "",
    playStore: "",
    images: [
      {
        id: "portfolio1.png",
        src: Portfolio1,
        alt: "Portfolio website home page",
      },
      {
        id: "portfolio2.png",
        src: Portfolio2,
        alt: "Portfolio website project grid",
      },
      {
        id: "portfolio3.png",
        src: Portfolio3,
        alt: "Portfolio website contact and recommendations",
      },
    ],
  },
];
