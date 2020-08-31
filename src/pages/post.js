import React from 'react'
import Layout from '../components/layout'
import img from '../images/main.jpg'
import { graphql } from 'gatsby';

export const query = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "home"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              intro
              image
          }
        }
      }
    }
  }
}`

function post(props) {
    const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter;
    return (
        
        <Layout>
         <h1>{data.title}</h1>
      <p>{data.intro}</p>
      <img src={data.image} alt="jjj"/>
        </Layout>
    )
}

export default post
