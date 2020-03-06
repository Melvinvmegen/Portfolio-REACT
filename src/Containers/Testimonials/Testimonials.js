import React, { Component } from "react";
import Testimonial from "../../Components/Testimonial/Testimonial";
import { BreakpointProvider } from 'react-socks';

class Testimonials extends Component {
  state = {
    testimonials: [
      {
        id: 1,
        avatar: "https://royalbrinkman.com/content/files/images/foto's/Sarah/mensen/rob.helderman@royalbrinkman.com.png",
        name: "Rob Helderman",
        company: "E-commerce Manager, Royal Brinkman",
        quote: "Il prend des mesures générales visant tous les facteurs environnementaux de la partie digitale.De la gestion d'articles, CRM, aux campagnes e-mail, en passant par le référencement naturel et le SEA."
      },
      {
        id: 2,
        avatar: "https://www.platonformation.com/wp-content/uploads/2019/09/jonathan-chaffenjeon.png",
        name: "Jonathan Chaffanjon",
        company: "Gérant, Platon Formation",
        quote: "Sérieux et impliqué dans les projets, nous avons colloboré sur plusieurs projets dont un de référencement naturelle ( Platonformation.com ) ainsi que mon logiciel de gestion de base de données. Travail en autonomie."
      },
      {
        id: 3,
        avatar: "https://media-exp1.licdn.com/dms/image/C5603AQHx3Z4lmjRR3g/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=k4f-EvGIO1qB8k07C7FFG-psOBqPNFcdd7-MSjXcxc8",
        name: "Lucas Jamelin",
        company: "Label Manager, 6K RIO RECORDS",
        quote: "Il a été de bons conseils et surtout très volontaire et force de proposition. Ses qualités stratégiques ne peuvent qu’optimiser son travail et ses rendus qui sont toujours bien ficellés et accompagnés d’une justification de ses choix toujours très pertinente."
      }
    ]
  }

  render() {

    return (
      <div className="section-testimonial" >
        <div className="section-main-testimonials">
          <div className="section-title title-center" data-aos="zoom-in-up">
            <h2 className="title-bold">ILS M'ONT FAIT CONFIANCE</h2>
            <h3 class="featured-item-subheader italic align-center">Pour leurs projets de développement d'application web</h3>
          </div>
          <div className="row-fluid">
            <div className="section-testimonials">
              <BreakpointProvider>
                <Testimonial testimonials={this.state.testimonials} />
              </BreakpointProvider>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Testimonials;

