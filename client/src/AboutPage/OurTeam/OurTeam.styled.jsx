import styled from "styled-components";

const TeamSection = styled.section`
padding-top: 60px;
padding-bottom: 60px;
padding-left: 60px;
padding-right: 60px;

`;

const TeamContainer = styled.div`
display: flex;
flex-direction: column; 
justify-content: center; 
align-items: center;
text-align: center; 
width: 100%;
`;

const TeamHead = styled.h2`
font-family: 'Lato', sans-serif;
text-align: center;
font-size: 28px;
color: rgb(0,0,0);
margin-bottom: 20px;
`;

const TeamList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 30px;
`;

const TeamItem = styled.li`
width: calc((100% - 120px) / 4);
border-radius: 4px;
box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
`;

const TeamBox = styled.div`
padding-top: 30px;
padding-bottom: 30px;
background-color: rgb(255,255,255);
`;

const TeamTitle = styled.h3`
font-weight: 500;
font-size: 16px;
line-height: 1.18;
letter-spacing: 0.03em;
margin-bottom: 10px;
text-align: center;
color: rgb(0,0,0);
`

const TeamText = styled.p`
font-size: 16px;
line-height: 1.18;
letter-spacing: 0.03em;
color: rgb(0,0,0);
margin-bottom: 16px;
text-align: center;
`;

const SocialList = styled.ul`
display: flex;
justify-content: center;
gap: 10px;
`;

const SocLink = styled.a`
width: 44px;
height: 44px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
color: #AFB1B8;
transition-property: background-color, color;
transition-duration: 250ms;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
// &:hover, &:focus {
//   background-color: #2196F3;
//   color: #FFFFFF;
// }
`;

const SocSvg = styled.svg`
fill: currentColor;
`;


export { TeamSection, TeamContainer, TeamList, TeamItem, TeamHead, TeamBox, TeamTitle, TeamText, SocialList, SocLink, SocSvg };