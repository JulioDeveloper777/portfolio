import { Icons } from "@/components/icons";
import { NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Júlio César",
  initials: "JC",
  url: "https://www.juliodeveloper.com/",
  location: "Guanhães, MG",
  locationLink: "https://www.google.com/maps/place/guanhães",
  description:
    "Desenvolvo soluções de forma ágil e iterativa, garantindo entregas rápidas e alinhadas às necessidades do negócio.",
  summary:
    "Minha paixão por tecnologia começou com pelo menos 16 anos, e na vontade e curiosidade incessante de sempre querer aprimorar meus conhecimentos e descobrir novas coisas, isso me levou a desenvolver inúmeros projetos pessoais onde sempre tento me aprofundar em diversos conteúdos, cujo contexto eu tenho experiência ou não.  ",
  avatarUrl: "https://github.com/JulioDeveloper777.png",
  skills: [
    "HTML5",
    "CSS3",
    "Javascript",
    "Typescript",
    "ReactJS",
    "Node.js",
    "Sequelize",
    "Prisma",
    "MySQL",
    "Postgres",
    "Docker",
    "Lua",
    "C#",
    "Git",
  ],
  navbar: [{ href: "/Julio CV.pdf", icon: NotebookIcon, label: "Currículo" }],
  contact: {
    email: "juliodeveloper@hotmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/JulioDeveloper777",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/juliodeveloper777",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Enviar Email",
        url: "mailto:juliodeveloper@hotmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Sem experiência profissional.",
      href: "/",
      badges: [],
      location: "",
      title: "Ainda não possuo experiência profissional.",
      logoUrl: "",
      start: "",
      end: "",
      description: "Ainda não possuo experiência profissional.",
    },
  ],
  education: [
    {
      school: "B7 Web",
      href: "https://lp.b7web.com.br/",
      degree: "Node.JS, Banco de Dados, Docker, Git",
      logoUrl: "b7web-logo.jpeg",
      start: "2024",
      end: "2025",
    },
    {
      school: "Rocketseat",
      href: "https://rocketseat.com",
      degree: "Discover Especializar",
      logoUrl: "/rocketseat-logo.jpg",
      start: "2022",
      end: "2023",
    },
    {
      school: "Curso em Vídeo",
      href: "https://www.cursoemvideo.com/",
      degree: "HTML5, CSS3, Javascript",
      logoUrl: "/cursoemvideo-logo.jpg",
      start: "2021",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Low Racing Backend",
      href: "https://github.com/JulioDeveloper777/lowracing-backend",
      dates: "Julho 2024 - Janeiro 2025",
      active: true,
      description:
        "Esta API é responsável por todo o ecosistema da plataforma de um jogo.",
      technologies: [
        "NodeJS",
        "Typescript",
        "Prisma",
        "PostgreSQL",
        "Docker",
        "NodeMailer",
        "Cloudinary",
        "SOLID",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/JulioDeveloper777/lowracing-backend",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.postimg.cc/mZc7q9YK/preview.png",
      video: "",
    },
    {
      title: "Thunder API",
      href: "https://github.com/FiftyGroup/thunder",
      dates: "Dezembro 2023 - Abril 2024",
      active: true,
      description:
        "Simples backend que inicialmente foi desenvolvido para uma plataforma que foi descontinuada.",
      technologies: [
        "NodeJS",
        "Typescript",
        "PostgreSQL",
        "Sequelize",
        "NodeMailer",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/FiftyGroup/thunder",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://i.postimg.cc/mZc7q9YK/preview.png",
      video: "",
    },
    {
      title: "DSW Wheel",
      href: "https://github.com/JulioDeveloper777/dsw-wheel",
      dates: "Novembro 2024 - Dezembro 2024",
      active: true,
      description:
        "Uma plataforma moderna para a comunidade DIY Steering Wheel.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Framer Motion"],
      links: [
        {
          type: "Source",
          href: "https://github.com/JulioDeveloper777/dsw-wheel",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://i.postimg.cc/mZc7q9YK/preview.png",
      video: "",
    },
    {
      title: "Simulador",
      href: "/",
      dates: "Janeiro 2024 - Dezembro 2024",
      active: true,
      description:
        "Um simulador de carro desenvolvido utilizando Arduíno, onde utilizei inúmeros componentes de carro real para conseguir atingir o resultado esperado.",
      technologies: ["Arduíno", "Eletrônica"],
      links: [
        {
          type: "Sem conteúdo",
          href: "/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.postimg.cc/mZc7q9YK/preview.png",
      video: "",
    },
  ],
} as const;
