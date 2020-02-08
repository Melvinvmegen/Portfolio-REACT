import React, { Component } from "react";
import SocialLinks from "../../Components/SocialLinks/SocialLinks";
import Newsletter from "../../Components/Newsletter/Newsletter";
import FooterNav from './FooterNav/FooterNav'

class Footer extends Component {
  state = {
    socialLinks: [
      { id: 1, name: 'LinkedIn', icon: 'fa-linkedin', ahref: "https://www.linkedin.com/in/melvin-van-megen/" },
      { id: 2, name: 'Twitter', icon: 'fa-twitter', ahref: "" },
      { id: 3, name: 'Skype', icon: 'fa-skype', ahref: "" },
      { id: 4, name: 'Github', icon: 'fa-github', ahref: "https://github.com/Melvinvmegen" },
    ],
    front: [
      {
        id: 1, title: 'Développeur Front-End', links: [
          { id: 1, name: 'HTML' },
          { id: 2, name: 'CSS' },
          { id: 3, name: 'Javascript' },
          { id: 4, name: 'React' },
        ]
      }
    ],
    linksMar: [
      {
        id: 1, title: 'Développeur Back-End', links: [
          { id: 1, name: 'Ruby' },
          { id: 2, name: 'Rails' },
          { id: 3, name: 'SQL' },
          { id: 4, name: 'MongoDB' },
        ]
      }
    ],
    linksTra: [
      {
        id: 1, title: 'Marketing Digital', links: [
          { id: 1, name: 'SEO' },
          { id: 2, name: 'SEA' },
          { id: 3, name: 'Email Marketing' },
          { id: 4, name: 'Marketing de contenu' },
        ]
      }
    ]
  }

  render() {
    return (
      <div className="component-footer">
        <div className="footer-full-row">
          <div className="footer-inner">
            <div className="footer-header">
              <div className="footer-header-inner">
                <div className="footer-header-inner-left">
                  <h1><a href="/">Contact me</a></h1>
                </div>
                <div className="footer-header-inner-right">
                  <SocialLinks links={this.state.socialLinks} />
                </div>
              </div>
              <div className="footer-main">
                <Newsletter />
                <div className="footer-nav">
                  <nav className="nav-footer-nav">
                    <FooterNav links={this.state.front} />
                    <FooterNav links={this.state.linksMar} />
                    <FooterNav links={this.state.linksTra} />
                  </nav>
                </div>
              </div>
              <div className="footer-bottom">
                <p>Copyright @2019 Mvmegen. All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Footer;

