/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, link, shorttitle, themecolor, author }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            shorttitle
            subtitle
            description
            author
            website
            themecolor
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaAuthor = author || `${site.siteMetadata.author} | ${site.siteMetadata.website}`
  const metaShorttitle = shorttitle || site.siteMetadata.shorttitle
  const metaColor = themecolor || site.siteMetadata.themecolor

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: metaAuthor,
        },
        {
          name: `robots`,
          content: `index,follow`,
        },
        {
          name: `format-detection`,
          content: `telephone=no`,
        },
        {
          name: `apple-mobile-web-app-title`,
          content: metaShorttitle,
        },
        {
          name: `application-name`,
          content: metaShorttitle,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `theme-color`,
          content: metaColor,
        },
        {
          name: `msapplication-TileColor`,
          content: metaColor,
        },
        {
          name: `msapplication-TileImage`,
          content: ``,
        },
      ].concat(meta)}
      link={[
        {
          rel: `profile`,
          href: `http://gmpg.org/xfn/11`,
        },
        {
          rel: `preconnect`,
          href: `https://fonts.gstatic.com/`,
          crossorigin: ``,
        },
      ].concat(link)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  link: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  link: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export { SEO }
