import React from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/Sidebar'
import img from '../images/main.jpg'

function post() {
    return (
        <Layout>
            <div className="content-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                        <div className="post-meta-catagory">
                        <a href="#" className="black-badge text-uppercase">diet for DIABETICS</a>
                        </div>
                        <h1>High Cholesterol Good or Bad?</h1>
                        <p className="post-meta-author"><a href="#">Leo</a>  - <span className="post-meta-date"> <a href="#">7:00 am</a></span></p>
                        <img src={img} alt="" className="img-fluid"/>
                        <div className="post-detail">
                            <p>In a previous post, I described a European study that seriously doubted the ideas that were had about cholesterol. Now I bring you the results of that study that is very interesting for diabetics. High Cholesterol Good or Bad?

High Cholesterol, Good or BadThe medical profession in Europe recommends that cholesterol levels in the blood should not exceed 5.0 mmol / l (190 mg on / d). Anything above this level is said to increase the risk of heart disease or stroke.

The Scandinavian study sampled 120,000 adults in Denmark and looked at the two types of cholesterol (HDL and LDL) together. The researchers found that people with higher cholesterol levels (that is, above the 5.0 mark) had reduced rates of cancer and many other diseases, that is, a reduction in the risk of death .

For example, men between the ages of 60 and 70 with total cholesterol levels ranging from 5.00 to 5.99 mmol / L had a 32% reduced risk of death compared to men with total cholesterol levels of less than 5 , 00. For men with levels between 6.00 and 7.99mmol / l, the risk of death was 33% lower.

Even in individuals with very high cholesterol levels (more than 8.00mmol / L), the risk of death was no greater than it was for people with levels less than 5.00mmol / L.

In the women surveyed, the results were similar. In women aged 60 to 70, levels 5.00 to 5.99 and 6.00 to 7.99 were associated with a 43% and 41% lower risk of death, respectively.

Do the results of this research suggest that having lower cholesterol levels does not put us at risk for heart disease? I do not think so. It is only one study, albeit a very well done one, among many cholesterol studies. The weight of research still indicates that high cholesterol is a risk.</p>
                        </div>
                        <div className="social-share">
                            social share
                        </div>
                        </div>
                        <div className="col-md-4">
                            <Sidebar/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default post
