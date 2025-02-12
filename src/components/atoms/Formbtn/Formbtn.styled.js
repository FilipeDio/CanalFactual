import styled from 'styled-components';

export const StyledFormButton = styled.button`
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    width: 52%;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color:rgb(151, 151, 151);
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(248, 224, 86, 0.5);
    }

    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
`;


export default StyledFormButton;