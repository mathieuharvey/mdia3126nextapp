import React from 'react';
import styled from 'styled-components';
import Courses from '../Courses';

const MenuBar = styled.div `
    background-color: #F2F4FB;
    width: 100%;
    height: 78px;
    box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.13);
    display: flex;
`;

const MenuRight = styled.div `
    width: 100%;
    justify-content: flex-end;
    display: flex;
    align-items: center;
`;

const MenuLeft = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
`;

const Nav = () => {
    return <div>
        <MenuBar>
            <MenuLeft>
                <Courses coursesimg="/Layer 1.png" courses="Logo"></Courses>
                <Courses coursesimg="/Home.png" courses="Menu 1"></Courses>
                <Courses coursesimg="/help.png" courses="Menu 2" textcolor="#777777"></Courses>
            </MenuLeft>
            <MenuRight>
                <img src="/search.png"></img>
                <img src="/bell.png"></img>
                <img src="/Avatar.png"></img>
            </MenuRight>
        </MenuBar>

    </div>
}

Nav.defaultProps = {

}

export default Nav;