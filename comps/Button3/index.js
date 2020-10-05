import React from 'react';
import styled from 'styled-components';

const SignUpButton = styled.div`
    background-color: #D79B9B;
    width: 384px;
    height: 46px;
    display: flex;
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;
    color: white;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

const Button3 = () => {
    return <div>
        <SignUpButton>Signup</SignUpButton>
    </div>
}

Button3.defaultProps = {

}

export default Button3;