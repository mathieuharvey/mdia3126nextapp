import React from 'react';
import styled from 'styled-components';

const LogInButton = styled.div`
    background-color: #3D6FF1;
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

const Button2 = () => {
    return <div>
        <LogInButton>Login</LogInButton>
    </div>
}

Button2.defaultProps = {

}

export default Button2;