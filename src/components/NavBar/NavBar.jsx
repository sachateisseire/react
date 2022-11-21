import React from "react"
import {Link} from "react-router-dom"
import CartWidget from "./CartWidget/CartWidget";

function Navbar(){


    return (
      <header className="container-fluid-{breakpoint} bg-dark sticky-top" id="App-header">
          <div className="container">
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
              <div className="container-fluid">
                <Link to="/" className="navbar-brand">Home</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to="/category/boredape" className="nav-link">Bored Ape</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/category/mutantape" className="nav-link">Mutant Ape</Link>
                    </li>
                    <li className="nav-item"> 
                      <a className="nav-link" href="#">KPR</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Art Gobblers</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#">Offers</a>
                    </li>
                  </ul>

                </div>

              </div>
                  <CartWidget/>
            </nav>    
          </div>
        </header>
    );
  }

export default Navbar;