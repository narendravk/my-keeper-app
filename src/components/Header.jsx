import React from "react";
const date = new Date().toDateString();
const time = new Date().getHours()
var greetMsg =""
if(time>0 && time <12){
    greetMsg="Goodm Morning!";
} else if (time>=12 && time<16){
    greetMsg="Good Afternoon!";
}   else{
    greetMsg =  "Good Evening!"
}
function Header(){
    return(
        <div className="row text-center bg-primary text-light m-0" >
            <h2 className="col my-auto">My Keeper App</h2>
            <h5 className="col my-auto">{greetMsg} What are your main goals today? </h5>
            <p className="col my-auto">{date}</p>
        </div>
    )
}

export default Header;