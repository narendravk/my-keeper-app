import React from "react";

const year = new Date().getFullYear()

function Footer(){
    return(<div className="row text-center bg-primary text-light fixed-bottom">
        <p className="col mx-auto my-auto">Made with ❣️ in India by Narendra Kashikar</p>
        <p className="col mx-auto my-auto">Copyright {year}</p>
    </div>
    )
}

export default Footer;