import React from 'react';



import StyledFormButton from './Formbtn.styled';

const Formbtn = ({name, type = 'button', disabled = false }) => {
    return (
        <StyledFormButton 
            type={type} 
        >
            {name}
        </StyledFormButton>
    );
};


export default Formbtn;