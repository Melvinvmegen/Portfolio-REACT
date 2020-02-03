import React from 'react';

const contentContext = React.createContext({
  main: [
    { id: 1, name: 'Developpeur Front-end' },
    { id: 2, name: 'Back-end' },
    { id: 3, name: 'Marketeur Digital' },
    { id: 4, name: 'Mes Projets' },
  ]
});

export default contentContext
