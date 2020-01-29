import React, { Component } from "react";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import SectionThree from "./SectionThree/SectionThree";

class Home extends Component {
  render() {
    return (
      <div className="section-main">
        <a id="Marketeur-Digital" className="section-anchor"></a>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    )
  }
}

export default Home;

