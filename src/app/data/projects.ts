export interface Project {
  id: string;
  featured: boolean;
  category: "web" | "mobile" | "python";
  image: string;
  github: string;
  website?: string;
  pt: {
    title: string;
    description: string;
    tags: string[];
  };
  en: {
    title: string;
    description: string;
    tags: string[];
  };
}

export const projects: Project[] = [
  {
    id: "multistep-form",
    featured: true,
    category: "web",
    image: "/assets/projects/multistep-form.png",
    github: "https://github.com/Andreirl032/multistep-form",
    pt: {
      title: "Formulário Multipassos",
      description:
        "Aplicação web em Next.js + TypeScript + Tailwind, com formulário em múltiplas etapas e diferentes tipos de inputs. Integração com APIs e MongoDB Atlas.",
      tags: ["Next.js", "TypeScript", "Tailwind", "MongoDB"],
    },
    en: {
      title: "Multistep Form",
      description:
        "Web application built with Next.js + TypeScript + Tailwind, featuring a multi-step form with various input types. API integration with MongoDB Atlas.",
      tags: ["Next.js", "TypeScript", "Tailwind", "MongoDB"],
    },
  },
  {
    id: "chefly",
    featured: true,
    category: "mobile",
    image: "/assets/projects/chefly.jpg",
    github: "https://github.com/Andreirl032/chefly",
    pt: {
      title: "Chefly",
      description:
        "Aplicação móvel de receitas com autenticação (email/Google), criação de perfil e visualização de receitas. Desenvolvido com React Native e Firebase.",
      tags: ["React Native", "TypeScript", "Firebase", "MealDB"],
    },
    en: {
      title: "Chefly",
      description:
        "Mobile recipe app with authentication (email/Google), profile creation and recipe browsing. Built with React Native and Firebase.",
      tags: ["React Native", "TypeScript", "Firebase", "MealDB"],
    },
  },
  {
    id: "cidade-griot",
    featured: false,
    category: "web",
    image: "/assets/projects/cidade-griot.png",
    github: "https://github.com/Andreirl032/clone-cidadegriot",
    pt: {
      title: "Cidade Griot",
      description:
        "Recriação da landing page do Cidade Griot com Next.js e Tailwind CSS.",
      tags: ["Next.js", "Tailwind"],
    },
    en: {
      title: "Cidade Griot",
      description:
        "Recreation of the Cidade Griot landing page using Next.js and Tailwind CSS.",
      tags: ["Next.js", "Tailwind"],
    },
  },
  // {
  //   id: "portfolio",
  //   featured: false,
  //   category: "web",
  //   image: "/assets/projects/portfolio.svg",
  //   github: "https://github.com/Andreirl032/portfolio-andrei",
  //   website: "https://andreilopes.vercel.app/",
  //   pt: {
  //     title: "Site Pessoal",
  //     description:
  //       "Página em Next.js + Tailwind, estruturada como landing page responsiva.",
  //     tags: ["Next.js", "Tailwind", "TypeScript"],
  //   },
  //   en: {
  //     title: "Personal Website",
  //     description:
  //       "Next.js + Tailwind landing page, fully responsive.",
  //     tags: ["Next.js", "Tailwind", "TypeScript"],
  //   },
  // },
  {
    id: "projeto-pibiti-miopia",
    featured: false,
    category: "mobile",
    image: "/assets/projects/projeto-pibiti-miopia.png",
    github: "Private Repository",
    pt: {
      title: "Miopia",
      description:
        "Aplicativo móvel para monitoramento de miopia como parte de uma bolsa de desenvolvimento tecnológico na Universidade Federal do Maranhão.",
      tags: ["React Native", "JavaScript", "Firebase"],
    },
    en: {
      title: "Myopia",
      description:
        "Mobile app for myopia monitoring, as part of a technological development scholarship project at the Federal University of Maranhão.",
      tags: ["React Native", "JavaScript", "Firebase"],
    },
  },
  {
    id: "login-project",
    featured: false,
    category: "web",
    image: "/assets/projects/login-project.png",
    github: "https://github.com/Andreirl032/login-project",
    pt: {
      title: "Login Responsivo",
      description:
        "Página de login responsiva com paginação de dados de aluguéis no Airbnb.",
      tags: ["Next.js", "TypeScript"],
    },
    en: {
      title: "Responsive Login",
      description:
        "Responsive login page with paginated Airbnb rental data.",
      tags: ["Next.js", "TypeScript"],
    },
  },
  {
    id: "pdf-automation",
    featured: false,
    category: "python",
    image: "/assets/projects/pdf-automation.svg",
    github: "https://github.com/Andreirl032/login-project",
    pt: {
      title: "Automação de PDFs",
      description:
        "Automação para divisão e classificação de PDFs usando Python, feita para a startup ImaginaKIDS.",
      tags: ["Python"],
    },
    en: {
      title: "PDF Automation",
      description:
        "Automation tool for splitting and classifying PDFs using Python, built for ImaginaKIDS startup.",
      tags: ["Python"],
    },
  },
  {
    id: "chemical-shooter",
    featured: false,
    category: "python",
    image: "/assets/projects/chemical-shooter.png",
    github: "https://github.com/Andreirl032/Chemical-Shooter",
    pt: {
      title: "Chemical Shooter",
      description:
        "Jogo de plataforma 2D estilo Megaman desenvolvido em Python utilizando a biblioteca Pygame.",
      tags: ["Python", "Pygame"],
    },
    en: {
      title: "Chemical Shooter",
      description:
        "2D platform Megaman-style game developed in Python using the Pygame library.",
      tags: ["Python", "Pygame"],
    },
  },
  {
    id: "youtube-download",
    featured: false,
    category: "python",
    image: "/assets/projects/youtube-download.svg",
    github: "https://github.com/Andreirl032/Python-YouTube-Download",
    pt: {
      title: "YouTube Download",
      description:
        "Ferramenta Python para baixar vídeos, áudios e miniaturas do YouTube.",
      tags: ["Python", "Pytube", "PySimpleGUI"],
    },
    en: {
      title: "YouTube Download",
      description:
        "Python tool to download YouTube videos, audio and thumbnails.",
      tags: ["Python", "Pytube", "PySimpleGUI"],
    },
  },
];
