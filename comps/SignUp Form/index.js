import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Button2 from '../Button2';
import Button3 from '../Button3';
import Divider from '../Divider';
import Inputs from '../Inputs'

const WelcomeText = styled.div `
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
`;


const SignUpForm = ({text, inputs}) => {
    return <div>
        <WelcomeText>Signup For an account</WelcomeText>
        <Inputs text="EMAIL" input="joe@gmail.com"></Inputs>
        <Inputs text="PASSWORD" input="●●●●●●●●●●●"></Inputs>
        <Inputs text="CONFIRM PASSWORD" input="●●●●●●●●●●●"></Inputs>
        <Button3></Button3>
    </div>
}

SignUpForm.defaultProps = {

}

export default SignUpForm;