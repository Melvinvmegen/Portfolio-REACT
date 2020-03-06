import React, { Component, Fragment } from "react";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import SectionThree from "./SectionThree/SectionThree";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </Fragment>
    )
  }
}

export default Home;
