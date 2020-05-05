import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/Layout"
import { H1 } from "../components/Heading"
import styled from 'styled-components'
/*
const H1 = styled.h1`
    font-weight: bold;
    text-align: center;
    font-family: 'Georgia', 'Times New Roman', Times, serif;
    border-bottom: 1px solid #eee;
`
*/
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
            <H1>{title}</H1>
            <HeroImage src={heroImage.fluid.src} alt={title} />
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
            publishDate(formatString: "MMMM DD, YYYY")
            body {
                childMarkdownRemark {
                    html
                }
            }
            heroImage {
                fluid {
                    src
                }
            }
        }
    }
`