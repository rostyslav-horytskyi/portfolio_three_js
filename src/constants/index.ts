import {
  mobilePNG,
  backendPNG,
  creatorPNG,
  webPNG,
  javascriptPNG,
  typescriptPNG,
  htmlPNG,
  cssPNG,
  reactjsPNG,
  reduxPNG,
  tailwindPNG,
  nodejsPNG,
  mongodbPNG,
  gitPNG,
  figmaPNG,
  dockerPNG,
  metaPNG,
  starbucksPNG,
  teslaPNG,
  shopifyPNG,
  carrentPNG,
  jobitPNG,
  tripguidePNG,
  threejsSVG,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: webPNG,
  },
  {
    title: 'React Native Developer',
    icon: mobilePNG,
  },
  {
    title: 'Backend Developer',
    icon: backendPNG,
  },
  {
    title: 'Content Creator',
    icon: creatorPNG,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: htmlPNG,
  },
  {
    name: 'CSS 3',
    icon: cssPNG,
  },
  {
    name: 'JavaScript',
    icon: javascriptPNG,
  },
  {
    name: 'TypeScript',
    icon: typescriptPNG,
  },
  {
    name: 'React JS',
    icon: reactjsPNG,
  },
  {
    name: 'Redux Toolkit',
    icon: reduxPNG,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwindPNG,
  },
  {
    name: 'Node JS',
    icon: nodejsPNG,
  },
  {
    name: 'MongoDB',
    icon: mongodbPNG,
  },
  {
    name: 'Three JS',
    icon: threejsSVG,
  },
  {
    name: 'git',
    icon: gitPNG,
  },
  {
    name: 'figma',
    icon: figmaPNG,
  },
  {
    name: 'docker',
    icon: dockerPNG,
  },
];

const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Starbucks',
    icon: starbucksPNG,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React Native Developer',
    company_name: 'Tesla',
    icon: teslaPNG,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Shopify',
    icon: shopifyPNG,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Meta',
    icon: metaPNG,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrentPNG,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobitPNG,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguidePNG,
    source_code_link: 'https://github.com/',
  },
];

export {services, technologies, experiences, testimonials, projects};
