import React, { Component } from "react"
import { Link } from "gatsby"
import { PanZoom } from "react-easy-panzoom"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import * as Tone from "tone"

import "./piano.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

import backgroundNoise from "../../images/noise-gradient.png"

import whiteKey from "../../images/white-key.png"

class Piano extends Component {
  constructor(props) {
    super(props)
    // this.now = Tone.now()
    this.synthsOnEnter = []
    this.synthsOnBack = []
    this.synthsOnEnterBlack = []
    this.synthsOnBackBlack = []

    this.whiteKeys = [
      "b5",
      "a5",
      "g5",
      "f5",
      "e5",
      "d5",
      "c5",
      "b4",
      "a4",
      "g4",
      "f4",
      "e4",
      "d4",
      "c4",
    ]

    this.blackKeys = [
      "A#5",
      "G#5",
      "F#5",
      "D#5",
      "C#5",
      "A#4",
      "G#4",
      "F#4",
      "D#4",
      "C#4",
    ]
  }
  componentDidMount() {
    gsap.registerPlugin(ScrollTrigger)

    let allWhite = document.getElementsByClassName("piano__whitekey__key")
    for (let i = 0; i < allWhite.length; i++) {
      allWhite[i].id = i
    }

    let allBlack = document.getElementsByClassName("piano__blackkey__key")
    for (let i = 0; i < allBlack.length; i++) {
      allBlack[i].id = i + allWhite.length
      console.log(allBlack[i].id)
    }

    gsap.utils.toArray(".piano__whitekey__key").forEach((key, i) => {
      this.synthsOnEnter[i] = new Tone.Synth().toDestination()
      this.synthsOnBack[i] = new Tone.Synth().toDestination()

      ScrollTrigger.create({
        trigger: key,
        markers: true,
        toggleActions: "restart none reverse pause",
        toggleClass: "active-white",
        start: "top center",
        end: "bottom center",
        ease: "ease-in-out",
        onEnter: i => this.playNoteOnEnter(i),
        onEnterBack: i => this.playNoteOnBack(i),
        // onLeave: i => this.endNote(i),
        // onLeaveBack: i => this.endNote(i),
      })
    })

    gsap.utils.toArray(".piano__blackkey__key").forEach((key, i) => {
      this.synthsOnEnterBlack[i] = new Tone.Synth().toDestination()
      this.synthsOnBackBlack[i] = new Tone.Synth().toDestination()

      ScrollTrigger.create({
        trigger: key,
        markers: true,
        toggleActions: "restart none reverse pause",
        toggleClass: "active-black",
        start: "top center",
        end: "bottom center",
        ease: "ease-in-out",
        onEnter: i => this.playNoteOnEnterBlack(i),
        onEnterBack: i => this.playNoteOnBackBlack(i),

        // onEnterBack: i => this.playNoteOnBackBlack(i),
      })
    })

    // document.querySelector("button").addEventListener("click", function () {
    //   if (Tone.Transport.state !== "started") {
    //     Tone.Transport.start()
    //   } else {
    //     Tone.Transport.stop()
    //   }
    // })
  }

  playNoteOnEnter(i) {
    // console.log(this.synths)
    console.log(i.trigger.id)
    this.synthsOnEnter[i.trigger.id].triggerAttackRelease(
      this.whiteKeys[i.trigger.id],
      "8n"
    )
    // trigger the attack immediately
    // wait one second before triggering the release
  }

  playNoteOnBack(i) {
    // console.log(this.synths)
    console.log(i.trigger.id)
    this.synthsOnBack[i.trigger.id].triggerAttackRelease(
      this.whiteKeys[i.trigger.id],
      "8n"
    )
  }

  playNoteOnEnterBlack(i) {
    console.log(i.trigger)
    this.synthsOnBackBlack[i.trigger.id - 14].triggerAttackRelease(
      this.blackKeys[i.trigger.id - 14],
      "8n"
    )
  }

  playNoteOnBackBlack(i) {
    console.log(i.trigger)
    console.log(this.synthsOnEnterBlack[i.trigger.id - 14])
    this.synthsOnEnterBlack[i.trigger.id - 14].triggerAttackRelease(
      this.blackKeys[i.trigger.id - 14],
      "8n"
    )
  }

  handleClick() {
    Tone.start()
    // console.log(document.getElementsByClassName("piano__hero__play")[0])
    document
      .getElementsByClassName("piano__hero__play")[0]
      .classList.add("fadeOut")
  }

  // releaseNote() {
  //   console.log("relrease")
  //   this.synth.triggerRelease()
  // }
  render() {
    return (
      <div className="piano">
        {/* <PanZoom zoomSpeed={0}> */}
        {/* <div className="piano__background-gradient"></div> */}
        <div className="piano__hero">
          <h1 className="piano__hero__title">scrollbar piano</h1>
          <h1
            className="piano__hero__play"
            onMouseDown={() => this.handleClick()}
          >
            play
          </h1>
        </div>

        <div className="piano__allkeys">
          <div className="piano__whitekey">
            <div
              className="piano__whitekey__key piano__b5  piano__whitekey__first"
              id="1"
            ></div>
            <div className="2 piano__whitekey__key piano__a5 "></div>
            <div className="3 piano__whitekey__key piano__g5"></div>
            <div className="4 piano__whitekey__key piano__f5"></div>
            <div className="5 piano__whitekey__key piano__e5"></div>
            <div className="6 piano__whitekey__key piano__d5"></div>
            <div className="7 piano__whitekey__key piano__c5"></div>
            <div className="8 piano__whitekey__key piano__b4"></div>
            <div className="9 piano__whitekey__key piano__a4"></div>
            <div className="10 piano__whitekey__key piano__g4"></div>
            <div className="11 piano__whitekey__key piano__f4"></div>
            <div className="12 piano__whitekey__key piano__e4"></div>
            <div className="13 piano__whitekey__key piano__d4"></div>
            <div className="14 piano__whitekey__key piano__c4"></div>
          </div>
          <div className="piano__blackkey">
            <div className="piano__blackkey__key piano__82"></div>
            <div className="piano__blackkey__key piano__80"></div>
            <div className="piano__blackkey__key piano__78"></div>
            <div className="piano__blackkey__key-none piano__"></div>
            <div className="piano__blackkey__key piano__75"></div>
            <div className="piano__blackkey__key piano__73"></div>
            <div className="piano__blackkey__key-none piano__"></div>
            <div className="piano__blackkey__key piano__70"></div>
            <div className="piano__blackkey__key piano__68"></div>
            <div className="piano__blackkey__key piano__66"></div>
            <div className="piano__blackkey__key-none piano__"></div>
            <div className="piano__blackkey__key piano__63"></div>
            <div className="piano__blackkey__key piano__61"></div>
          </div>
        </div>
        <div className="piano__cover"></div>
      </div>
    )
  }
}
export default Piano
