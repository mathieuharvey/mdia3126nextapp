import React from 'react';
import styled from 'styled-components';

const InputText = styled.div `
    font-family: 'Roboto', sans-serif;
    color: #686868;
    size: 14px;
    margin-bottom: 7px;
`;

const InputContainer = styled.div `
    font-family: 'Roboto', sans-serif;
    background-color: white;
    border-radius: 5px;
    align-items: center;
    height: 45px;
    width: 384px;
    padding-left: 20px;
    display: flex;
    margin-bottom: 20px;
`;

const Inputs = ({text, input}) => {
    return <div>
        <InputText>{text}</InputText>
        <InputContainer>{input}</InputContainer>
    </div>
}

Inputs.defaultProps = {
    text: "LABEL",
    input: "joe@gmail.com",
}

export default Inputs;