import React, { Component } from 'react'
import BlaBla from '../../../Components/BlaBLa/BlaBla'
import ButtonProject from '../../../Components/ButtonProject/ButtonProject';
import Polygons from '../../../Components/Polygons/Polygons';
import JS from './JS.png'
import CSS from './CSS.png'

class SectionOne extends Component {
  state = {
    blabla:
    {
      id: 1, title: 'DEVELOPPEUR FRONT-END', subtitle: 'React.js, Freelance', text: "Grâce à mon expérience professionnelle, j'ai pu suivre de multiples cours sur les languages suivants : HTML, CSS, Javascript. Et ainsi étendre mes compétences digitale. Certifié du Wagon après deux mois de bootcamp, j'ai décider d'étendre mes compétences en Javascript. Language à l'aide duquel je me spécialise dans le front-end avec pour framework : React.js."
    },
    inputs: [
      { id: 1, alt: 'Javascript', img: JS },
      { id: 2, alt: 'React', img: "https://oneteamsolutions.in/images/upload/post-33.png" },
      { id: 3, alt: 'CSS3', img: CSS }
    ],
    btnText: "Découvrez mes projets",
    href: "#Mes-Projets"
  }

  render() {
    return (
      <div id="section-one" className="section-one">
        <div className="section-main">
          <a href="/" id="Developpeur-Front-end" className="section-anchor-first"> </a>
          <div className="section-wrapper">
            <div className="section-left col-xs-12 col-sm-6 col-md-6">
              <BlaBla blabla={this.state.blabla} />
              <ButtonProject text={this.state.btnText} href={this.state.href} />
            </div>
            <div className="section-right d-none d-sm-block col-sm-6 col-md-6 align-center">
              <div className="section-wrapper-right">
                <Polygons inputs={this.state.inputs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )


  }
}

export default SectionOne;
