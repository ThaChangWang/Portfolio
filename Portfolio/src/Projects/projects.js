import React from "react"

import projectData from "./projectData"
import Project from "./project"

function Projects() {

  return (
    <div>
    <br />
      {projectData.map(project => {
        return <Project thisProject={project} />
      })}
    </div>
  )
}

export default Projects
