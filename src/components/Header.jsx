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
function Header(props){
    return(
        <div className="row text-center bg-warning text-light m-0">
            <h3 className="col my-auto text-primary">NKeeper®</h3>
            <h4 className="col my-auto text-primary">{greetMsg} <strong>{props.username}!</strong></h4>
            <span className="col my-auto text-primary">{date}
            <div className="dropdown">
                <button className="col dropbtn"><img src="/images/gear.png" width="32px" alt="Settings" /></button>
                <div className="dropdown-content">
                    <button name="name" className="btn" onClick={(e)=>props.ChangeName(e)}>Set your name</button>
                    <button name="img" className="btn" onClick={(e)=>props.ChangeImage(e)}>Set profile picture</button>
                    <button name="bg" className="btn" onClick={(e)=>props.ChangeBG(e)}>Set Background</button>
                    <a href="https://narendravk.github.io">Visit Narendra!</a>
                    
                </div>
                </div>
            </span>
            
            
        </div>
    )
}

export default Header;