import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color:#EEEEEE;
    z-index:100;
    position: relative;
`

export const IconList = styled.div`
  display: flex;
  gap: 15px;
`;

export const IconLink = styled.a`
  color: #fff;
  font-size: 24px;
  transition: color 0.3s;

  &:hover {
    color: #ff6347; /* Cor ao passar o mouse */
  }
`;