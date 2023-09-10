import React, { useState } from "react";
import algoExpert from "./assets/react.svg"
import Header from "./Components/Header/Header.jsx"
import MainContent from "./Components/MainContent/MainContent.jsx"
import "./App.css"

function App(){
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="app">
        <Header/>
        <MainContent/>
      </div>
      {/* <div>{count}</div>
      <button onClick={()=>setCount((x) => x+1)}> Click to increase count</button> */}
    </>
  )
}

export default App