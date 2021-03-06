import React, { Component } from "react"
import { Link } from "gatsby"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import * as Tone from "tone"

import "./piano.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

class Piano extends Component {
  constructor(props) {
    super(props)
    // this.now = Tone.now()
    this.synthsOnEnter = []
    this.synthsOnBack = []
    this.synthsOnEnterBlack = []
    this.synthsOnBackBlack = []
    this.numOfKeys = 0
    this.whiteKeys = [
      "b6",
      "a6",
      "g6",
      "f6",
      "e6",
      "d6",
      "c6",

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

      "b3",
      "a3",
      "g3",
      "f3",
      "e3",
      "d3",
      "c3",

      "b2",
      "a2",
      "g2",
      "f2",
      "e2",
      "d2",
      "c2",

      "b1",
      "a1",
      "g1",
      "f1",
      "e1",
      "d1",
      "c1",

      "b0",
      "a1",
    ]

    this.blackKeys = [
      "A#6",
      "G#6",
      "F#6",
      "D#6",
      "C#6",

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
      "A#3",
      "G#3",
      "F#3",
      "D#3",
      "C#3",
      "A#2",
      "G#2",
      "F#2",
      "D#2",
      "C#2",
      "A#1",
      "G#1",
      "F#1",
      "D#1",
      "C#1",
      "A#0",

    ]
  }
  componentDidMount() {
    gsap.registerPlugin(ScrollTrigger)
    this.numOfKeys = 44;
    console.log(this.blackKeys.length + this.whiteKeys.length)
    console.log(document.getElementsByClassName("piano__whitekey__key").length + document.getElementsByClassName("piano__blackkey__key").length)
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
    // console.log(i.trigger.id)
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
    this.synthsOnBackBlack[i.trigger.id - this.numOfKeys].triggerAttackRelease(
      this.blackKeys[i.trigger.id - this.numOfKeys],
      "8n"
    )
  }

  playNoteOnBackBlack(i) {
    console.log(i.trigger)
    console.log(this.synthsOnEnterBlack[i.trigger.id - this.numOfKeys])
    this.synthsOnEnterBlack[i.trigger.id - this.numOfKeys].triggerAttackRelease(
      this.blackKeys[i.trigger.id - this.numOfKeys],
      "8n"
    )
  }

  handleClick() {
    Tone.start()
    document.getElementsByClassName("piano__top__start__inactive")[0].classList.remove('jump');
    document.getElementsByClassName("piano__top__start__inactive")[0].classList.add('fade');

    // console.log(document.getElementsByClassName("piano__hero__play")[0])
    // document
    //   .getElementsByClassName("piano__hero__play")[0]
    //   .classList.add("fadeOut")

    // document.getElementsByClassName("piano__hero__arrow")[0].style.opacity =
    //   "100"

    // document.getElementsByTagName("body")[0].style.overflowX = "scroll"
    // document.getElementsByTagName("body")[0].style.overflowY = "scroll"
    document.getElementsByTagName("body")[0].style.position = "relative"

    // document.getElementsByTagName("body")[0].style.height = "auto"

    // document.getElementsByClassName("piano__cover")[0].style.opacity = "0"
  }

  // releaseNote() {
  //   console.log("relrease")
  //   this.synth.triggerRelease()
  // }
  render() {
    return (
      <div className="piano">
        {/* <div className="piano__cover"></div> */}
        <div className="piano__top">
          <h3>Scrollbar Piano</h3>

          <h3 className="piano__top__start__inactive jump" onMouseDown={() => this.handleClick()}>Start</h3>
        </div>
        {/* <PanZoom zoomSpeed={0}> */}
        {/* <div className="piano__background-gradient"></div> */}
        {/* <header className="piano__hero">
          <h1 className="piano__hero__title">scrollbar piano</h1>
          <div className="piano__hero__buttons">
            <h1
              className="piano__hero__play"
              onMouseDown={() => this.handleClick()}
            >
              play
            </h1>
            <svg
              width="134"
              height="133"
              viewBox="0 0 134 133"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="piano__hero__arrow"
            >
              <g filter="url(#filter0_d)">
                <path
                  d="M31 66H39V74H47V82H55V90H63V98H71V90H79V82H87V74H95V66H103V58H95V66H87V74H79V82H71V90H63V82H55V74H47V66H39V58H31V66Z"
                  fill="#FFA89C"
                  fillOpacity="0.6"
                />
                <path
                  d="M31 35H39V43H47V51H55V59H63V67H71V59H79V51H87V43H95V35H103V27H95V35H87V43H79V51H71V59H63V51H55V43H47V35H39V27H31V35Z"
                  fill="#FFA89C"
                  fillOpacity="0.6"
                />
                <path
                  d="M30.5 66V66.5H31H38.5V74V74.5H39H46.5V82V82.5H47H54.5V90V90.5H55H62.5V98V98.5H63H71H71.5V98V90.5H79H79.5V90V82.5H87H87.5V82V74.5H95H95.5V74V66.5H103H103.5V66V58V57.5H103H95H94.5V58V65.5H87H86.5V66V73.5H79H78.5V74V81.5H71H70.5V82V89.5H63.5V82V81.5H63H55.5V74V73.5H55H47.5V66V65.5H47H39.5V58V57.5H39H31H30.5V58V66ZM30.5 35V35.5H31H38.5V43V43.5H39H46.5V51V51.5H47H54.5V59V59.5H55H62.5V67V67.5H63H71H71.5V67V59.5H79H79.5V59V51.5H87H87.5V51V43.5H95H95.5V43V35.5H103H103.5V35V27V26.5H103H95H94.5V27V34.5H87H86.5V35V42.5H79H78.5V43V50.5H71H70.5V51V58.5H63.5V51V50.5H63H55.5V43V42.5H55H47.5V35V34.5H47H39.5V27V26.5H39H31H30.5V27V35Z"
                  stroke="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0"
                  width="134"
                  height="133"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="15" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 0.658824 0 0 0 0 0.611765 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </header> */}
        <main className="piano__allkeys">
          <div className="piano__whitekey">
            <div className="piano__whitekey__key piano__b6"></div>
            <div className="2 piano__whitekey__key piano__a6 "></div>
            <div className="3 piano__whitekey__key piano__g6"></div>
            <div className="4 piano__whitekey__key piano__f6"></div>
            <div className="5 piano__whitekey__key piano__e6"></div>
            <div className="6 piano__whitekey__key piano__d6"></div>
            <div className="7 piano__whitekey__key piano__c6"></div>

            <div className="piano__whitekey__key piano__b5"></div>
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

            <div className="8 piano__whitekey__key piano__b3"></div>
            <div className="9 piano__whitekey__key piano__a3"></div>
            <div className="10 piano__whitekey__key piano__g3"></div>
            <div className="11 piano__whitekey__key piano__f3"></div>
            <div className="12 piano__whitekey__key piano__e3"></div>
            <div className="13 piano__whitekey__key piano__d3"></div>
            <div className="14 piano__whitekey__key piano__c3"></div>

            <div className="8 piano__whitekey__key piano__b2"></div>
            <div className="9 piano__whitekey__key piano__a2"></div>
            <div className="10 piano__whitekey__key piano__g2"></div>
            <div className="11 piano__whitekey__key piano__f2"></div>
            <div className="12 piano__whitekey__key piano__e2"></div>
            <div className="13 piano__whitekey__key piano__d2"></div>
            <div className="14 piano__whitekey__key piano__c2"></div>

            <div className="8 piano__whitekey__key piano__b1"></div>
            <div className="9 piano__whitekey__key piano__a1"></div>
            <div className="10 piano__whitekey__key piano__g1"></div>
            <div className="11 piano__whitekey__key piano__f1"></div>
            <div className="12 piano__whitekey__key piano__e1"></div>
            <div className="13 piano__whitekey__key piano__d1"></div>
            <div className="14 piano__whitekey__key piano__c1"></div>

            <div className="14 piano__whitekey__key piano__b0"></div>
            <div className="14 piano__whitekey__key piano__a0"></div>


          </div>
          <div className="piano__blackkey">
            <div className="piano__blackkey__key piano__58"></div>
            <div className="piano__blackkey__key piano__56"></div>
            <div className="piano__blackkey__key piano__54"></div>
            <div className="piano__blackkey__key-none piano__"></div>
            <div className="piano__blackkey__key piano__51"></div>
            <div className="piano__blackkey__key piano__49"></div>

            <div className="piano__blackkey__key-none piano__"></div>
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

            <div className="piano__blackkey__key-none piano__"></div>
            <div className="piano__blackkey__key piano__58"></div>
            <div className="piano__blackkey__key piano__56"></div>
            <div className="piano__blackkey__key piano__54"></div>
            <div className="piano__blackkey__key-none piano__"></div>
            <div className="piano__blackkey__key piano__51"></div>
            <div className="piano__blackkey__key piano__49"></div>


            <div className="piano__blackkey__key-none piano__"></div>
            <div className="piano__blackkey__key piano__46"></div>
            <div className="piano__blackkey__key piano__44"></div>
            <div className="piano__blackkey__key piano__42"></div>
            <div className="piano__blackkey__key-none piano__"></div>
            <div className="piano__blackkey__key piano__39"></div>
            <div className="piano__blackkey__key piano__37"></div>

            <div className="piano__blackkey__key-none piano__"></div>
            <div className="piano__blackkey__key piano__34"></div>
            <div className="piano__blackkey__key piano__32"></div>
            <div className="piano__blackkey__key piano__30"></div>
            <div className="piano__blackkey__key-none piano__"></div>
            <div className="piano__blackkey__key piano__27"></div>
            <div className="piano__blackkey__key piano__25"></div>

            <div className="piano__blackkey__key-none piano__"></div>
            <div className="piano__blackkey__key piano__22"></div>
          </div>
        </main>
      </div>
    )
  }
}
export default Piano
