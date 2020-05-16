import React from "react"
import { Link, graphql } from "gatsby"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import styled from 'styled-components'

const H1 = styled.h1`
    font-weight: bold;
    font-family: 'Georgia', 'Times New Roman', Times, serif;
    border-bottom: 1px solid #eee;
`

const Content = styled.div`
    p {
        font-size: 1.4em;
        line-height: 1.6em;
    }

    img {
        text-align: center;
        width: 200px;
    }
`

const About = ({ data }) => {
    const { title, body } = data.contentfulPage;
    
    return (
        <Layout>
            <SEO title={title} />
            <H1>{title}</H1>
            <Content dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html }}></Content>
        </Layout>
    );
}

export default About

export const pageQuery = graphql`
{
    contentfulPage(slug: {eq: "about"}) {
        slug
        title
        body {
            childMarkdownRemark {
                html
            }
        }
    }
}
`
