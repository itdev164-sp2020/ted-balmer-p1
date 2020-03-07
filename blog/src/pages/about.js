import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import styled from 'styled-components'
import Image from "../components/image"
import SEO from "../components/seo"

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

    figure {
        text-align: center;
    }
`

const About = ({ data }) => {
    const { name, company } = data.site.siteMetadata.contact;
    return (
        <Layout>
            <SEO title="About" />
            <H1>About Ted</H1>
            <Content>
                <p><b>{`${name}`}</b> {`enrolled at ${company} many years ago and is nearing the end of his degree program.`}</p>
                <p>{`Hopefully everything will work out.`}</p>
                <figure style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
                    <Image />
                    <figcaption>My Logo</figcaption>
                </figure>
            </Content>
        </Layout>
    )
}

export default About

export const query = graphql`
    query {
        site {
            siteMetadata {
                contact {
                    name
                    company
                }
            }
        }
    }
`

/*
const About = ({ data }) => {
    const { title, content } = data.contentfulPage;
    
    return (
        <Layout>
            <H1>{title}</H1>
            <Content dangerouslySetInnerHTML={{__html: content.content.html}}></Content>
        </Layout>
    );
}

export default About

export const pageQuery = graphql`
    query PageQuery($slug: String!) {
        contentfulPage(slug: {eq: $slug}) {
            title
            slug
            content {
                content
            }
        }
    }
`
*/