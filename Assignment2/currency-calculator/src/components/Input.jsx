import React from "react";


const style = {
    borderRadius : "30px",
    border : "1px solid #ccc"
}
const style2 = {
    marginTop: "30px",
    borderRadius : "30px",
    border : "1px solid #ccc",
    
 
    paddingBottom: "20px",
    paddingLeft: "10px" ,
     paddingTop: "10px",
     paddingRight: "10px"
}

  function a(){
        let givenValue = document.getElementById('inputSelect').value;
        let reqValue = document.getElementById('outputSelect').value;
        let amount = document.querySelector('input').value;
        if(givenValue === "dollar"){
            switch(reqValue){
                case "dollar":
                    document.querySelector('output').innerHTML = document.querySelector('input').value;
                    break;
                case "rupee":
                    document.querySelector('output').innerHTML = 81*document.querySelector('input').value;
                    break;
                case "rubble":
                    document.querySelector('output').innerHTML = 70.34*document.querySelector('input').value;
                    break;
                default: 
                    break;
            }
                


        }
    }


function Input(){
    return (
        <div>
           <div style = {style}>
             <input type="text" placeholder="Amount"></input>
             <select id = "inputSelect">
                <option value="rupee">rupee</option>
                <option value = "dollar">dollar</option>
                <option value = "rubble">rubles</option>
             </select>
             <p>to be converted in</p>
            <select id = "outputSelect">
                <option value="rupee">rupee</option>
                <option value = "dollar">dollar</option>
                <option value = "rubble">rubles</option>
             </select>
           </div>
            <div>
            <div className = "submit">
                <button onClick = {a}>Evaluate</button>
            </div>
            <div  style={style2} >
                <output>Try Something</output>
            </div>
            </div>
        </div>
    )
}



export default Input;
