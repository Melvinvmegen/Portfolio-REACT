import React, { Component } from 'react'
import BlaBla from '../../../Components/BlaBLa/BlaBla'
import ButtonProject from '../../../Components/ButtonProject/ButtonProject';
import Polygons from '../../../Components/Polygons/Polygons';
import PostGreSQL from "./PostGreSQL.png"
import Rails from "./Rails.png"
import Ruby from "./RUBY.png"


class SectionTwo extends Component {
  state = {
    blabla: {
      id: 1, title: 'DEVELOPPEUR BACK-END', subtitle: 'Ruby on Rails, Freelance', text: "Certifié du Wagon après un bootcamp de deux mois, où j'ai pu compléter mes compétences par un language supplémentaire, Ruby et son framework, Rails. Le Wagon m'a également initié à la gestion de base de données avec son language SQL et des outils tel que MongoDB ou encore PostgreSQL."
    },
    inputs: [
      { id: 1, alt: 'Ruby', img: PostGreSQL },
      { id: 2, alt: 'Rails', img: Ruby },
      { id: 3, alt: 'PostgreSQL', img: Rails }
    ],
    btnText: "Découvrez mes projets",
    href: "#Mes-Projets"
  }

  render() {
    return (
      <div id="section-two" className="section-two">
        <div className="section-main">
          <a href="/" id="Back-end" className="section-anchor"> </a>
          <div className="section-wrapper">
            <div className="section-left d-none d-sm-block col-sm-6 col-md-6 align-center">
              <div className="section-wrapper-left">
                <Polygons inputs={this.state.inputs} />
              </div>
            </div>
            <div className="section-right col-xs-12 col-sm-6 col-md-6">
              <BlaBla blabla={this.state.blabla} />
              <ButtonProject text={this.state.btnText} href={this.state.href} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SectionTwo;
