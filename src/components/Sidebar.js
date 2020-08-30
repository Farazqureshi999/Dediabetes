import React from 'react'
import img from '../images/colabora-con-dediabetes.jpg'
import img6 from '../images/main6.jpg'
import img2 from '../images/main7.jpg'
import img3 from '../images/main8.jpg'
import img4 from '../images/main9.jpg'
import img5 from '../images/main10.jpg'

function Sidebar() {
    return (
        <aside>
        <div class="label-block-fill">
            <h4 class="text-uppercase">Stay in Contact</h4>
        </div>
        {/* <div class="social-counter">
          
        </div> */}
        <img src={img} alt="colabora-con-dediabetes" className="img-fluid sidebar-banner" />
        <div className="news-box">
            <div class="label-block-fill">
                <h4 class="text-uppercase">News</h4>
            </div>
            <div className="post-box">
    
                <div className="post-detail m-0">
                    <h4 className="txt-black post-heading-sm">True or False: Diabetes Vaccine</h4>
                    <p className="m-0 d-flex align-items-center"><span className="black-badge mr-2">News</span> <span className="post-date">12:16 am</span></p>
                </div>
                <div className="post-thumb">
                    <img src={img2} alt="post-img1" className="img-fluid" />
                </div>
            </div>
            <div className="post-box">
    
                <div className="post-detail m-0">
                    <h4 className="txt-black post-heading-sm">Diabetes can affect sperm production.</h4>
                    <p className="m-0 d-flex align-items-center"><span className="black-badge mr-2">News</span> <span className="post-date">12:16 am</span></p>
                </div>
                <div className="post-thumb">
                    <img src={img3} alt="post-img1" className="img-fluid" />
                </div>
            </div>
            <div className="post-box">
    
                <div className="post-detail m-0">
                    <h4 className="txt-black post-heading-sm">Fructose conversion in the brain causes diabetes anc obesity</h4>
                    <p className="m-0 d-flex align-items-center"><span className="black-badge mr-2">News</span> <span className="post-date">12:16 am</span></p>
                </div>
                <div className="post-thumb">
                    <img src={img4} alt="post-img1" className="img-fluid" />
                </div>
            </div>
            <div className="post-box">
    
    <div className="post-detail m-0">
        <h4 className="txt-black post-heading-sm">Belly fat could cause diabetes 2 and heart disease</h4>
        <p className="m-0 d-flex align-items-center"><span className="black-badge mr-2">News</span> <span className="post-date">12:16 am</span></p>
    </div>
    <div className="post-thumb">
        <img src={img6} alt="post-img1" className="img-fluid" />
    </div>
</div>
            <div className="post-box">
    
                <div className="post-detail m-0">
                    <h4 className="txt-black post-heading-sm">Regular Meal Patterns May Protect Against Heart Disease</h4>
                    <p className="m-0 d-flex align-items-center"><span className="black-badge mr-2">News</span> <span className="post-date">12:16 am</span></p>
                </div>
                <div className="post-thumb">
                    <img src={img5} alt="post-img1" className="img-fluid" />
                </div>
            </div>
        </div>
    </aside>
    )
}

export default Sidebar
