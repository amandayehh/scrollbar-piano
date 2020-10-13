import React from "react"

import Piano from "../components/piano/piano"
import Footer from "../components/footer/footer"

import "../css/global.css"

function Index(props) {
  return (
    <div className="index">
      <Piano />
      <Footer />
    </div>
  )
}
export default Index
