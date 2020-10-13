import React, { Component } from "react"
import { Link } from "gatsby"
import { PanZoom } from "react-easy-panzoom"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import * as Tone from "tone"

import "./footer.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

import backgroundNoise from "../../images/noise-gradient.png"

import whiteKey from "../../images/white-key.png"

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__icon">5</div>
        <p className="footer__note">
          Generating music using{" "}
          <a href="https://tonejs.github.io/" target="_blank">
            tone.js
          </a>
        </p>
        <p className="footer__note">
          Using the beautiful pixel typeface{" "}
          <a href="http://velvetyne.fr/fonts/mr-pixel/" target="_blank">
            Mister Pixel
          </a>
          , developed by Christophe Badani and distributed by Velvetyne Foundry
        </p>

        <p className="footer__note">
          Hosting open-source code on{" "}
          <a href="http://velvetyne.fr/fonts/mr-pixel/" target="_blank">
            Github
          </a>
        </p>
        <p className="footer__note">
          2020 ©{" "}
          <a href="http://velvetyne.fr/fonts/mr-pixel/" target="_blank">
            Amanda Yeh
          </a>
        </p>
      </footer>
    )
  }
}
export default Footer
