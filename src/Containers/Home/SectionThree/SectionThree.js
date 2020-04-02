import React, { Component } from 'react'
import BlaBla from '../../../Components/BlaBLa/BlaBla'
import ButtonProject from '../../../Components/ButtonProject/ButtonProject';
import Polygons from '../../../Components/Polygons/Polygons';
import Mailchimp from './MailC.jpg'


class SectionThree extends Component {
  state = {
    blabla:
    {
      id: 1, title: 'MARKETEUR DIGITAL', subtitle: 'Bachelor, spécialisation Marketing', text: "Etudes réalisées à Kedge Business School ou j'ai eu la chance de développer mes compétences numériques à travers de nombreux stages et expériences. J'ai également passé 2 ans en tant que responsable de la transition digitale pour le marché français au sein de l'entreprise, Royal Brinkman. Au cours de cette expérience j'ai appris à maîtriser différents outils tels que Mailchimp, Unbounce, Hotjar, Google Analytics, ahrefs ainsi que Joomla."
    },
    inputs: [
      { id: 1, alt: 'MailChimp', img: Mailchimp },
      { id: 2, alt: 'Ahrefs', img: "https://3x5yp62s8loz3jw8273enqos16xh-wpengine.netdna-ssl.com/wp-content/uploads/icon360-Analytics.png" },
      { id: 3, alt: 'AdWords', img: "https://www.pngitem.com/pimgs/m/242-2422855_transparent-google-adwords-logo-png-google-adwords-logo.png" }
    ],
    btnText: "Découvrez mes projets",
    href: "#Mes-Projets"
  }

  render() {
    return (
      <div id="section-three" className="section-three">
        <div className="section-main">
          <a href="/" id="Marketeur-Digital" className="section-anchor"> </a>
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

export default SectionThree;
