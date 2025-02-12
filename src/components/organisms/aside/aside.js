import { StyledAside, StyledAsideDiv } from "./aside.styled";
import Asidebtn from "../../atoms/AsideBtn/Asidebtn";
import { SocialNav}  from "../../atoms/socialnav/socialnav";



const Aside = ()=>{
    return(
        <StyledAside>
            <StyledAsideDiv>
                <Asidebtn name="Últimas notícias">Últimas notícias</Asidebtn>
                <Asidebtn name="Portugal"> </Asidebtn>
                <Asidebtn name="Conflitos"></Asidebtn>
                <Asidebtn name="Economia"></Asidebtn>
                <Asidebtn name="União europeia"></Asidebtn>
                <Asidebtn name="China"></Asidebtn>
                <Asidebtn name="Estados Unidos"></Asidebtn>
                <Asidebtn name="Outros"></Asidebtn>
            </StyledAsideDiv>

            <div>
                <SocialNav></SocialNav>
            </div>
        </StyledAside>
    )
}


export default Aside;