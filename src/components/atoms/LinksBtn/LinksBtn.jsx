import { StyledLinkBtn, StyledNavLink } from "./LinksBtn.styled";
import { useContext } from "react";
import { FormContext} from "../../../context/formProvider";

const LinksBtn = (props) => {
    const { showForm } = useContext(FormContext);   
    if (props.name === "Entrar") {
        return (
            <StyledLinkBtn>
                <StyledNavLink to="/Login">Entrar</StyledNavLink>
            </StyledLinkBtn>
        );
    }

    if (props.name === "Últimas Notícias") {
        return (
            <StyledLinkBtn>
                <StyledNavLink to="/">Últimas Notícias</StyledNavLink>
            </StyledLinkBtn>
        );
    }

    if (props.name === "AddPost") {
   
        return (
            <StyledLinkBtn>
                <StyledNavLink onClick={showForm}>AdicionarPost</StyledNavLink>
            </StyledLinkBtn>
        );
    }

    if (props.name === "Outros") {
        return (
            <StyledLinkBtn>
                <StyledNavLink to="/Outros">Outros</StyledNavLink>
            </StyledLinkBtn>
        );
    }

    if (props.name === "Registo") {
        return (
            <StyledLinkBtn>
                <StyledNavLink to="/Register">Registo</StyledNavLink>
            </StyledLinkBtn>
        );
    }

    
    return null;
};

export { LinksBtn };