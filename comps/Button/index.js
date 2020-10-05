import React from 'react';
import styled from 'styled-components';

const LogIn = styled.div`
    background-color: #4285F4;
    width: 384px;
    height: 46px;
    display: flex;
    font-family: 'Roboto', sans-serif;
    color: white;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

const LogInText = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const LogInImg = styled.img`
    margin-left: 3px;
    background-color: white;
    padding: 10px;
    width: 20px;
    height: 20px;
`;

const Button = () => {
    return <div>
        <LogIn>
            <LogInImg src="/googleicon.png"></LogInImg>
            <LogInText>Login with Google</LogInText>
        </LogIn>
    </div>
}

Button.defaultProps = {

}

export default Button;