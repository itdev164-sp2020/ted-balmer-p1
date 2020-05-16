import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { H1 } from "../components/Heading"
import styled from 'styled-components'

const HeroImage = styled.img`
    width: 100%;
    height: 300px;
    text-align: center;
    object-fit: cover;
    border-radius: 12px;
`

const Content = styled.div`
    h2 {
        margin-bottom: 0;
    }

    h3 {
        color: #333;
        margin-bottom: 0;
    }

    a {
        color: darkslateblue;
        &:hover {
            text-decoration: none;
            color: black;
        }
    }
`

const BlogPost = ({ data }) => {
    const { title, body, heroImage } = data.contentfulBlogPost;
    
    return (
        <Layout>
            <SEO title={title} />
            <H1>{title}</H1>
            <Content dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}}></Content>
        </Layout>
    );
}

export default BlogPost

export const pageQuery = graphql`
    query blogPostQuery($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            slug
            tags
            publishDate(formatString: "MMMM DD, YYYY")
            author {
                name
            }
            body {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`