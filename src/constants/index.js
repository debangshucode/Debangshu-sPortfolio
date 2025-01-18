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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  ratnasmriti,
  proyas,
  nps,
  starbucks,
  tesla,
  shopify,
  handtrack,
  catvsdog,
  student_management,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Machine Learning Engineer",
    icon: mobile,
  },
  {
    title: "App Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Proyas",
    icon: proyas,
    iconBg: "#383E56",
    date: "Feb 2024 - March 2024",
    points: [
      "Developing and maintaining web application using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Ratnasmriti",
    icon: ratnasmriti,
    iconBg: "#E6DEDD",
    date: "April 2024 - June 2024",
    points: [
      "Developing and maintaining web applications using Django and other related technologies.",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "NPS",
    icon: nps,
    iconBg: "#383E56",
    date: "AUg 2024 - Nov 2024",
    points: [
      "Developing and maintaining web applications using Django and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Debangsu proved me wrong.",
    name: "Sanjay Sarkar",
    designation: "Owner",
    company: "Ratnasmriti Jems&Jewellers",
    image: ratnasmriti,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Debangshu does.",
    name: "Manos Chatterjee",
    designation: "Principal",
    company: "Proyas",
    image: proyas,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "MD IRSHAD ALAM",
    designation: "Principal",
    company: "NPS Panjipara",
    image: nps,
  },
];

const projects = [
  {
    name: "Hand tracking using OpenCV",
    description:
      "This project demonstrates real-time hand tracking using OpenCV and cvzone, with draggable rectangles on the screen that can be controlled through hand gestures.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "CVZone",
        color: "pink-text-gradient",
      },
    ],
    image: handtrack,
    source_code_link:
      "https://github.com/debangshucode/Hand-Tracking-and-Draggable-Rectangles-with-OpenCV-and-CVZone",
  },
  {
    name: "Student Management System",
    description:
      "Web application that helps to manage students attendence, results, fees, admitcards for a school.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: student_management,
    source_code_link: "https://npspanjipara.in/",
  },
  {
    name: "CAT vs DOG Image Classifier",
    description:
      "This project demonstrates a simple image classifier that can classify images of cats and dogs using a pre-trained model.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
      {
        name: "Keras",
        color: "pink-text-gradient",
      },
    ],
    image: catvsdog,
    source_code_link: "https://github.com/debangshucode/CatVsDog_imageClassification_CNN",
  },
];

export { services, technologies, experiences, testimonials, projects };
