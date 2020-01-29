import React, { Component } from 'react'
import BlaBla from '../../../Components/BlaBLa/BlaBla'
import ButtonProject from '../../../Components/ButtonProject/ButtonProject';
import Polygons from '../../../Components/Polygons/Polygons';

class SectionTwo extends Component {
  state = {
    blabla:
    {
      id: 1, title: 'DEVELOPPEUR WEB', subtitle: 'Front-End, Freelance', text: "Grâce à mon expérience professionnelle, j'ai pu suivre de multiples cours sur les languages suivants : HTML, CSS, Javascript. Et ainsi étendre mes compétences digitale. Certifié du Wagon après un bootcamp de deux mois, où j'ai pu compléter mes compétences par un language supplémentaire, Ruby et son framework, Rails. Formation à la suite de laquelle j'ai décidé me spécialiser en tant que développeur web Full-Stack. Également inscrit à l'Ecole 42 pour 2020."
    },
    inputs: [
      { alt: 'HTML5', img: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
      { alt: 'Javascript', img: 'https://icn.lycee-valin.fr/projets2018/seconde14/eleve12/images/javascript.png' },
      { alt: 'CSS3', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' }
    ],
    btnText: "Découvrez mes projets"
  }

  render() {
    return (
      <div id="section-two" className="section-two">
        <a id="Développeur-Web" className="section-anchor"></a>
        <div className="section-wrapper">
          <div className="section-left d-none d-sm-block col-sm-6 col-md-6 align-center">
            <div className="section-wrapper-left">
              <Polygons inputs={this.state.inputs} />
            </div>
          </div>
          <div className="section-right col-xs-12 col-sm-6 col-md-6">
            <BlaBla blabla={this.state.blabla} />
            <ButtonProject text={this.state.btnText} />
          </div>
        </div>
      </div>
    )
  }
}

export default SectionTwo;
