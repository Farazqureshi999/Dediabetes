import React from 'react'
import logo from '../images/logo2.jpg'
import { Link } from 'gatsby'
import {BiSearch} from 'react-icons/bi'
import {FaFacebookSquare,FaTwitterSquare} from 'react-icons/fa'
function header() {
    return (
        <header>
            <div className="topBar">
                <div className="container">
                    <div className="d-flex  justify-content-center justify-content-md-end align-items-center">
                        <ul className="social-icons-list">
                           <li className="social-icon"><a target="_blank" rel="noreferrer" href="https://www.facebook.com/tratamientodiabetes" ><FaFacebookSquare className="icon-white" aria-label="facebook"/></a></li> 
                           <li className="social-icon"><a target="_blank" rel="noreferrer" href="https://twitter.com/dediabetescom"><FaTwitterSquare className="icon-white" aria-label="twitter"/></a></li> 
                        </ul>
                    </div>
                </div>
            </div>
            <div className="middlebar shadow-sm">
                <div className="container">
                    <div className="middle-nav">
                    <nav className="main-nav">
                        <ul className="main-nav-list">
                            <li className="main-nav-item"><Link className="main-nav-link" to="/" activeClassName="link-active">Start</Link></li>
                            <li className="main-nav-item"><Link className="main-nav-link">What is the Diabetes</Link></li>
                            <li className="main-nav-item"><Link className="main-nav-link">Diabetes Treatment</Link></li>
                            <li className="main-nav-item"><Link className="main-nav-link">Products</Link></li>
                             
                        </ul>
                    </nav>
                    <div className="search-box">
                    <BiSearch/>
                    </div>
                    </div>
                </div>
            </div>
            <div className="mobile-header d-block d-md-none">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center header-bar">
                    <div class="menu btn12" data-menu="12">
                    <div class="icon"></div>
                </div>
                  

                    <div className="search-box">
                    <BiSearch className="searchIcon"/>
                    </div>
                    </div>
                    
                </div>
                <div className="mobile-header-menu">
                    s
                </div>
            </div>

            <div className="BottomBar d-flex justify-content-center align-items-center">
             
                <Link to="/">  <img src={logo} alt="logo" className="img-fluid mx-auto"/></Link>
                 
               
            </div>
        </header>
    )
}

export default header
