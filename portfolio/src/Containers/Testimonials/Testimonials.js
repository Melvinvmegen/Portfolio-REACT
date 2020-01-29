import React, { Component } from "react";
import Testimonial from "../../Components/Testimonial/Testimonial";

class Testimonials extends Component {
  state = {
    testimonials: [
      {
        avatar: "https://media.licdn.com/dms/image/C4D03AQGW-JP_-b78zQ/profile-displayphoto-shrink_200_200/0?e=1580947200&v=beta&t=R12qVgJftT4HTSBvDIVeQCTwljB0lWWrbXQGFI4qTw4",
        name: "Rob Helderman",
        company: "Royal Brinkman",
        quote: "Il prend des mesures générales visant tous les facteurs environnementaux de la partie digitale.De la gestion d'articles, CRM, aux campagnes e-mail, en passant par le référencement naturel et le SEA."
      },
      {
        avatar: "https://royalbrinkman.fr/images/stories/foto/Michel_van_Megen_2.png",
        name: "Mon Hero",
        company: "il mérite de rester anonyme",
        quote: "La plupart des gens pensent qu'il ira loin dans la vie, voyons jusqu'à où il est prêt à aller."
      },
      {
        avatar: "https://www.lunchr.co/hubfs/TestiCamille@2x.png",
        name: "Une enseignante",
        company: "de crossfit",
        quote: "La discipline, c'est la liberté Melvin ! Lève-toi et poursuis tes putains de rêves."
      }
    ]
  }

  render() {

    return (
      <div className="section-testimonial" >
        <div>
          <div className="section-title title-center" data-aos="zoom-in-up">
            <h2 className="title-bold"><a href="">Ils m'ont fait confiance</a></h2>
          </div>
          <div className="row-fluid">
            <div className="section-testimonials">
              <div className="testimonials-list">
                <Testimonial testimonials={this.state.testimonials}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Testimonials;

