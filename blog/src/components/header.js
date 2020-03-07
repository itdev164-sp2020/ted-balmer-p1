import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import styled from 'styled-components'

const Outer = styled.header`
  background-color: ${props => props.theme.baseBackground.backgroundColor};
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='20' viewBox='0 0 16 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230b6fd0' fill-opacity='0.16' fill-rule='evenodd'%3E%3Cpath d='M8 0v20L0 10M16 0v10L8 0M16 10v10H8'/%3E%3C/g%3E%3C/svg%3E");
  margin-bottom: 1.45em;
  text-align: center;
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;  
`

const H1 = styled.h1`
  margin: 0;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 400;
  &:hover {
    opacity: 0.7;
  }
`

const Logo = styled.div`
  width: 100px;
  margin: 0 auto;
`

const Header = ({ siteTitle }) => (
  <Outer>
    <Inner>
      <Logo>
        <StyledLink to="/">
          <Image />
        </StyledLink>
      </Logo>
      <H1>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </H1>
    </Inner>
  </Outer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
