export type Locale = "pt" | "en";

export const translations = {
  pt: {
    nav: {
      home: "Início",
      technologies: "Tecnologias",
      experience: "Experiência",
      portfolio: "Portfólio",
      contact: "Contato",
    },
    theme: {
      light: "Claro",
      dark: "Escuro",
    },
    hero: {
      welcome: "Bem-vindo!",
      name: "Eu sou Andrei Ramos Lopes",
      role: "Desenvolvedor de software",
      description:
        "Sou graduando em Ciência da Computação pela Universidade Federal do Maranhão (UFMA), com experiência em desenvolvimento web e mobile.",
    },
    technologies: {
      title: "Tecnologias",
      description:
        "Tenho conhecimentos principalmente em desenvolvimento web e mobile, e ao longo do tempo aprendi acerca de diversas tecnologias, sendo as principais:",
    },
    experience: {
      title: "Experiência",
      description:
        "Ao longo do meu curso em Ciência da Computação, participei de excelentes projetos em locais de renome, como:",
      items: {
        semit: {
          name: "SEMIT",
          description:
            "Estagiário de Desenvolvimento na Secretaria Municipal de Informação e Tecnologia, auxiliando em tarefas de desenvolvimento de software e suporte a sistemas internos da Prefeitura de São Luís.",
        },
        telemidia: {
          name: "Telemídia-MA",
          description:
            "Trabalhei como desenvolvedor fullstack do projeto Cosmo, um website destinado ao ensino gamificado de algoritmos.",
        },
        pulse: {
          name: "Pulse",
          description:
            "Atuei como estagiário da Pulse, o setor de tecnologia do Grupo Mateus, em parceria com o Telemídia-MA para a instrução de jovens aprendizes e organização de uma maratona de programação.",
        },
        viplab: {
          name: "VIPLab",
          description:
            "Desenvolvi uma aplicação móvel para acompanhamento de miopia, mediante projeto de iniciação tecnológica financiado pelo CNPq.",
        },
        lsdi: {
          name: "LSDi",
          description:
            "Participante do SESI Monitore, atuando em coleta e distribuição de dados de monitoramento da saúde dos trabalhadores, na área de Internet das Coisas (IoT).",
        },
      },
    },
    portfolio: {
      title: "Portfólio",
      description:
        "Projetos desenvolvidos ao longo da minha formação e experiência profissional:",
      viewGithub: "Ver no GitHub",
      viewWebsite: "Ver site",
      privateRepository: "repositorio privado",
      featured: "Destaque",
      categories: {
        web: "Web",
        mobile: "Mobile",
        python: "Python",
      },
    },
    contact: {
      title: "Entre em contato:",
    },
  },
  en: {
    nav: {
      home: "Home",
      technologies: "Technologies",
      experience: "Experience",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    theme: {
      light: "Light",
      dark: "Dark",
    },
    hero: {
      welcome: "Welcome!",
      name: "I'm Andrei Ramos Lopes",
      role: "Software Developer",
      description:
        "I'm a Computer Science student at the Federal University of Maranhão (UFMA), with experience in web and mobile development.",
    },
    technologies: {
      title: "Technologies",
      description:
        "I mainly work with web and mobile development, and over time I've learned various technologies, the main ones being:",
    },
    experience: {
      title: "Experience",
      description:
        "Throughout my Computer Science course, I participated in excellent projects at renowned institutions, such as:",
      items: {
        semit: {
          name: "SEMIT",
          description:
            "Development Intern at the Municipal Secretariat of Information and Technology, assisting with software development tasks and support for internal systems of the São Luís City Hall.",
        },
        telemidia: {
          name: "Telemídia-MA",
          description:
            "I worked as a fullstack developer on the Cosmo project, a website for gamified algorithm learning.",
        },
        pulse: {
          name: "Pulse",
          description:
            "I interned at Pulse, the technology sector of Grupo Mateus, in partnership with Telemídia-MA for training young apprentices and organizing a programming marathon.",
        },
        viplab: {
          name: "VIPLab",
          description:
            "I developed a mobile application for myopia tracking, through a technological initiation project funded by CNPq.",
        },
        lsdi: {
          name: "LSDi",
          description:
            "Participant in SESI Monitore, working on collecting and distributing worker health monitoring data in the Internet of Things (IoT) area.",
        },
      },
    },
    portfolio: {
      title: "Portfolio",
      description:
        "Projects developed throughout my education and professional experience:",
      viewGithub: "View on GitHub",
      viewWebsite: "View website",
      privateRepository: "private repository",
      featured: "Featured",
      categories: {
        web: "Web",
        mobile: "Mobile",
        python: "Python",
      },
    },
    contact: {
      title: "Get in touch:",
    },
  },
} as const;

export type TranslationKeys = (typeof translations)[Locale];
