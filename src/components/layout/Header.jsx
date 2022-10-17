
// import React, { useState } from 'react'
import { Link } from 'react-router-dom'




const Header = () => {
  
// const [color, setColor] =useState(false);

// const changeBackground = () =>{
//   if(window.scrollY>=90){
//     setColor (true);
//   }else{
//     setColor (false);
//   }

// };
// window.addEventListener ('scroll', changeBackground);


  return (
    <div className="header-section">
        <nav className="navbar navbar-expand-lg fixed-top navbar-light"> {/* {color ? 'navbar navbar-bg' : navbar } */}
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="https://povo-site.netlify.app/static/media/NewLogo.0402fecf.png" width="40" className='img-fluid' alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse justify-content-end navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Staking</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Governance</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Tokenomics</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Roadmap</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Rugpul</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">FAQ</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Rugpul</Link>
                </li>
                <li className="nav-item">
                 <button className="btn btn-danger nav-link btn-sm px-3" style={{marginLeft:'8px' }}>Connet Wallet</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Header