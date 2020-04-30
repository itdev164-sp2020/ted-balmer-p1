import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/Layout"
import { SEO }  from "../components/Seo"
import { List, ListItem } from "../components/List"
import styled, { ThemeProvider } from 'styled-components'

const Posts = styled.ul`
  list-style: none;
  padding: 0;
`

const PostItem = styled.li`
  clear: both;
  margin-bottom: 40px;
`

const H2 = styled.h2`
  margin: 0;
  a {
    font-weight: bold;
    color: black;
    text-decoration: none;
    &:hover {
      color: dodgerblue;
    }
    &::after {
      content: "⇲";
      margin-left: 6px;
      font-size: 0.9em;
      vertical-align: middle;
    }
  }
`

const PostImage = styled.div`
  float: left;
  img {
    width: 100px;
    margin: 8px;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
    border-radius: 4px;
  }
`

const PostExcerpt = styled.p`
  margin: 0.2em 1em;
  line-height: 1.5em;
`

const PostDate = styled.div`
  line-height: 1.5em;
  font-style: italic;
  color: #777;
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <List width={[1, 1 / 2, 2 / 3]} p={2}>
    {
      data.allContentfulBlogPost.edges.map(edge => (
        <ListItem p={3}>
          <Link to={edge.node.slug} key={edge.node.id}>{edge.node.title}</Link>
          <div>
            <img src={edge.node.heroImage.fluid.src} alt="Hero Image" />
          </div>
          <div>{edge.node.body.childMarkdownRemark.excerpt}</div>
        </ListItem>
      ))
    }
    </List>
    
    <Posts>
    {
      data.allContentfulBlogPost.edges.map(edge => (
        <PostItem>
          <H2><Link to={edge.node.slug} key={edge.node.id}>{edge.node.title}</Link></H2>
          <PostImage>
            <img src={edge.node.heroImage.fluid.src} alt={edge.node.title} />
          </PostImage>
          <PostExcerpt>{edge.node.body.childMarkdownRemark.excerpt}</PostExcerpt>
          <PostDate><time>{edge.node.publishDate}</time></PostDate>
        </PostItem>
      ))
    }
    </Posts>
    
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          id
          slug
          title
          publishDate
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          heroImage {
            fluid(maxWidth: 600) {
              src
            }
          }
        }
      }
    }
  }
`