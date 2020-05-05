/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled, { ThemeProvider } from 'styled-components'

import { Default } from '../../themes/Default'
import { Header } from "../Header"
import { Navigation } from "../Navigation"
import GlobalStyle from '../GlobalStyle'

const Content = styled.div`
  margin: 0 auto;
  max-Width: 960px;
  padding: 0 1.0875rem 1.45rem;
`

const ExtLink = styled.a`
  color: black;
  &:hover {
    opacity: 0.7;
  }
`
const Footer = styled.footer`
  text-align: center;
  margin-top: 2em;
  padding: 1em;
  border-top: 1px solid #eee;
`
const Nav = styled.nav`
  margin: 0 auto;
  max-Width: 960px;
  font-size: 1.2em;
  text-align: center;
  li {
    display: inline-block;
    margin: 0 1em;
  }
  a {
    color: #000;
    text-decoration: none;
    padding: 4px 10px;
    font-weight: bold;
  }
  a:hover {
    color: dodgerblue;
    border-bottom: 2px solid dodgerblue;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={Default}>
    <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      {Navigation}
      <Content>
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()} <ExtLink href="https://www.marchtwenty.com">{data.site.siteMetadata.author}</ExtLink>. Built with
          {` `}
          <ExtLink href="https://www.gatsbyjs.org">Gatsby</ExtLink>
        </Footer>
      </Content>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout }
