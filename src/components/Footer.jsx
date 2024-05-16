import React from "react";

const year = new Date().getFullYear()

function Footer(){
    return(<div className="m-auto text-center text-white fixed-bottom mt-2 opacity-75" style={{width:"200px"}}>
        <p className="col mx-auto my-auto">Made with ❣️ in <img src="/images/india.png" height="20px" alt="IN" /></p>
        <p className="col mx-auto my-auto ">©{year}<a href="https://narendravk.github.io">@NK</a></p>
    </div>
    )
}

export default Footer;