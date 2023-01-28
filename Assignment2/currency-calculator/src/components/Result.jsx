import React from "react";
import x from "./Input.jsx"


const style = {
    marginTop: "30px",
    borderRadius : "30px",
    border : "1px solid #ccc",
    
 
    paddingBottom: "20px",
    paddingLeft: "10px" ,
     paddingTop: "10px",
     paddingRight: "10px"
}



function Result(){
    function a(){
        document.querySelector('output').innerHTML = x;
    }
    return (
        <div>
            <div className = "submit">
                <button onClick = {a}>Evaluate</button>
            </div>
            <div  style={style} >
                <output>{x.givenCurrency}</output>
            </div>
        </div>
        
    )
}

export default Result;