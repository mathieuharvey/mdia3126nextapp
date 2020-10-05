import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div `
    width: 478px;
    height: 170px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const BannerTitle = styled.div `
    font-size: 32px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 10px;
    padding-left: 30px;
`;

const BannerText = styled.div `
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    color: #3D5AF1;
    padding-left: 30px;
`;

const Banner = () => {
    return <div>
        <BannerContainer>
        <BannerTitle>Hack your way to learning 🎉</BannerTitle>
            <BannerText>Start your free account today.</BannerText>
        </BannerContainer>
    </div>
}

Banner.defaultProps = {
}

export default Banner;