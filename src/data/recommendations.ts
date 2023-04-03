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

export const enRecommendationsData: Recommendation[] = [
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
    text: "When we started working together, Thiago was always willing to help in any way he could. If he couldn't, he would go after learning what was necessary to be able to collaborate. Your organization and communication are exceptional, and have helped a lot on All. He always shows care for them, and tries to understand everything in the best way, in order to be able to communicate even something that we had not seen. His role is indispensable in a Scrum team, not only for his role, but also for his empathy, humility and understanding.",
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

export const ptRecommendationsData: Recommendation[] = [
  {
    id: 1,
    text: "Gosto do comprometimento do Thiago. Poucos profissionais possuem tal dedicação. Thiago e eu começamos a conversar porque na época ele me pediu ajuda com seu currículo e, no final, trabalhamos juntos em algumas semanas. Ele começou a me ajudar em um projeto pessoal gratuitamente para aprender e, devido ao seu excelente desempenho na conversão de designs em código, tornou-se um freelancer remunerado e assumiu mais responsabilidades no projeto. Ele é definitivamente um desenvolvedor com um futuro brilhante. Adoraria trabalhar com ele novamente um dia.",
    image: RafaelPerozin,
    name: "Rafael Perozin",
    occupation: "Gerente de Desenvolvimento de Software",
  },
  {
    id: 2,
    text: "Thiago é um excelente profissional, muito dedicado e cuidadoso com os projetos, sempre se esforçando para entregar o melhor resultado possível. Ele tem uma ótima organização de código e uma grande proatividade, o que lhe permite elevar o nível da equipe em relação a projetos e estudos. Também percebo que ele tem muita curiosidade em aprender coisas novas e aplicar o que aprendeu, além de um ótimo colega de equipe. Não há nada melhor do que um profissional altamente dedicado e parceiro que se encaixa perfeitamente em qualquer projeto. Em resumo, um desenvolvedor com um grande futuro.",
    image: LuisFelipe,
    name: "Luís Felipe Silva",
    occupation: "Desenvolvedor Mobile",
  },
  {
    id: 3,
    text: "Quando começamos a trabalhar juntos, Thiago sempre se mostrou disposto a ajudar como podia. Se não podia, ia atrás de aprender o necessário pra poder colaborar. Sua organização e sua comunicação são excepcionais, e acrescentaram bastante em todos os projetos. Sempre demonstra cuidado com eles, e busca entender tudo da melhor forma, para poder comunicar até algo que não havíamos visto, o que sempre acaba contribuindo bastante. Seu papel é indispensável numa equipe SCRUM, não apenas pela sua função, mas também pela sua empatia, humildade e compreensão.",
    image: AfonsoPimentel,
    name: "Afonso Pimentel",
    occupation: "Product Owner",
  },
  {
    id: 4,
    text: "Thiago tem uma das maiores sedes de conhecimento que eu já presenciei. Dedicado com deadlines, trabalho limpo e bem feito. Procura sempre pedir revisões para melhorar o serviço, entrega feedbacks com clareza e sempre da melhor maneira. Excelente profissional e que busca sempre crescer, um destaque dentro de qualquer empresa!",
    image: LuizDoretto,
    name: "Luiz Henrique Doretto",
    occupation: "Desenvolvedor Frontend",
  },
  {
    id: 5,
    text: "Cabral, além de ser um cara extremamente preparado e dedicado, era extremamente proativo e tinha um desejo por aprender e contribuir cada vez mais, um exemplo de persistência e organização. Uma honra trabalhar ao seu lado!",
    image: PauloBorges,
    name: "Paulo Borges",
    occupation: "Engenheiro de Software",
  },
  {
    id: 6,
    text: "Trabalhei recentemente com o Thiago e tudo correu muito bem. Ele é proativo, um programador que insiste na busca pela resolução de problemas, mesmo com aqueles com tarefas mais complicadas, que podem demorar muito. É uma pessoa muito comunicativa, sem problemas com esta e outras soft-skills, tentando perceber como está a evolução da equipe, sugerindo melhorias e ajudando quem precisa. Recomendo muito, é um excelente profissional.",
    image: LucasLima,
    name: "Lucas de Lima",
    occupation: "Desenvolvedor Mobile",
  },
];
