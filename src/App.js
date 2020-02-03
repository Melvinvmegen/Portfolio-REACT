import React, { Component } from 'react';
import Header from './Containers/Header/Header';
import Banner from './Containers/Banner/Banner';
import Home from './Containers/Home/Home';
import Gallery from './Containers/Gallery/Gallery';
import Testimonials from './Containers/Testimonials/Testimonials';
import Footer from './Containers/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContentContext from './context/content-context'

class App extends Component {

  render() {
    return (
      <div className="App">
        <ContentContext.Provider value={{
          main: [
            { id: 1, name: 'Developpeur Front-end' },
            { id: 2, name: 'Back-end' },
            { id: 3, name: 'Marketeur Digital' },
            { id: 4, name: 'Mes Projets' },
          ]
        }}>
          <Header />
          <Banner />
          <Home />
        </ContentContext.Provider>
        <Gallery />
        <Testimonials />
        <Footer />
      </div>
    );
  }
}

export default App;
