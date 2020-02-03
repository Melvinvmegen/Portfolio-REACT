import React from 'react';

const footerContext = React.createContext({
  socialLinks: [
    { id: 1, name: 'LinkedIn', icon: 'fa-linkedin', ahref: "https://www.linkedin.com/in/melvin-van-megen/" },
    { id: 2, name: 'Twitter', icon: 'fa-twitter', ahref: "" },
    { id: 3, name: 'Skype', icon: 'fa-skype', ahref: "" },
    { id: 4, name: 'Github', icon: 'fa-github', ahref: "https://github.com/Melvinvmegen" },
  ],
  front: [
    {
      id: 1, title: 'Développeur Front-End', links: [
        { id: 1, name: 'HTML' },
        { id: 2, name: 'CSS' },
        { id: 3, name: 'Javascript' },
        { id: 4, name: 'React' },
      ]
    }
  ],
  linksMar: [
    {
      id: 1, title: 'Développeur Back-End', links: [
        { id: 1, name: 'Ruby' },
        { id: 2, name: 'Rails' },
        { id: 3, name: 'SQL' },
        { id: 4, name: 'MongoDB' },
      ]
    }
  ],
  linksTra: [
    {
      id: 1, title: 'Marketing Digital', links: [
        { id: 1, name: 'SEO' },
        { id: 2, name: 'SEA' },
        { id: 3, name: 'Email Marketing' },
        { id: 4, name: 'Marketing de contenu' },
      ]
    }
  ]
});

export default footerContext
