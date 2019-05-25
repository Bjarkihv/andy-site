import React, { Component } from "react";
import Umslag from "../assets/images/Umslag.jpg";

class Homepage extends Component {
  render() {
    return (
      <div>
        <h3>Our debut album is out now!</h3>{" "}
        <img src={Umslag} alt="Album Cover" height="500" width="500" />
        <p> Find it on Spotify, Bandcamp, Soundcloud</p>
      </div>
    );
  }
}

export default Homepage;
