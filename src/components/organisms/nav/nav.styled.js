import styled from "styled-components";

export const StyledNav = styled.nav`
    display:flex;
    position: fixed;
    width: 100%;
    padding:5px;
    background-color:#EEEEEE;
    justify-content: space-between;
    box-shadow: 
        0 4px 6px rgba(0, 0, 0, 0.1),  /* Sombra suave */
        0 1px 3px rgba(0, 0, 0, 0.08); /* Sombra adicional */
    align-items:center;
    border-radius: 0px 0px 3px px;
    height:5rem;
    z-index:10;
`
export const StyledNavDiv = styled.div`
    justify-self: left;
    align-items: center;
    padding-right: 15px;
`
export const StyledLinkdiv = styled.div`
    display: flex;
    padding:0.3125rem;
    height: 100%;
    align-items: center;
    gap:10px;
    padding-right:0.625rem;
`


