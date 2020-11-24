
import React, { useState } from "react"

import './App.css';
import Header from "./header.js"
import About from "./about.js"
import Classes from "./classes.js"
import Projects from "./projects.js"

function App() {

  const [page, setPage] = useState("about")

  if (page === "about") {

    return (
    <div className="App">
      <div className="Header">
        <Header setPage={setPage}/>
      </div>

      <About /> 

    </div>
    )

  }

  else if (page === "classes") {

    return (
    <div className="App">
      <div className="Header">
        <Header setPage={setPage}/>
      </div>

      <Classes /> 

    </div>
    )
  }

  else if (page === "projects") {

    return (
    <div className="App">
      <div className="Header">
        <Header setPage={setPage}/>
      </div>

      <Projects /> 

    </div>
    )

  }

}



export default App;
