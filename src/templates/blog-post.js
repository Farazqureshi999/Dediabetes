import React from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/postsidebar'

function BlogPostTemplate() {
    return (
      <Layout>
          <div className="row">
              <div className="col-md-8">
                <p>Catagory</p>
                <img src="" alt=""/>
                
              </div>
              <div className="col-md-4">
                <Sidebar/>
              </div>
          </div>
      </Layout>
    )
}

export default BlogPostTemplate
