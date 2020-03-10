import React from 'react';

const contentContext = React.createContext({
  main: [
    { id: 1, name: 'Developpeur Front-end', active: false },
    { id: 2, name: 'Back-end', active: false },
    { id: 3, name: 'Marketeur Digital', active: false },
    { id: 4, name: 'Mes Projets', active: false },
  ]
});

export default contentContext
