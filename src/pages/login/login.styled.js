import styled from 'styled-components';


export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 1.875rem;
    width: 100%;
    padding: 0 1.875rem;
`;

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.25rem;
`;

export const StyledInput = styled.input`
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    width: 50%;
    padding: 0.5rem;
    font-size: 1rem;
    margin-top: 0.25rem;
`;


export default {StyledForm, StyledDiv, StyledInput};
