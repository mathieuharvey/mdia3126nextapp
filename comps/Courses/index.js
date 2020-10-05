import React from 'react';
import styled from 'styled-components';

const CoursesImg = styled.img `

`;

const CoursesContainer = styled.div `
    display: flex;
    line-height: 0;
    align-items: center;
    justify-content: center;
`;

const CoursesText = styled.div `
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    padding-left: 10px;
    color:${props=>props.textcolor ? props.textcolor: "#3D6FF1"};
`;

const Courses = ({courses, coursesimg, textcolor}) => {
    return <div>
        <CoursesContainer>
            <CoursesImg src={coursesimg}></CoursesImg>
            <CoursesText textcolor={textcolor}>{courses}</CoursesText>
        </CoursesContainer>
    </div>
}

Courses.defaultProps = {
    courses: "Courses",
    coursesimg: "/Home.png",
    textcolor: "#3D6FF1",
}

export default Courses;