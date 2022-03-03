import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import '../Styles/Navbar.css';





function Navbar(){

const [showMediaIcons, setShowMediaIcons] = useState(false);

    return(
        <>
<div className = 'navb'> 
<nav className="navbar0">
{/* <NavLink to="/"><div className="brand-img"> </div></NavLink> */}
<NavLink to= "/"><div className="brand-name">Aleefa<span className='blk'>BLOCKCHAIN</span></div></NavLink>
        

        <div className={
                      showMediaIcons ? "mobile-menu-link" : "navbar"
        }>

<div className="dropdown">
    <button className="dropbtn">Developers
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
    <NavLink to="/coin">Getting Started</NavLink>
      <NavLink to="/ico">NFTs</NavLink>
      <NavLink to = "/stable">DeFi</NavLink>

    </div>
  </div>


  <div className="dropdown">
    <button className="dropbtn">Network
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <NavLink to ="/hybrid">Block Explorer</NavLink>
      <NavLink to ="/marginex">Network Performance</NavLink>
      <NavLink to="p2p">Stake Distribution</NavLink>
      <NavLink to="/sec_ex">Security Exchange Development</NavLink>
      <NavLink to="/dex">Decentralized Exchange Development</NavLink>
    </div>
  </div>


 


  <div className="dropdown">
  <NavLink to = "/validators"><button>Validators</button></NavLink>
</div>



  <div className="dropdown">
<NavLink to="/community"><button>Community</button></NavLink>
    </div>    

  
    <div className="dropdown">
  <NavLink to = "/blockchain"><button>Ecosystem</button></NavLink>
</div>


</div>
        <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>

    </nav>
</div>


        </>

    )
}

export default Navbar;