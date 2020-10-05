import React from 'react';
import styled from 'styled-components';

const DividerBox = styled.div `
    display: flex;
    align-items: center;
    width: 384px;
    margin-bottom: 20px;
`;

const Border = styled.div `
    border: solid 1px #C6C6C6;
    width: 100%;
    height: 0;
`;

const DividerText = styled.div `
    font-family: 'Roboto', sans-serif;
    padding: 10px;
    color: #505050;
`;

const Divider = () => {
    return <div>
        <DividerBox>
            <Border></Border>
            <DividerText>or</DividerText>
            <Border></Border>
        </DividerBox>
    </div>
}

Divider.defaultProps = {

}

export default Divider;