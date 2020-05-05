import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

const Nav = styled.nav`
    margin: 0 auto;
    max-Width: 960px;
    font-size: 1.2em;
    text-align: center;
    li {
        display: inline-block;
        margin: 0 1em;
    }
    a {
        color: #000;
        text-decoration: none;
        padding: 4px 10px;
        font-weight: bold;
    }
    a:hover {
        color: dodgerblue;
        border-bottom: 2px solid dodgerblue;
    }
`

const Navigation = (
    <Nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about/'>About</Link></li>
            <li><Link to='/contact/'>Contact</Link></li>
        </ul>
    </Nav>
)

export { Navigation }
