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
        <p className="footer__note">
          Generating music using{" "}
          <a href="https://tonejs.github.io/" target="_blank">
            tone.js
          </a>
        </p>
        <p className="footer__note">
          Creating scroll animations using {" "}
          <a href="https://greensock.com/scrolltrigger/" target="_blank">
            GSAP
          </a>
        </p>
        <p className="footer__note">
          Using Typeface {" "}
          <a href="http://velvetyne.fr/fonts/solide-mirage/" target="_blank">
            Solide Mirage
          </a>
          , developed by Jérémy Landes, with some contributions by Walid Bouchouchi, and distributed by Velvetyne Foundry
        </p>

        <p className="footer__note">
          Hosting open-source code on{" "}
          <a href="https://github.com/amandayehh/scrollbar-piano/" target="_blank">
            Github
          </a>
        </p>
        <p className="footer__note">
          2020 ©{" "}
          <a href="https://amandayeh.com/" target="_blank">
            Amanda Yeh
          </a>
        </p>
      </footer>
    )
  }
}
export default Footer
