import React, { Component } from 'react'
import ContentContext from '../../../context/content-context'
import { Breakpoint } from 'react-socks';

class Nav extends Component {
  static contextType = ContentContext
  state = {
    main: [
      { id: 1, name: 'Developpeur Front-end', active: false },
      { id: 2, name: 'Back-end', active: false },
      { id: 3, name: 'Marketeur Digital', active: false },
      { id: 4, name: 'Mes Projets', active: false },
    ]
  }

  toggleActive = (index) => {
    const links = [...this.state.main]
    const alreadyActive = links.filter(link => link.active === true);
    if (alreadyActive.length > 0) {
      alreadyActive[0].active = false
      links[index].active = !links[index].active
      this.setState({ main: links })
    }
    else {
      links[index].active = !links[index].active
      this.setState({ main: links })
    }
  }

  toggleScroll = () => {
    let ref = window.pageYOffset
    const links = [...this.state.main]
    const sectionOne = document.querySelector('#section-one')
    const sectionTwo = document.querySelector('#section-two')
    const sectionThree = document.querySelector('#section-three')
    const sectionGallery = document.querySelector('.gallery-full')
    const sectionTestimonials = document.querySelector('.section-testimonial')
    if (ref >= sectionOne.offsetTop && ref <= sectionTwo.offsetTop) {
      links[0].active = true
      this.setState({ main: links })
    }
    else if (ref >= sectionTwo.offsetTop && ref <= sectionThree.offsetTop) {
      links[0].active = false
      links[1].active = true
      this.setState({ main: links })
    }
    else if (ref >= sectionThree.offsetTop && ref <= sectionGallery.offsetTop) {
      links[1].active = false
      links[2].active = true
      this.setState({ main: links })
    }
    else if (ref >= sectionGallery.offsetTop && ref <= sectionTestimonials.offsetTop) {
      links[2].active = false
      links[3].active = true
      this.setState({ main: links })
    }
    else if (ref >= sectionGallery.offsetTop) {
      links[3].active = false
      this.setState({ main: links })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.toggleScroll.bind(this).bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleScroll.bind(this).bind(this));
  }

  render() {

    return (
      <div className="main-header-center" >
        <Breakpoint large up className="nav-menu">
          {this.state.main.map((link, index) => {
            return <div className="nav-menu-item" key={link.id} onClick={() => this.toggleActive(index)} className={link.active || window.location.hash == "#" + link.name.replace(/ /g, "-") ? "nav-anim" : "nav-item"} >
              <a href={"#" + link.name.replace(/ /g, "-")} data-target={link.id}>
                <span className="text" data-target={link.id}>{link.name}</span>
                <span className="line -bottom"></span>
              </a>
            </div>
          })}
        </Breakpoint>
        <Breakpoint medium down className="nav-menu-mobile">
          {this.state.main.map(link => {
            return <div className="nav-menu-item" key={link.id}>
              <a href={"#" + link.name.replace(/ /g, "-")} className=""><span className="text">{link.name}</span></a>
              <span className="line -bottom"></span>
            </div>
          })}
        </Breakpoint>
      </div>
    )
  }
}

export default Nav;
