import React from "react"
import styled from 'styled-components'

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Page Not found" />
    <h1>Page Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
  </Layout>
)

export default NotFoundPage
