import React, { Component } from 'react'
import BlaBla from '../../../Components/BlaBLa/BlaBla'
import ButtonProject from '../../../Components/ButtonProject/ButtonProject';
import Polygons from '../../../Components/Polygons/Polygons';

class SectionThree extends Component {
  state = {
    blabla: {
      id: 1, title: 'TRADUCTEUR', subtitle: 'Bilingue, franco-néerlandais', text: "Né et élevé en France d'un père néerlandais et d'une mère française. Après l'obtention de mon Bachelor, j'ai vécu 3 ans aux Pays-Bas et étudié l'anglais afin d'intégrer l'université de Rotterdam. intégration pour laquelle j'ai obtenu une note de 102 sur 120 au TOEFL ainsi qu'un score de 720 sur 800 au GMAT. L'ouverture sur le monde, les différences culturelles ainsi que les langues sont définitivement une de mes priorités."
    },
    inputs: [
      { alt: 'French', img: 'https://us.123rf.com/450wm/iakhiiadmytro/iakhiiadmytro1701/iakhiiadmytro170100164/70473411-flat-icon-in-black-and-white-map-of-france.jpg?ver=6' },
      { alt: 'English', img: 'https://us.123rf.com/450wm/iakhiiadmytro/iakhiiadmytro1701/iakhiiadmytro170100133/70472687-flat-icon-in-black-and-white-united-states-map.jpg?ver=6' },
      { alt: 'Néerlandais', img: 'https://previews.123rf.com/images/iakhiiadmytro/iakhiiadmytro1701/iakhiiadmytro170100165/70473412-flat-icon-in-black-and-white-netherlands-map.jpg' }
    ],
    btnText: "Découvrez mes projets"
  }

  render() {
    return (
      <div id="section-three" className="section-three">
        <a id="Traducteur-" className="section-anchor"></a>
        <div className="section-wrapper">
          <div className="section-left col-xs-12 col-sm-6 col-md-6">
            <BlaBla blabla={this.state.blabla} />
            <ButtonProject text={this.state.btnText}/>
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

export default SectionThree;
