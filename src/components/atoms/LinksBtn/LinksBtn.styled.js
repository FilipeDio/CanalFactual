import styled from 'styled-components'
import { NavLink as RouterNavLink } from 'react-router-dom'

export const StyledLinkBtn = styled.button`
    height:100%;
    width: 100%;
    background-color:#EEEEEE;
    justify-content :center;
    align-items: center;
    border:none;
    &:hover{
        background-color: #BDBDBD;
    }
`

export const StyledNavLink = styled(RouterNavLink)`
    text-decoration: none;
    color: black;
    font-family: "Amatic SC";
    font-size: 20px;


`
