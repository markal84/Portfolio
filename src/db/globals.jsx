export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: 'blog' },
  { name: 'CV', href: 'cv' },
];

export const projects = [
  {
    id: 1,
    name: 'ProgressPal',
    stack: {
      frontend: 'React, Material UI',
      backend: 'Node.js, express, MongoDB',
    },
    image: 'images/progressPal.webp',
    desc: 'Test Project1 description',
    fullDesc: 'there will be full description after clik show more button',
    links: {
      live: 'https://gymapp-markal84.vercel.app',
      code: 'https://github.com/markal84/gymApp',
    },
  },
  {
    id: 2,
    name: 'Test Project2',
    stack: 'Technological stack used',
    image: 'images/project1_screenshot.webp',
    desc: 'Test Project2 description',
    fullDesc: 'there will be full description after clik show more button',
    links: {
      live: 'https://github.com',
      code: 'https://github.com',
    },
  },
];
