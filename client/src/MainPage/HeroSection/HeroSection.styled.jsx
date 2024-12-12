import styled from "styled-components";
import backgroundImage from '../../images/solar-panels2.jpg';

const Section = styled.section`
display: block;
text-align: center;
background-image: linear-gradient(rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)), url(${backgroundImage});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
padding-top: 250px;
padding-bottom: 250px;
margin: 0 auto;
max-width: 1600px;
max-height: 1000px;
`;

const HeroTitle = styled.h1`
font-size: 32;
font-weight:600;
color: rgb(255,255,255);
`;

export { Section, HeroTitle };
