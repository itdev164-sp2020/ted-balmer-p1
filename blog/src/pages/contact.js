import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import styled from 'styled-components'
import Image from "../components/image2"
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

    a {
        color: darkslateblue;
        &:hover {
            text-decoration: none;
            color: black;
        }
    }
`

const Contact = ({ data }) => {
    const { name, address, email } = data.site.siteMetadata.contact;
    return (
        <Layout>
            <SEO title="Contact" />
            <H1>Drop me a line</H1>
            <Content>
                <p>{`You can email ${name} at `} <a href={`mailto:${email}`}>{`${email}`}</a> {`or you can visit him at ${address}`}.</p>

                <figure style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
                    <Image />
                    <figcaption>Follow the map to me</figcaption>
                </figure>
            </Content>
        </Layout>
    )
}

export default Contact

export const query = graphql`
    query {
        site {
            siteMetadata {
                contact {
                    name
                    email
                    address
                }
            }
        }
    }
`