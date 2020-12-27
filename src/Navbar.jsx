import React from 'react';
import {  NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='changeColor'>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href='#'>Logo</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                <a href='#'>Home <span class="sr-only"></span></a>
                  </li>
                  <li className="nav-item">
                <a href='#'>SignUp</a>
                  </li>
                  
                  <li className="nav-item">
                <a href='#'>Login</a>
                  </li>
                  <li className="nav-item">
                <a href='#'>ContactUs</a>
                  </li>
                </ul>

              </div>
            </nav>
        
          </div>
        </div>
      </div>
      
      </div>
      
      
      
    </>

  );
}

export default Navbar;