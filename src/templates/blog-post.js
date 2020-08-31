import React from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/postsidebar'
import { graphql } from "gatsby"

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
          <div className="row">
              <div className="col-md-8">
                <p>{tags}</p>
                <h1>{title}</h1>
                <p>By <span>{author}</span> - <span>{date}</span></p>
                <img src={featuredimage} alt={alttext}/>
                <p>{description}</p>
              </div>
              <div className="col-md-4">
                <Sidebar/>
              </div>
          </div>
      </Layout>
    )
}

export default BlogPostTemplate
