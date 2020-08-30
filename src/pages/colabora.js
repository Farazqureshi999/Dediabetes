import React from 'react'
import Layout from "../components/layout"
import img from '../images/collabe.png'
import SEO from "../components/seo"

function colabora() {
    return (
        <Layout>
             <SEO title="Collaborate Page" />
        <div className="content-wrap">
    <div className="container">
        <h1>Collaborate</h1>
        <ol>
            <li>
                Visibility
                <ul>
                    <li>The first, and most obvious, is that you can reach a new (and hopefully big) audience of people
                        you wouldn't normally reach.</li>
                    <li>Contributing as a "blog guest," as it is commonly known, is one of the fastest and most
                        effective methods of introducing yourself to the public and establishing yourself as an expert
                        on the subject.</li>
                    <li>You will become a collaborator in the DeDiabetes network. Your articles will have great
                        visibility on the Internet and will be read, commented on and shared by many people, since we
                        will publish them through our social networks.</li>

                    <li>DeDiabetes promotes new articles consecutively in the first 3 months of publication through our
                        social media accounts, email campaigns, and push notifications.</li>

                </ul>
            </li>
            <li>
                Your personal profile
                <ul>
                    <li>You will have your own authorship profile.</li>
                    <li>All your articles will be identified in this way and, if you wish, we will add a biography about
                        your personal and / or professional career to your profile.</li>
                    <li>You can include a contact address and links to your profiles on Facebook, Twitter and Google+.
                    </li>

                </ul>
                <img src={img} alt="collabe-img" />
            </li>
            <li>
                Find yourself on Google!
                <ul>
                    <li>
                        In addition to the additional advertising and validation of your name, you also get very
                        powerful referral links to boost your visibility in google searches (improve your "SEO")
                    </li>
                    <li>
                        Believe it or not, all links are NOT created equal. Google favors top post links and author
                        links, which is exactly what you will receive from the traffic received on DeDiabetes.
                    </li>
                </ul>
            </li>
            <li>
                Be part of a diabetes care education initiative
                <ul>
                    <li>Our mission at DeDiabetes is to provide up-to-date and practical information to millions of
                        people affected by this disease. </li>
                    <li>Being a partner of DeDiabetes allows you to help the education of many people worldwide.</li>
                </ul>
            </li>
            <li>
                Guidelines for joining the DeDiabetes team
                <ul>
                    <li>We are looking for unique and original ideas, not platitudes that we have all read 1,000 times
                        before.</li>
                    <li>The articles should deal with diabetes news, advances in medicine, care, and nutrition. This
                        also includes topics related to psychology, self-help, emotional care, and physical care ...
                    </li>
                    <li>You should back up your points with a mixture of personal anecdotes, examples from
                        acquaintances, and published research, with links to your sources.</li>
                    <li>Articles must be original and exclusive to Dediabetes.com. Self-plagiarism is still plagiarism!
                    </li>
                    <li>You cannot accept payment for mentioning a person or service in an article. If you have a
                        business or financial relationship with any individual or company you mention, it should be
                        disclosed in the article.</li>
                    <li>Each article must be a minimum of 700 words and no more than 1500 words.</li>
                    <li>DeDiabetes takes care of adding the photos. If you want to include your own photos, they must be
                        in the public domain.</li>

                </ul>
            </li>
            <li>
                Publication process
                <ul>
                    <li>Contact our editorial team using the submission template
                    </li>
                    <li>It normally takes five business days from when we receive your article until we publish it. We
                        understand the value of your effort and the importance of publishing your article as soon as
                        possible.</li>
                    <li>DeDiabetes reserves the right to edit the text to align it with the standard of our website.
                    </li>

                </ul>
            </li>
        </ol>
    </div>

</div>
      </Layout>
    )
}

export default colabora
