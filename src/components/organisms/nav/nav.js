import { NavLink } from "react-router-dom"
import Logo from "../../atoms/Logo/logo"

import { StyledLinkdiv, StyledNav, StyledNavDiv,StyledInput } from "./nav.styled"

import { LinksBtn } from "../../atoms/LinksBtn/LinksBtn"
import { SearchInput } from "../../atoms/SearchContainer/SearchContainer"

const Nav=()=>{
    return(
        <StyledNav>
            <StyledNavDiv>
                <Logo/>
            </StyledNavDiv>

     
              
         
            <StyledLinkdiv>
            <SearchInput type="text" placeholder="Pesquisar..."></SearchInput>
                <LinksBtn name="Últimas Notícias"/>
                <LinksBtn name="Entrar"></LinksBtn>
                <LinksBtn name="AddPost"></LinksBtn>
                <LinksBtn name="Outros"></LinksBtn>
            </StyledLinkdiv>
        </StyledNav>
    )
}

export default Nav