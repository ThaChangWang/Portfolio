import React from "react"

import experienceData from "./experienceData"
import Experience from "./experience"

function Experiences() {

  return (
    <div>
    <br />
      {experienceData.map(experience => {
        return <Experience thisExperience={experience} />
      })}
    </div>
  )
}

export default Experiences
