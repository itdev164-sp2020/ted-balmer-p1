import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Image } from "../Image"
import { H1 } from '../Heading'
import styled from 'styled-components'

import HeroBG from '../../images/hero-image.jpg'

const Outer = styled.header`
  /* background-color: ${props => props.theme.baseBackground.backgroundColor}; */
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

const StyledLink = styled(Link)`
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
`

const Header = ({ siteTitle }) => (
  <Outer>
    <Inner>
      <LogoFrame>
        <StyledLink to="/">
          <Image alt={siteTitle} />
        </StyledLink>
      </LogoFrame>
      <H1Hidden>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
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
