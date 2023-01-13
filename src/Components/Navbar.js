import React from "react";
import {SignIn} from 'phosphor-react';
import {HashLink as Link} from 'react-router-hash-link';


export default function Navbar() {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg  fixed-top py-3" style={{backgroundColor:'#0A2357'}}>
        <div className="container">
          <a className="navbar-brand" href="/" style={{color:'white'}}>
            SkillUP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link smooth to="#home" className="nav-link active" aria-current="page"  style={{color:'white'}}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link smooth to="#categories" className="nav-link"  style={{color:'white'}} >
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link smooth to="#courses" className="nav-link"  style={{color:'white'}} >
                  Courses
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{color:'white'}}
                >
                  Others
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link smooth to="#news" className="dropdown-item" >
                      News & Letter
                    </Link>
                  </li>
                  <li>
                    <Link smooth to="#review" className="dropdown-item" >
                      Reviews
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
              <button className="btn hover py-2" type="submit" style={{color:'white'}}>
              <SignIn size={26} weight="bold" />  Sign In
              </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
