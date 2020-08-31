import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import img from '../images/main.jpg'
import img2 from '../images/main2.jpg'
import img3 from '../images/main3.jpg'
import img4 from '../images/main4.jpg'
import img5 from '../images/main5.jpg'
import img6 from '../images/main6.jpg'

import Sidebar from '../components/Sidebar'

const IndexPage = () => (
  <Layout>
    <SEO title="Dediabetes" />
    <div className="container">
    <div className="main-post-grid">
        <div className="div1 main-post-box">
            <div className="post-main">
                <div className="post-thumb-lg">
                    <a href="#" className="post-thumb-img">
                        <img src={img} alt="main-img" className="img-fluid" />
                    </a>
                </div>
                <div className="post-meta">
                    <div className="post-meta-catagory">
                    <a href="#" className="black-badge text-uppercase">diet for DIABETICS</a>
                    </div>
                    <h1 className="post-main-heading">High Cholesterol Good or Bad?</h1>
                    <p className="post-meta-author"><a href="#">Leo</a>  - <span className="post-meta-date"> <a href="#">7:00 am</a></span></p>
                </div>
            </div>
        </div>
        <div className="div2 main-post-box">
            <div className="post-main">
                <div className="post-thumb-sm">
                    <a href="#"  className="post-thumb-img">
                        <img src={img2} alt="main-img" className="img-fluid" />
                    </a>
                </div>
                <div className="post-meta">
                    <div className="post-meta-catagory">
                    <a href="#" className="black-badge text-uppercase">uncategorized</a>
                    </div>
                    <h1 className="post-main-heading-sm mb-1">How Alcohol Causes Pancreatitis</h1>
                                    </div>
            </div>
        </div>
        <div className="div3 main-post-box">
            <div className="post-main">
                <div className="post-thumb-sm">
                    <a href="#"  className="post-thumb-img">
                        <img src={img3} alt="main-img" className="img-fluid" />
                    </a>
                </div>
                <div className="post-meta">
                    <div className="post-meta-catagory">
                    <a href="#" className="black-badge text-uppercase">uncategorized</a>
                    </div>
                    <h1 className="post-main-heading-sm mb-1">Alcohol and Pancreatitis</h1>
                    
                </div>
            </div>
        </div>
        <div className="div4 main-post-box">
            <div className="post-main">
                <div className="post-thumb-sm">
                    <a href="#"  className="post-thumb-img">
                        <img src={img4} alt="main-img" className="img-fluid" />
                    </a>
                </div>
                <div className="post-meta">
                    <div className="post-meta-catagory">
                    <a href="#" className="black-badge text-uppercase">diet for DIABETICS</a>
                    </div>
                    <h1 className="post-main-heading-sm mb-1">How Exercise Helps You Lose Weight Or Maintain It</h1>
                    
                </div>
            </div>
        </div>


    </div>
    <div className="row">
        <div className="col-md-8">
            <div className="label-block-default">
                <h4 className="text-uppercase">Feeding</h4>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="post-style-1">
                        <div className="post-style-1-thumb post-thumb-img">
                            <img src={img} alt="hello" className="img-fluid" />
                            <a href="#" className="black-badge text-uppercase">diet for DIABETICS</a>
                        </div>
                        <div className="post-style-1-post-data">
                            <h1 className="post-entry-title">High Cholesterol Good or Bad?</h1>
                            <p className="post-meta-author mb-1"><strong>Leo</strong> - <span className="post-meta-date">7:00am</span></p>
                            <p className="post-excerpt">In a previous post I described a European study that seriously doubted the ideas that
                                were had about cholesterol. Now you...</p>
                        </div>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="post-style-1">
                        <div className="post-style-1-thumb post-thumb-img">
                            <img src={img2} alt="hello" className="img-fluid" />
                            <a href="#" className="black-badge text-uppercase">diet for DIABETICS</a>
                        </div>
                        <div className="post-style-1-post-data">
                        <h1 className="post-entry-title">How Excercise Helps You Lose Weight or Maintain it</h1>
                            <p className="post-meta-author mb-1"><strong>Leo</strong> - <span className="post-meta-date">7:30am</span></p>
                            <p className="post-excerpt">In these last posts I have been explaining the dilemma of "how to lose weight effectively". We already know that to focus correctly this ...</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="post-box">
                        <div className="post-thumb post-thumb-img">
                            <img src={img3} alt="post-img1" className="img-fluid" />
                        </div>
                        <div className="post-detail">
                            <h4 className="txt-black post-heading-sm">Can red meat increase the risk of diabetes?</h4>
                            <p className="m-0 d-flex align-items-center"><span className="black-badge mr-2">Foods</span> <span className="post-date">9:19 am</span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="post-box">
                        <div className="post-thumb post-thumb-img">
                            <img src={img4} alt="post-img1" className="img-fluid" />
                        </div>
                        <div className="post-detail">
                            <h4 className="txt-black post-heading-sm">Impact of sweeteners on intestinal gulucose absoption</h4>
                            <p className="m-0 d-flex align-items-center"><span className="black-badge mr-2">Sweeterners and Supplements</span> <span className="post-date">8:43 am</span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="post-box">
                        <div className="post-thumb post-thumb-img">
                            <img src={img5} alt="post-img1" className="img-fluid" />
                        </div>
                        <div className="post-detail">
                            <h4 className="txt-black post-heading-sm">Casein and Diabetes</h4>
                            <p className="m-0 d-flex align-items-center"><span className="black-badge mr-2">Diet for Diabetics</span> <span className="post-date">7:41 am</span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="post-box">
                        <div className="post-thumb post-thumb-img">
                            <img src={img6} alt="post-img1" className="img-fluid" />
                        </div>
                        <div className="post-detail">
                            <h4 className="txt-black post-heading-sm">Cholesterol and Sugar in Diary Products</h4>
                            <p className="m-0 d-flex align-items-center"><span className="black-badge mr-2">Diet for Diabetics</span> <span className="post-date">7:20 am</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-md-4">
            <Sidebar />
        </div>
    </div>

</div>
  </Layout>
)

export default IndexPage
