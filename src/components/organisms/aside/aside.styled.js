import styled from "styled-components";


export const StyledAside=styled.aside`
    display: flex;
    position: fixed;
    flex-direction: column;
    background-color: #EEEEEE;
    height: 89%;
    margin-top:5.625rem;
    padding-top: 1.5rem;
    width: 11rem;
    justify-content: space-between;
    align-items: center;
    box-shadow: 
        0 4px 6px rgba(0, 0, 0, 0.1),  /* Sombra suave */
        0 1px 3px rgba(0, 0, 0, 0.08); /* Sombra adicional */
`

export const StyledAsideDiv = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`

