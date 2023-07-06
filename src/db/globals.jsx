export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: 'blog' },
  {
    name: 'CV',
    href: 'https://drive.google.com/file/d/1zwDGcuAGssPI9jvuon75pv9Zp-3RwVOB/view?usp=drive_link',
    target: '_blank',
  },
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
    desc: 'ProgressPal is a full-stack web application designed to help users track their workouts and exercises. As an actively developed project, ProgressPal continues to evolve with regular updates and new features being added.',
    keyFeatures: {
      features: [
        'User Registration and Authentication: Users can create accounts and log in securely to access their personalized workout tracking features. No external libraries or platforms like OAuth were used.',
        'Exercise Tracking: ProgressPal allows users to add exercises to their workouts, specifying details such as exercise name, sets, reps, and weights.',
        'Data Persistence: All workout and exercise data is securely stored in a MongoDB Atlas cloud database, ensuring data integrity and availability.',
      ],
    },
    links: {
      live: 'https://gymapp-markal84.vercel.app',
      code: 'https://github.com/markal84/gymApp',
    },
  },
];
