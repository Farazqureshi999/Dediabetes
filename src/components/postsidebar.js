import React from 'react'
import img from '../images/colabora-con-dediabetes.jpg'
import img6 from '../images/main6.jpg'
import img2 from '../images/main7.jpg'
import img3 from '../images/main8.jpg'
import img4 from '../images/main9.jpg'
import img5 from '../images/main10.jpg'

function postsidebar() {
    return (
        <aside>
           <div className="news-box">
            <div class="label-block-default">
                <h4 class="text-uppercase">Must Read</h4>
            </div>
            <div className="post-box">
    
                <div className="post-detail m-0">
                    <h4 className="txt-black post-heading-sm">Diabetes, emergency in emergencies?</h4>
                    <p className="m-0 d-flex align-items-center"><span className="black-badge mr-2">News</span><span className="mr-2 news-author"><strong>Control Diabetes</strong></span> <span className="post-date">12:16 am</span></p>
                </div>
                <div className="post-thumb">
                    <img src={img2} alt="post-img1" className="img-fluid" />
                </div>
            </div>
            <div className="post-box">
    
                <div className="post-detail m-0">
                    <h4 className="txt-black post-heading-sm">Delicious Cookie Recipes for Diabetics</h4>
                    <p className="m-0 d-flex align-items-center"><span className="black-badge mr-2">Dessert Recipes</span><span className="mr-2 news-author"><strong>Leo</strong></span> <span className="post-date">12:16 am</span></p>
                </div>
                <div className="post-thumb">
                    <img src={img3} alt="post-img1" className="img-fluid" />
                </div>
            </div>
            <div className="post-box">
    
                <div className="post-detail m-0">
                    <h4 className="txt-black post-heading-sm">Bad Fruits for Diabetes</h4>
                    <p className="m-0 d-flex align-items-center"><span className="black-badge mr-2">Fruits</span><span className="mr-2 news-author"><strong>DeDiabetes</strong></span> <span className="post-date">12:16 am</span></p>
                </div>
                <div className="post-thumb">
                    <img src={img4} alt="post-img1" className="img-fluid" />
                </div>
            </div>
            <div className="post-box">
    
    <div className="post-detail m-0">
        <h4 className="txt-black post-heading-sm">Diabetic Neuropathy: 6 Diet Tips</h4>
        <p className="m-0 d-flex align-items-center"><span className="black-badge mr-2">Complications</span><span className="mr-2 news-author"><strong>DeDiabetes</strong></span> <span className="post-date">12:16 am</span></p>
    </div>
    <div className="post-thumb">
        <img src={img6} alt="post-img1" className="img-fluid" />
    </div>
</div>
            <div className="post-box">
    
                <div className="post-detail m-0">
                    <h4 className="txt-black post-heading-sm">Can Diabetics Eat Chocolate?</h4>
                    <p className="m-0 d-flex align-items-center"><span className="black-badge mr-2">Foods</span><span className="mr-2 news-author"><strong>Leo</strong></span> <span className="post-date">12:16 am</span></p>
                </div>
                <div className="post-thumb">
                    <img src={img5} alt="post-img1" className="img-fluid" />
                </div>
            </div>
        </div>
        </aside>
    )
}

export default postsidebar
