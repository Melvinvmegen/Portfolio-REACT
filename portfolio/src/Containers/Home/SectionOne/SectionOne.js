import React, { Component } from 'react'
import BlaBla from '../../../Components/BlaBLa/BlaBla'
import ButtonProject from '../../../Components/ButtonProject/ButtonProject';
import Polygons from '../../../Components/Polygons/Polygons';

class SectionOne extends Component {
  state = {
    blabla:
    {
      id: 1, title: 'MARKETEUR DIGITAL', subtitle: 'Bachelor, spécialisation Marketing', text: "Etudes réalisées à Kedge Business School ou j'ai eu la chance de développer mes compétences numériques à travers de nombreux stages et expériences. J'ai également passé 2 ans en tant que responsable de la transition digitale pour le marché français au sein de l'entreprise, Royal Brinkman. Au cours de cette expérience j'ai appris à maîtriser différents outils tels que Mailchimp, Unbounce, Hotjar, Google Analytics, ahrefs ainsi que Joomla."
    },
    inputs: [
      { alt: 'MailChimp', img: 'https://www.dexigner.com/images/news/xxi/31385.jpg' },
      { alt: 'Ahrefs', img: 'https://cdn.ahrefs.com/images/mediakit/logo_monochrome@2x.png' },
      { alt: 'AdWords', img: 'https://www.dexigner.com/images/news/xxi/31385.jpg' }
    ],
    btnText: "Découvrez mes projets"
  }

  render() {
    return (
      <div id="section-one" className="section-one">
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
