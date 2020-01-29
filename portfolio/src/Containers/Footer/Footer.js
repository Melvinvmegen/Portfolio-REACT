import React, { Component } from "react";
import SocialLinks from "../../Components/SocialLinks/SocialLinks";
import Newsletter from "../../Components/Newsletter/Newsletter";
import FooterNav from './FooterNav/FooterNav'

class footer extends Component {
  state = {
    links: [
      { id: 1, name: 'LinkedIn', icon: 'fa-linkedin', ahref: "https://www.linkedin.com/in/melvin-van-megen/" },
      { id: 2, name: 'Twitter', icon: 'fa-twitter', ahref: "" },
      { id: 3, name: 'Skype', icon: 'fa-skype', ahref: "" },
      { id: 4, name: 'Github', icon: 'fa-github', ahref: "https://github.com/Melvinvmegen" },
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
                  <h1><a href="#">Contact me</a></h1>
                </div>
                <div className="footer-header-inner-right">
                  <SocialLinks links={this.state.links}/>
                </div>
              </div>
              <div className="footer-main">
                <Newsletter/>
                <FooterNav />
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

export default footer;

