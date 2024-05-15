import React from "react";
const date = new Date().toDateString();
const time = new Date().getHours()
var greetMsg =""
if(time>0 && time <12){
    greetMsg="Good Morning!";
} else if (time>=12 && time<16){
    greetMsg="Good Afternoon!";
}   else{
    greetMsg =  "Good Evening!"
}
function Header(){
    return(
        <div className="row text-center bg-primary text-light m-0" >
            <h3 className="col my-auto">My Keeper App</h3>
            <h6 className="col my-auto">{greetMsg} What are your main goals today? </h6>
            <p className="col my-auto">{date}</p>
        </div>
    )
}

export default Header;