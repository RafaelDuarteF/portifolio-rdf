import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  mongodb,
  git,
  bizlogo,
  sclogo,
  scembedded,
  bizvision,
  isp4app,
  figma,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Trabalhos",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services: TService[] = [
  {
    title: "Desenvolvedor Web",
    icon: web,
  },
  {
    title: "Desenvolvedor React Native",
    icon: mobile,
  },
  {
    title: "Desenvolvedor Backend",
    icon: backend,
  },
  {
    title: "Bancos de Dados Relacionais",
    icon: mongodb,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Bancos de dados",
    icon: mongodb,
  },
  {
    name: "Laravel PHP",
    icon: backend,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences: TExperience[] = [
  {
    title: "Lead Developer Fullstack",
    companyName: "BizVision Tech",
    icon: bizlogo,
    iconBg: "#252525",
    date: "Agosto 2024 - Atualmente",
    points: [
      "Desenvolver e manter aplicativos web usando React.js",
      "Desenvolver e manter APIs RESTful usando Laravel PHP com Lúmen, e conexões com bancos de dados diversos",
      "Desenvolver e manter aplicativos mobile usando React Native",
      "Colaborar com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores, para criar produtos de alta qualidade.",
      "Implementar design responsivo e garantir a compatibilidade entre navegadores.",
      "Implementar mecanismos de segurança diversos, como proteção a ataques DDos, bots e vazamento de dados.",
    ],
  },
  {
    title: "Lead Developer Fullstack",
    companyName: "Soares Consulting",
    icon: sclogo,
    iconBg: "#252525",
    date: "Jan 2024 - Atualmente",
    points: [
      "Desenvolver e manter aplicativos web usando React.js",
      "Desenvolver e manter APIs RESTful usando Laravel PHP com Lúmen, e conexões com bancos de dados diversos",
      "Desenvolver e manter aplicativos mobile usando React Native",
      "Colaborar com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores, para criar produtos de alta qualidade.",
      "Implementar design responsivo e garantir a compatibilidade entre navegadores.",
      "Implementar mecanismos de segurança diversos, como proteção a ataques DDos, bots e vazamento de dados.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Depois que o Rafael entrou na empresa, deixamos de ser apenas consultoria e nos tornamos uma software house. Ele é um desenvolvedor incrível, mas além disso, um solucionador de problemas nato.",
    name: "Yago Soares",
    designation: "CEO",
    company: "Soares Consulting",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQE7gVBI460org/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1678372039827?e=1733356800&v=beta&t=H3SoTHkuC0Zkfep9VYvOFnCqCoB6gOKnESI5_ZtEKwk",
  },
];

const projects: TProject[] = [
  {
    name: "SCTech Embedded",
    description:
      "Plataforma baseada na web que permite a empresas organizarem a visualização de seus dashboards em Power BI dentro da plataforma, para seus usuários finais. A plataforma é personalizada para cada cliente, permitindo a adição de logotipos, cores e temas personalizados.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "powerbi-api",
        color: "green-text-gradient",
      },
    ],
    image: scembedded,
    sourceCodeLink: "https://portaldataholds.com/",
  },
  {
    name: "BizVision Tech",
    description:
      "Website para informatização da empresa BizVision, com o objetivo de apresentar seus serviços e produtos, além de permitir a solicitação de orçamentos e contato direto com a empresa.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: bizvision,
    sourceCodeLink: "https://bizvisiontech.com/",
  },
  {
    name: "ISP4pp",
    description:
      "Aplicativo mobile para visualização de dados de provedores de internet, com o objetivo de facilitar a visualização de dados de clientes, contratos e financeiro (principais KPI's). Além da visualização de alertas críticos da companhia.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: isp4app,
    sourceCodeLink: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
