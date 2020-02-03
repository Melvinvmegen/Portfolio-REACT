import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import RoyalBrinkman from './royalbrinkman.png'
import Mindseed from './mindseed.png'
import Goboat from './goboat.jpg'
import ThomasKrief from './thomaskrief.png'
import CarouselImage from "./CarouselImage/CarouselImage";
import ButtonProject from "../../Components/ButtonProject/ButtonProject";
import CarouselContent from "./CarouselContent/CarouselContent";
import Tag from "../../Components/Tag/Tag";


class Gallery extends Component {
  state = {
    images: [
      { img: RoyalBrinkman, alt: "Royal Brinkman" },
      { img: Goboat, alt: "Goboat" },
      { img: Mindseed, alt: "Mindseed" },
      { img: ThomasKrief, alt: "ThomasKrief" },
    ],
    content: [
      { title: "ROYAL BRINKMAN", desc: "La boutique de devis en ligne pour l'horticulture professionnelle. Où vous pouvez trouver produits, connaissances et conseils personnalisés liés à l'horticulture. Projet de deux ans en tant que responsable de la transition digitale. Mes deux années de contribution ont une meilleure présence digitale avec une boutique en ligne professionnelle." },
      { title: "GOBOAT", desc: "Projet de 5 jours réalisé au cours du Bootcamp proposé par la formation de développeur web Full-Stack, le Wagon. Avec comme repère Airbnb nous avons créé une plateforme de location de bateau. Email : admin@gmail.com, Password : password " },
      { title: "MINDSEED", desc: "Projet de deux semaines réalisé au cours du Bootcamp proposé par la formation de développeur web Full-Stack, le Wagon. Nous avons créé un site d'aide à l'apprentissage avec un système de flashcards poussé. Celui-ci est à destination des étudiants, professeurs ou simple curieux avare d'apprentissage. Email : melvin@gmail.com, Password : password" },
      { title: "THOMAS KRIEF", desc: "Projet de création d'un site vitrine pour l'ancien skieur professionnel et nouvel artiste : Thomas Krief. L'objectif rechercher, mettre en avant ses dernières créations et inviter les visiteurs à se diriger vers son Instagram pour en savoir plus." },
    ],
    tagsRB: [
      { id: 1, name: "HTML5" },
      { id: 2, name: "CSS3" },
      { id: 3, name: "Javascript" },
      { id: 4, name: "Joomla" }
    ],
    tagsGB: [
      { id: 1, name: "HTML5" },
      { id: 2, name: "CSS3" },
      { id: 3, name: "Javascript" },
      { id: 6, name: "Ruby" },
      { id: 7, name: "Rails" },
      { id: 9, name: "Heroku" },
    ],
    tagsMS: [
      { id: 1, name: "HTML5" },
      { id: 2, name: "CSS3" },
      { id: 3, name: "Javascript" },
      { id: 6, name: "Ruby" },
      { id: 7, name: "Rails" },
      { id: 9, name: "Heroku" },
    ],
    tagsTK: [
      { id: 1, name: "HTML5" },
      { id: 2, name: "CSS3" },
      { id: 3, name: "Javascript" },
      { id: 4, name: "React.js" },
      { id: 5, name: "Heroku" },
    ],
    btnText : "Se rendre sur le site"
  }

  render() {
    return (
      <div className="section-slide">
        <a href="/" id="Mes-Projets" className="section-anchor"> </a>
        <div className="section-wrapper-gallery">
          <div>
            <div className="section-title" data-aos="zoom-in-up">
              <h2 className="title-bold align-center">MES PROJETS</h2>
              <h3 className="featured-item-subheader italic align-center">Découvrez un exemple concret de tout ce qui précède</h3>
            </div>
            <Carousel className="gallery-content" interval="1000000">
              <Carousel.Item className="myslides fade-slide first-slide" data-aos="fade-up">
                <CarouselImage img={this.state.images[0].img} alt={this.state.images[0].alt} />
                <div className="gallery-left col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <CarouselContent title={this.state.content[0].title} desc={this.state.content[0].desc}/>
                  <Tag tags={this.state.tagsRB}/>
                  <ButtonProject text={this.state.btnText}/>
                </div>
              </Carousel.Item>
              <Carousel.Item className="myslides fade-slide first-slide" data-aos="fade-up">
                <CarouselImage img={this.state.images[1].img} alt={this.state.images[1].alt} />
                <div className="gallery-left col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <CarouselContent title={this.state.content[1].title} desc={this.state.content[1].desc} />
                  <Tag tags={this.state.tagsGB} />
                  <ButtonProject text={this.state.btnText} />
                </div>
              </Carousel.Item>
              <Carousel.Item className="myslides fade-slide first-slide" data-aos="fade-up">
                <CarouselImage img={this.state.images[2].img} alt={this.state.images[2].alt} />
                <div className="gallery-left col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <CarouselContent title={this.state.content[2].title} desc={this.state.content[2].desc} />
                  <Tag tags={this.state.tagsMS} />
                  <ButtonProject text={this.state.btnText} />
                </div>
              </Carousel.Item>
              <Carousel.Item className="myslides fade-slide first-slide" data-aos="fade-up">
                <CarouselImage img={this.state.images[3].img} alt={this.state.images[3].alt} />
                <div className="gallery-left col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <CarouselContent title={this.state.content[3].title} desc={this.state.content[3].desc} />
                  <Tag tags={this.state.tagsTK} />
                  <ButtonProject text={this.state.btnText} />
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery;
