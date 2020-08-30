import React from 'react'
import { Link } from 'gatsby'
import img from '../images/logo3.jpg';
import img1 from '../images/main2.jpg'
import img2 from '../images/main3.jpg'
import img3 from '../images/main4.jpg'
import {FaFacebookSquare,FaTwitterSquare} from 'react-icons/fa'
function Footer() {
    return (
       <footer>
           <div className="footer-top">
               <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-center text-md-left">
                            <img src={img} alt="logo-main" className="img-fluid marginBottom20"/>
                            <p class="footer-text marginBottom20">Your Resourece for Diabetes Self-Care</p>
                            <p class="footer-text marginBottom20">Contact us: <a href="#" className="footer-text-link">info@dediabetes.com</a></p>
                            <div className="social-icon-footer">
                                <ul className="social-icon-footer-list">
                                    <li className="social-icon-footer-item">
                                        <a href="https://www.facebook.com/tratamientodiabetes" target="_blank" rel="noreferrer" className="social-icon-footer-link">
                                            <FaFacebookSquare role="facebook-icon" className="footer-icon"/>
                                        </a>
                                    </li>
                                    <li className="social-icon-footer-item">
                                        <a href="https://twitter.com/dediabetescom" target="_blank" rel="noreferrer" className="social-icon-footer-link">
                                            <FaTwitterSquare role="twitter" role="twitter-icon" className="footer-icon" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                                <div className="label-block">
                                    <h4 className="text-uppercase">Popular Messages</h4>
                                </div>
                                <div className="post-grid">
                                    <div className="post-box">
                                        <div className="post-thumb">
                                            <img src={img1} alt="post-img1" className="img-fluid"/>
                                        </div>
                                        <div className="post-detail">
                                        <h4 className="txt-white post-heading-sm">Hypoglycemia (low blood sugar)</h4>
                                            <p className="m-0 d-flex align-items-center"><span className="red-badge" >Glucose levels</span> <span className="post-date">12:16 am</span></p>
                                        </div>
                                    </div>
                                    <div className="post-box">
                                    <div className="post-thumb">
                                            <img src={img2} alt="post-img1" className="img-fluid"/>
                                        </div>
                                        <div className="post-detail">
                                        <h4 className="txt-white post-heading-sm">How diabetes affects you</h4>
                                            <p className="m-0 d-flex align-items-center"><span className="red-badge" >Diabetes Care Algorithms</span> <span className="post-date">12:16 am</span></p>
                                        </div>
                                    </div>
                                    <div className="post-box">
                                    <div className="post-thumb">
                                            <img src={img3} alt="post-img1" className="img-fluid"/>
                                        </div>
                                        <div className="post-detail">
                                        <h4 className="txt-white post-heading-sm">7 Exquisite Cakes for Diabetics</h4>
                                            <p className="m-0 d-flex align-items-center"><span className="red-badge" >Dessert Recipes</span> <span className="post-date">12:16 am</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                            <div className="label-block">
                                    <h4 className="text-uppercase">Popular Catagory</h4>      
                                </div>
                                <div className="catagory-widget-block">
                                        <ul className="catagory-list">
                                            <li className="catagory-list-item">
                                                <Link className="catagory-link">Dessert Recipes</Link>
                                                <Link className="catagory-link">51</Link>
                                            </li>
                                            <li className="catagory-list-item">
                                                <Link className="catagory-link">Foods</Link>
                                                <Link className="catagory-link">29</Link>
                                            </li>
                                            <li className="catagory-list-item">
                                                <Link className="catagory-link">Recipe Meals</Link>
                                                <Link className="catagory-link">28</Link>
                                            </li>
                                            <li className="catagory-list-item">
                                                <Link className="catagory-link">News</Link>
                                                <Link className="catagory-link">26</Link>
                                            </li>
                                            <li className="catagory-list-item">
                                                <Link className="catagory-link">Symptoms of diabetes</Link>
                                                <Link className="catagory-link">23</Link>
                                            </li>
                                            <li className="catagory-list-item">
                                                <Link className="catagory-link">Complications</Link>
                                                <Link className="catagory-link">22</Link>
                                            </li>
                                            <li className="catagory-list-item">
                                                <Link className="catagory-link">Control Diabetes</Link>
                                                <Link className="catagory-link">22</Link>
                                            </li>
                                            <li className="catagory-list-item">
                                                <Link className="catagory-link">About Diabetes</Link>
                                                <Link className="catagory-link">15</Link>
                                            </li>
                                        </ul>
                                    </div>
                            </div>
                    </div>
               </div>
           </div>
           <div className="footer-bottom">
                <div className="container">
                    <div className="footer-menu">
                        <ul className="footer-menu-list">
                            <li className="footer-menu-item"><Link className="footer-menu-link" to="/colabora">Contribute and write for DeDiabetes</Link></li>
                            <li className="footer-menu-item"><Link className="footer-menu-link" to="/atencion-al-cliente">Customer Service and Purchase Conditions</Link></li>
                            <li className="footer-menu-item"><Link className="footer-menu-link" to="/aviso-legal-politica-privacidad">Legal Notice and Privacy Policy</Link></li>
                            <li className="footer-menu-item"><Link className="footer-menu-link" to="/terminos-y-condiciones">Terms and Conditions</Link></li>

                        </ul>
                    </div>
                </div>
           </div>
       </footer>
    )
}

export default Footer
