import React from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/postsidebar'
import { graphql } from "gatsby"
import SEO from "../components/seo"

export const query = graphql`
{
    markdownRemark {
      frontmatter {
        title
        date
        author
        postimage {
          featuredimage
          alttext
        }
        description
        tags
      }
    }
  }
`

function BlogPostTemplate({data}) {
    console.log(data);
    const { markdownRemark:{frontmatter:{author,date,description,postimage:{featuredimage,alttext},tags,title}}} = data;
    return (
      <Layout>
          <SEO title={title} />
          <div className="content-wrap">
              <div className="container">
              <div className="row">
              <div className="col-md-8">
              <div className="post-page-block mb-4">
              <div className="post-meta-catagory"><a href="#" class="black-badge text-uppercase">{tags}</a></div>
                <h1 className="post-page-title">{title}</h1>
                <p className="post-page-sub">By <span className="post-page-author">{author}</span> - <span className="post-page-date">{date}</span></p>
                <img src={featuredimage} alt={alttext} className="img-fluid my-4"/>
                <p className="post-page-description">{description}</p>
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

export default BlogPostTemplate
