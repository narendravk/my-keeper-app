import React from "react";
const date = new Date().toDateString();
const time = new Date().getHours()
var greetMsg =""
if(time>0 && time <12){
    greetMsg="Good Morning";
} else if (time>=12 && time<16){
    greetMsg="Good Afternoon";
}   else{
    greetMsg =  "Good Evening"
}
function Header(){
    return(
        <div className="row text-center bg-warning text-light m-0 opacity-75">
            <h3 className="col my-auto text-primary">NKeeper</h3>
            <h4 className="col my-auto text-primary">{greetMsg} <strong>Yaashodaa!</strong></h4>
            <p className="col my-auto text-primary">{date}</p>
            
        </div>
    )
}

export default Header;