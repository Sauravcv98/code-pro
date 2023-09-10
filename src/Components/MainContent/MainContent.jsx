import react from "react";
import "./MainContent.css";
import Card from "./../Card/Card.jsx"
import getProblems from "./../../Backend/problems.js"


function MainContent(){
    let allProblems = getProblems();
    // console.log("Saurav",allProblems.keys())

    return (
        <>
        <div class="MainContent">
            <div id="ProblemsContent">
                {Object.keys(allProblems).map(head => <Card head={head} problems={allProblems[head]}/>)}
            </div>
        </div>
        </>
    )
}

export default MainContent;