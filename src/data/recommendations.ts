import RafaelPerozin from "../assets/recommendations/rafael-perozin.jpeg";
import LuisFelipe from "../assets/recommendations/luis-felipe.jpeg";
import AfonsoPimentel from "../assets/recommendations/afonso-pimentel.jpeg";
import LuizDoretto from "../assets/recommendations/luiz-doretto.jpeg";
import PauloBorges from "../assets/recommendations/paulo-borges.jpeg";
import LucasLima from "../assets/recommendations/lucas-lima.jpeg";

export interface Recommendation {
  id: number;
  text: string;
  image: string;
  name: string;
  occupation: string;
}

export const recommendationsData: Recommendation[] = [
  {
    id: 1,
    text: "I like Thiago's commitment. Only a few professional has such commitment and devotion. Thiago and I started talking because he asked me for some help with his CV, and in the end, we worked together for a few weeks. He started helping me with a personal project for free to learn, and due to his excellent performance converting designs into code, he became a paid freelancer and got more responsibilities in the project. He is definitely a developer with a brilliant future. I would love to work with him again someday.",
    image: RafaelPerozin,
    name: "Rafael Perozin",
    occupation: "Software Development Manager",
  },
  {
    id: 2,
    text: "Thiago is an excellent professional, very dedicated and careful with projects, always striving to deliver the best possible outcome. He has a good code organization and a great proactivity which allows him to raise the level of the team in relation to projects and studies. I also see that he has a lot of curiosity in learning new things and applying what he has learned, and he is a great colleague for any team. There is nothing better than a highly dedicated and friendly professional who fits in perfectly with any project. In short, a developer with a bright future ahead.",
    image: LuisFelipe,
    name: "Luís Felipe Silva",
    occupation: "Mobile Developer",
  },
  {
    id: 3,
    text: "When we started working together, Thiago was always willing to help in any way he could. If he couldn't, he would go after learning what was necessary to be able to collaborate. Your organization and communication are exceptional, and have helped a lot on all projects. He always shows care for them, and tries to understand everything in the best way, in order to be able to communicate even something that we had not seen. His role is indispensable in a Scrum team, not only for his role, but also for his empathy, humility and understanding.",
    image: AfonsoPimentel,
    name: "Afonso Pimentel",
    occupation: "Product Owner",
  },
  {
    id: 4,
    text: "Thiago has one of the greatest thirsts for knowledge I have ever witnessed. Dedicated with deadlines, work clean and well done. Always seeks to ask for revisions to improve the service, delivers feedback clearly and always in the best way. Excellent professional, outstanding within any company!",
    image: LuizDoretto,
    name: "Luiz Henrique Doretto",
    occupation: "Frontend Developer",
  },
  {
    id: 5,
    text: "Cabral, in addition to being a very prepared and dedicated guy, was extremely proactive and had a desire to learn and contribute more and more. An example of persistence and organization, it was an honor to work alongside him!",
    image: PauloBorges,
    name: "Paulo Borges",
    occupation: "Software Engineer",
  },
  {
    id: 6,
    text: "I recently worked with Thiago and everything went very well. He is proactive, a programmer who insists on the search for problem solving, also with those with more complicated tasks, which can take a long time. He is a very communicative person, without problems with this and other soft-skills, trying to understand how the team is progressing, suggesting improvements and helping those who need it. I highly recommend him, he is an excellent professional.",
    image: LucasLima,
    name: "Lucas de Lima",
    occupation: "Mobile Developer",
  },
];
