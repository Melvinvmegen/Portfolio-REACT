import React, { Component } from "react";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import SectionThree from "./SectionThree/SectionThree";

class Home extends Component {
  render() {
    return (
      <div className="section-main">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    )
  }
}

export default Home;

