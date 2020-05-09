import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Image } from "../Image"
import { H1 } from '../Heading'
import styled from 'styled-components'

import HeroBG from '../../images/hero-image.jpg'

const Outer = styled.header`
  background: ${props => props.theme.baseBackground.backgroundColor} url('${HeroBG}') no-repeat 50% 50%;
  background-size: cover;  
  margin-bottom: 1.45em;
  text-align: center;
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;  
`

const H1Hidden = styled(H1)`
  margin: 0;
  display: none;
`

const HomeLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 400;
  &:hover {
    opacity: 0.7;
  }
`

const LogoFrame = styled.div`
  width: 300px;
  margin: 0 auto;
  /* filter: invert(100%); */
`


const Header = ({ siteTitle }) => (
  <Outer>
    <Inner>
      <LogoFrame>
        <HomeLink to="/">
          <Image alt={siteTitle} />
        </HomeLink>
      </LogoFrame>
      <H1Hidden>
        <HomeLink to="/">
          {siteTitle}
        </HomeLink>
      </H1Hidden>
    </Inner>
  </Outer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export { Header }
