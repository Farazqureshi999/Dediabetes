import React from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/postsidebar'
import { graphql } from "gatsby"

export const query = graphql`
  {
    allFile(filter: {sourceInstanceName: {eq: "post"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              featuredimage
              title
              date
              author
              description
              tags
            }
          }
        }
      }
    }
  }
`

function BlogPostTemplate({data}) {
    const {allFile:{edges:{node:{childMarkdownRemark:{frontmatter:{title,date,author,description,tags,featuredimage}}}}}} = data;
    return (
      <Layout>
          <div className="row">
              <div className="col-md-8">
    <p>{tags}</p>
    <h1>{title}</h1>
    <p>By <span>{author}</span> - <span>{date}</span></p>
                <img src={featuredimage} alt=""/>
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
