type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Rafael Duarte - Portfólio",
    fullName: "Rafael Duarte de Freitas",
    email: "rafa.duartef@outlook.com",
  },
  hero: {
    name: "Rafael Duarte",
    p: [
      "Sou um desenvolvedor fullstack web e mobile, especialista",
      "em Laravel PHP, MySQL, React e React Native.",
    ],
  },
  contact: {
    p: "Entre em contato",
    h2: "Contato.",
    form: {
      name: {
        span: "Seu Nome",
        placeholder: "Qual é o seu nome?",
      },
      email: { span: "Seu Email", placeholder: "Qual é o seu email?" },
      message: {
        span: "Sua Mensagem",
        placeholder: "O que você gostaria de dizer?",
      },
    },
  },
  sections: {
    about: {
      p: "Introdução",
      h2: "Visão Geral.",
      content: `Sou um desenvolvedor de software mobile & web fullstack experiente em
      JavaScript, PHP e bancos de dados como SQLServer, MySql entre outros. Com especialização em React JS, React Native, Laravel PHP e MySql. Sou um aprendiz rápido e colaboro de perto com os clientes para
      criar soluções eficientes, escaláveis e amigáveis que resolvem
      problemas do mundo real. Vamos trabalhar juntos para trazer suas ideias à vida!`,
    },
    experience: {
      p: "O que já fiz até agora",
      h2: "Experiência de Trabalho.",
    },
    feedbacks: {
      p: "O que outros dizem",
      h2: "Depoimentos.",
    },
    works: {
      p: "Meu trabalho",
      h2: "Projetos.",
      content: `Os projetos a seguir mostram algumas das minhas habilidades e experiência através de
      exemplos práticos do meu trabalho. Cada projeto é descrito brevemente com
      links para visualização. Eles refletem minha
      capacidade de resolver problemas complexos, trabalhar com diferentes tecnologias
      e gerenciar projetos de forma eficaz.`,
    },
  },
};
