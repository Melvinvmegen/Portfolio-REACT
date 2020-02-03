import React, { Component } from 'react'
import BlaBla from '../../../Components/BlaBLa/BlaBla'
import ButtonProject from '../../../Components/ButtonProject/ButtonProject';
import Polygons from '../../../Components/Polygons/Polygons';

class SectionTwo extends Component {
  state = {
    blabla: {
      id: 1, title: 'DEVELOPPEUR BACK-END', subtitle: 'Ruby on Rails, Freelance', text: "Certifié du Wagon après un bootcamp de deux mois, où j'ai pu compléter mes compétences par un language supplémentaire, Ruby et son framework, Rails. Le Wagon m'a également initié à la gestion de base de données avec son language SQL et des outils tel que MongoDB ou encore PostgreSQL."
    },
    inputs: [
      { id: 1, alt: 'Ruby', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRys5UJSddG96thCcHEDNaEElhTCYfDAty0xeZnLVxvODmGZ3b6PA&s' },
      { id: 2, alt: 'Rails', img: 'https://img2.freepng.fr/20180824/gfo/kisspng-ruby-on-rails-logo-software-framework-unicorn-ruby-on-rails-5-5b804d22a1d260.3011829915351350106628.jpg' },
      { id: 3, alt: 'PostgreSQL', img: 'https://p7.hiclipart.com/preview/396/90/545/postgresql-database-logo-computer-icons-replication-software-developer.jpg' }
    ],
    btnText: "Découvrez mes projets"
  }

  render() {
    return (
      <div id="section-two" className="section-two">
        <a href="/" id="Back-end" className="section-anchor"> </a>
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
