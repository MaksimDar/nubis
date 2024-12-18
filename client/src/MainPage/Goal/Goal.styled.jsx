import styled from "styled-components";


const GoalSection = styled.section`
background-color: rgb(255, 255, 255) ;
display: flex;
padding-top: 60px;
padding-bottom: 60px;
padding-left: 15px;
padding-right: 15px;
`;

const GoalContainer = styled.div`
align-items: center;
width:100%;
`;

const GoalHeadline = styled.h2`
font-family: 'Lato', sans-serif;
font-style: italic;
text-transform: uppercase;
line-height: 1.5;
font-size: 28px;
font-weight: 600;
color: rgb(0,0,0);
padding-left: 50px;
margin-bottom: 15px;`

const GoalParagraph = styled.p`
font-family: 'Lato', sans-serif;
font-style: oblique;
font-size: 24px;
font-weight: 400;
color: rgb(0,0,0);
padding-left: 200px;
`;

export { GoalSection, GoalContainer, GoalHeadline, GoalParagraph };