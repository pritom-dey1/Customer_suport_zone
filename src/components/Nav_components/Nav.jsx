import React from 'react'
import Logo from '../../assets/logo.png'
const Nav = () => {
  return (
     <div style={{width:"100%",boxShadow:"0px 0px 10px gray",backgroundColor:"white",padding:"10px 0px",position:"fixed",top:"0",zIndex:"100"}}>
        <div className="nav_bar">
        <div className="logo">
            <img src={Logo} alt="Logo" />
        </div>
        <div className="nav_right">
           <div className="links">
            <a href="#">Home</a>
            <a href="#">FAQ</a>
            <a href="#">Changelog</a>
            <a href="#">Blog</a>
            <a href="#">Blog</a>
            <a href="#">Download</a>
            <a href="#">Contact</a>
           </div>
           <div className="button">
            <button>+ NEW TICKET</button>
           </div>
        </div>
    </div>
     </div>
  )
}

export default Nav