/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import './css/bootstrap.min.css'
import "./css/layout.css"

import './js/main.js'


import Header from './header';
import Footer from './Footer';

const Layout = ({ children }) => {
 return(
  <React.Fragment>
    <Header/>
  {children}
  <Footer/>
</React.Fragment>
 )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
