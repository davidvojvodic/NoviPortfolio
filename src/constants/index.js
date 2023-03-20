import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  meta,
  mui,
  threejs,
  prva,
  druga,
  tretja,
  app1,
  app2,
  app3,
  app4,
  app5,
  app6,
  app7,
  cor1,
  cor2,
  cor3,
  cor4,
  cor5,
  cor6,
  cor7,
  net,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "life",
    title: "Life",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Design",
    icon: web,
  },
  {
    title: "Frontend Development",
    icon: mobile,
  },
  {
    title: "Web Animations",
    icon: backend,
  },
  {
    title: "UI/UX",
    icon: creator,
  },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "Three JS",
    icon: threejs,
  },

  {
    name: "Material UI",
    icon: mui,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "1996",
    company_name: "Early life",
    icon: prva,
    iconBg: "#E6DEDD",
    date: "April 1996",
    points: [
      "Born on 11. 04. 1996 in Murska Sobota, Slovenia.",
      "Grew up with a passion for technology",
    ],
  },
  {
    title: "2016 - 2020",
    company_name: "Education",
    icon: druga,
    iconBg: "#E6DEDD",
    date: "Oct 2016 - Jun 2020",
    points: [
      "In 2016, I started attending the Faculty of Commercial and Business Sciences, where I studied business informatics.",
      "I graduated in 2020, eager to begin my career as a developer.",
      "That's when I became more interested in web development.",
    ],
  },
  {
    title: "2020 - 2022",
    company_name: "Education",
    icon: tretja,
    iconBg: "#E6DEDD",
    date: "Oct 2020 - Oct 2022",
    points: [
      "After graduating, I started attending the Faculty of Economics and Business, where I am working on a master's degree in management informatics and e-commerce.",
      "I decided to work on my own projects to gain experience and build my portfolio.",
    ],
  },
  {
    title: "Present",
    company_name: "Meta Certificates",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Present",
    points: [
      "I spent countless hours learning and practicing my skills in HTML, CSS, and JavaScript, and eventually started creating small websites.",
      "I took part in a Coursera certification course from Meta, where I learned more about frontend development including React.",
      "Over time, my projects became more complex, and I gained a better understanding of web development principles and best practices.",
      "Today, I continue to grow and improve as a developer, always eager to learn new technologies and techniques to deliver the best possible user experience.",
    ],
  },
];

const testimonials = [
  {
    title: "Introduction to Front-End Development",
    testimonial:
      "Distinguish between front-end, back-end, and full-stack developers. Create and style a webpage with HTML and CSS. The benefits of working with UI frameworks.",
    link: "https://www.coursera.org/account/accomplishments/verify/VGKT8BYRPRNP",
    image: cor1,
  },
  {
    title: "HTML & CSS in depth",
    testimonial:
      "Create a simple form with a responsive layout using HTML5 and CSS. Create a responsive layout using CSS. Create a UI using Bootstrap. Implement debugging tools.",
    link: "https://www.coursera.org/account/accomplishments/verify/EL7C7ULC8F22",
    image: cor2,
  },
  {
    title: "Version Control",
    testimonial:
      "Implement Version Control systems. Navigate and configure using the command line. Use a GitHub repository. Create a GitHub repository. Manage code revisions.",
    link: "https://www.coursera.org/account/accomplishments/verify/3BK6TDZLBT7R",
    image: cor3,
  },
  {
    title: "Programming with JavaScript",
    testimonial:
      "Creating simple JavaScript codes. Creating and manipulating objects and arrays. Writing unit tests using Jest.",
    link: "https://www.coursera.org/account/accomplishments/verify/RVE6WKW74E2U",
    image: cor4,
  },
  {
    title: "React Basics",
    testimonial:
      "Use reusable components to render views where data changes over time. Organize React projects to create more scalable and maintainable websites and apps. Use props to pass data between components. Create dynamic and interactive web pages and apps. Use forms to allow users to interact with the app. Build an application in React.",
    link: "https://coursera.org/verify/CBQ4RNLFRJS2",
    image: cor5,
  },
  {
    title: "Advanced React",
    testimonial:
      "Create robust and reusable components with advanced techniques and learn different patterns to reuse common behavior. Interact with a remote server and fetch and post data via an API. Seamlessly test React applications with React Testing Library. Integrate commonly used React libraries to streamline your application development.",
    link: "https://coursera.org/verify/4L7F2GQURSDH",
    image: cor6,
  },
  {
    title: "Principles of UX/UI Design",
    testimonial:
      "Describe the fundamentals of User Experience (UX) design and research. Describe accessibility considerations in design. Practice developing user empathy through research. Create wireframes and prototypes in Figma.",
    link: "https://coursera.org/verify/E2WMQ8DVF2QL",
    image: cor7,
  },
];

const projects = [
  {
    name: "Modern Website",
    description:
      "A dummy website made with React JS and CSS. The website consists of a navigation bar which changes on mobile and tablet, hero section, multiple info sections, a call to action section, blog and footer. In these sections there are multiple components which are re-used on the site.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: app1,
    source_code_link: "https://github.com/davidvojvodic/Modern-dummy-website",
    page_link: "https://magical-chimera-1a7d67.netlify.app/",
  },
  {
    name: "Modern Restaurant Website",
    description:
      "A dummy restaurant website made with React JS and CSS. The website consists of a navigation bar which changes on mobile and tablet, hero section, multiple info sections, menu section, a fullscreen pauseable video, scrollable photo gallery and footer. UseState is used multiple times on the website.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: app2,
    source_code_link: "https://github.com/davidvojvodic/RestaurantWebsite",
    page_link: "https://capable-melomakarona-4bab71.netlify.app/",
  },
  {
    name: "Modern App Website",
    description:
      "Modern App Website made with dummy text. For this website I used React with Vite and Tailwind CSS for faster and easier developing. The website consists of a navigation bar which changes on mobile and tablet, hero section, multiple info sections, a call to action section and footer.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: app3,
    source_code_link: "https://github.com/davidvojvodic/AppWebsite",
    page_link: "https://deft-narwhal-a00854.netlify.app/",
  },
  {
    name: "Gym Web App",
    description:
      "A Gym Web App built with React, Material UI and fetching APIs called ExerciseDB and Youtube S&D. This web app has the capability to search for multiple exercises for different muscle categories and equipment categories. It also shows exercise related Youtube videos and similiar exercises.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: app4,
    source_code_link: "https://github.com/davidvojvodic/gym_app",
    page_link: "https://dazzling-narwhal-a1e275.netlify.app/",
  },
  {
    name: "Web Dashboard",
    description:
      "Dashboard made using React, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This website consists of a theme switcher between light and dark mode, 3 different data tables, 4 different charts using Nivo Charts, a form page and an integrated calendar where you can add and remove tasks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "nivo charts",
        color: "pink-text-gradient",
      },
    ],
    image: app5,
    source_code_link: "https://github.com/davidvojvodic/react-admin",
    page_link: "https://luxury-croissant-0192cb.netlify.app/",
  },
  {
    name: "AI Image Creation App",
    description:
      "An AI image creation application built with MongoDB, Express, React, Node.js and Material UI. It has a theme switcher, a grid with shared images from the community and an option to create your own image. To create your own image you type something you want in the prompt and the API from OpenAI will generate an image for you.",
    tags: [
      {
        name: "openai",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: app7,
    source_code_link: "https://github.com/davidvojvodic/AI-app",
    page_link: "https://dulcet-profiterole-5347a3.netlify.app/",
  },
  {
    name: "NFT Drop website",
    description:
      "NFT Drop website built with Next JS, Thirdweb, TypeScript Tailwind CSS and MetaMask. The images were generated by my AI Image Creation web app. For the NFTs I used a testnet called Goerli to make the NFTs and to mint them. I can claim the NFTs on the website and I get them on my OpenSea Test account.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: app6,
    source_code_link: "https://github.com/davidvojvodic/davidnft",
    page_link: "https://davidnft.vercel.app/",
  },
  {
    name: "Netflix Clone",
    description:
      "Netflix Clone built in React with NextJS, Tailwind CSS, MongoDB, Prisma and NextAuth. The application lets you login with your Google or Github account, as well as creating a new account. When logged in you can watch movies and add/remove them to/from your favorites.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: net,
    source_code_link: "https://github.com/davidvojvodic/netflix",
    page_link: "https://netflix-w85t.vercel.app/auth",
  },
];

export { services, technologies, experiences, testimonials, projects };
