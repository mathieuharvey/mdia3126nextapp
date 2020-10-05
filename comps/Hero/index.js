import React from 'react';
import styled from 'styled-components';
import Banner from '../Banner'

const HeroImg = styled.img `

`;

const Hero = () => {
    return <div>
        <HeroImg src="image 5.png"></HeroImg>
        <Banner></Banner>
    </div>
}

Hero.defaultProps = {

}

export default Hero;