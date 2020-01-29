import React, { Component } from 'react';
import Header from './Containers/Header/Header';
import Banner from './Containers/Banner/Banner';
import Home from './Containers/Home/Home';
import Gallery from './Containers/Gallery/Gallery';
import Testimonials from './Containers/Testimonials/Testimonials';
import Footer from './Containers/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Home />
        <Gallery />
        <Testimonials />
        <Footer />
      </div>
    );
  }
}

export default App;
