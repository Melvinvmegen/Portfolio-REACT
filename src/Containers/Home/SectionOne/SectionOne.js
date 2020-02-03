import React, { Component } from 'react'
import BlaBla from '../../../Components/BlaBLa/BlaBla'
import ButtonProject from '../../../Components/ButtonProject/ButtonProject';
import Polygons from '../../../Components/Polygons/Polygons';

class SectionOne extends Component {
  state = {
    blabla:
    {
      id: 1, title: 'DEVELOPPEUR FRONT-END', subtitle: 'React.js, Freelance', text: "Grâce à mon expérience professionnelle, j'ai pu suivre de multiples cours sur les languages suivants : HTML, CSS, Javascript. Et ainsi étendre mes compétences digitale. Certifié du Wagon après deux mois de bootcamp, j'ai décider d'étendre mes compétences en Javascript. Language à l'aide duquel je me spécialise dans le front-end avec pour framework : React.js."
    },
    inputs: [
      { id: 1, alt: 'Javascript', img: 'https://icn.lycee-valin.fr/projets2018/seconde14/eleve12/images/javascript.png' },
      { id: 2, alt: 'React', img: 'https://oneteamsolutions.in/images/upload/post-33.png' },
      { id: 3, alt: 'CSS3', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' }
    ],
    btnText: "Découvrez mes projets"
  }

  render() {
    return (
      <div id="section-one" className="section-one">
        <a href="/" id="Developpeur-Front-end" className="section-anchor"> </a>
        <div className="section-wrapper">
          <div className="section-left col-xs-12 col-sm-6 col-md-6">
            <BlaBla blabla={this.state.blabla} />
            <ButtonProject text={this.state.btnText} />
          </div>
          <div className="section-right d-none d-sm-block col-sm-6 col-md-6 align-center">
            <div className="section-wrapper-right">
              <Polygons inputs={this.state.inputs} />
            </div>
          </div>
        </div>
      </div>
    )


  }
}

export default SectionOne;
