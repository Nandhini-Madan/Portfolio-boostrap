import React from "react";
const Footer=()=>{
    return(
        <>
        <div>
      <p>&copy;{(new Date().getFullYear())} Nandhini Madan | All rights reserved | Terms Of Service | Privacy</p>
      </div>
       <div className="legal__links">
          <span>Made with <span className="heart">♥</span> Nandhini Madan</span>
        </div>

        </>
    )
}
export default Footer;