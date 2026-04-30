import { Icons } from "@/components/icons";
import { Docker } from "@/components/ui/svgs/docker";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { HomeIcon, Mail, NotebookIcon, Pickaxe } from "lucide-react";
import gitIcon from '../../public/git.png'

export const DATA = {
  name: "Júlio Marques",
  initials: "JM",
  url: "https://www.juliodeveloper.com",
  location: "Guanhães, MG",
  // locationLink: "https://www.google.com/maps/",
  description:
    "Desenvolvo soluções de forma ágil e iterativa, garantindo entregas rápidas e alinhadas às necessidades do negócio.",
  summary: `Sou Desenvolvedor Backend, tenho experiências sólidas no desenvolvimento de sistemas eficientes, com foco em arquitetura escalável, código de qualidade e boas práticas. Meu objetivo é transformar requisitos complexos em soluções bem estruturadas, seguras e fáceis de manter, sempre priorizando a qualidade e a escalabilidade do software.`,
  avatarUrl: "https://github.com/JulioDeveloper777.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Git", icon: gitIcon },
    { name: "Clean Archtecture" },
    { name: "SOLID" },
  ],
  navbar: [
    { href: "/Julio CV.pdf", icon: NotebookIcon, label: "Currículo" },
    {
      href: "https://outlook.live.com/mail/0/deeplink/compose?to=juliomarqs.techdev@hotmail.com&subject=Contato%20via%20portfolio&body=Ola%20Julio%2C%20gostaria%20de%20falar%20sobre...",
      icon: Mail,
      label: "Email",
    },
  ],
  contact: {
    email: "juliomarqs.techdev@hotmail.com",
    // tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/juliodeveloper777",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/juliodeveloper777/",
        icon: Icons.linkedin,
        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Me envie um email",
        url: "https://outlook.live.com/mail/0/deeplink/compose?to=juliomarqs.techdev@hotmail.com&subject=Contato%20via%20portfolio&body=Ola%20Julio%2C%20gostaria%20de%20falar%20sobre...",
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
    // {
    //   company: "Shopify",
    //   badges: [],
    //   href: "https://shopify.com",
    //   location: "Remote",
    //   title: "Software Engineer",
    //   logoUrl: "/shopify.svg",
    //   start: "January 2021",
    //   end: "April 2021",
    //   description:
    //     "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom reGithubs in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    // },
    // {
    //   company: "Nvidia",
    //   href: "https://nvidia.com/",
    //   badges: [],
    //   location: "Santa Clara, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/nvidia.png",
    //   start: "January 2020",
    //   end: "April 2020",
    //   description:
    //     "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    // },
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
      title: "Trato Car",
      href: "https://github.com/JulioDeveloper777/trato-car-centro-automotivo",
      dates: "Março 2026",
      active: true,
      description: `Landing page desenvolvida para uma oficina, com autenticação por código e uma seção interna de gerenciamento de tarefas para a gerência e para funcionários.`,
      technologies: [
        "React.js",
        "TailwindCSS",
        "Vite",
        "TanStack",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/JulioDeveloper777/trato-car-centro-automotivo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://i.postimg.cc/jS5T4817/Captura-de-tela-2026-04-29-235012.png",
      video: "",
    },
    {
      title: "Sintonia",
      href: "https://github.com/JulioDeveloper777/sintonia-api",
      dates: "Abril 2025 - Junho 2025",
      active: true,
      description: `Plataforma focada em relacionamentos que ajuda casais a identificar "microssinais" iniciais, melhorar a comunicação e fortalecer a conexão emocional por meio de insights baseados em IA e ações de cada um.`,
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Framer Motion",
        "OpenAI",
        "PostgreSQL",
        "Prisma",
        "Docker",
        "NodeMailer",
        "Cloudinary",
        "Axios",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/JulioDeveloper777/sintonia-api",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://camo.githubusercontent.com/b5c5273e1208b2d87f5c3b6c6bb0ba6c53993a30d2f5c8c462e140371a388c6a/68747470733a2f2f692e696d6775722e636f6d2f686e34364a4d7a2e706e67",
      video: "",
    },
    {
      title: "Low Racing Backend",
      href: "https://github.com/JulioDeveloper777/lowracing-backend",
      dates: "Julho 2024 - Janeiro 2025",
      active: true,
      description:
        "Esta API é responsável por todo o ecosistema da plataforma de um jogo multiplayer.",
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
          type: "Github",
          href: "https://github.com/JulioDeveloper777/lowracing-backend",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://camo.githubusercontent.com/5ae4bbd854cb6666c86eb0c0bcb3f1a5cb993a2d740c88e1e55fe66ef00ef578/68747470733a2f2f692e706f7374696d672e63632f776a56534c4443442f486f6d652e706e67",
      video: "",
    },
    // {
    //   title: "Thunder API",
    //   href: "https://github.com/FiftyGroup/thunder",
    //   dates: "Dezembro 2023 - Abril 2024",
    //   active: true,
    //   description:
    //     "Simples backend que inicialmente foi desenvolvido para uma plataforma que foi descontinuada.",
    //   technologies: [
    //     "NodeJS",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Sequelize",
    //     "NodeMailer",
    //   ],
    //   links: [
    //     {
    //       type: "Github",
    //       href: "https://github.com/FiftyGroup/thunder",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "https://i.postimg.cc/mZc7q9YK/preview.png",
    //   video: "",
    // },
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
          type: "Github",
          href: "https://github.com/JulioDeveloper777/dsw-wheel",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://i.postimg.cc/zBDFygvz/Captura-de-tela-2026-04-30-014400.png",
      video: "",
    },
    // {
    //   title: "Simulador",
    //   href: "/",
    //   dates: "Janeiro 2024 - Dezembro 2024",
    //   active: true,
    //   description:
    //     "Um simulador de carro desenvolvido utilizando Arduíno, onde utilizei inúmeros componentes de carro real para conseguir atingir o resultado esperado.",
    //   technologies: ["Arduíno", "Eletrônica"],
    //   links: [
    //     {
    //       type: "Sem conteúdo",
    //       href: "/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "https://i.postimg.cc/mZc7q9YK/preview.png",
    //   video: "",
    // },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Github Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-Github-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open Github world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Github (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Github (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Github (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Github (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
