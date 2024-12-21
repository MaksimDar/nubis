import styled from "styled-components";

const ServicesSection = styled.section`
background-color: rgb(255, 255, 255);
display: flex;
padding-top: 60px;
padding-bottom: 60px;
padding-right: 80px;
`;

const ServicesContainer = styled.div`
width: 100%;
margin: 0 auto;
padding-left: 40px;
padding-right: 40px;
`;

const ServicesHead = styled.h2`
font-family: 'Lato', sans-serif;
text-align: center;
font-size: 28px;
margin-bottom: 15px;
color: rgb(0,0,0);
`;

const ServicesOption = styled.h3`
font-family: 'Lato', sans-serif;
font-size: 24px;
font-style: bold;
color: rgb(0,0,0);
margin-bottom: 10px;
`;

const ServicesParagraph = styled.p`
font-family: 'Lato', sans-serif;
font-size: 24px;
color: rgb(0,0,0);
margin-bottom: 10px;
`;

export { ServicesSection, ServicesContainer, ServicesHead, ServicesOption, ServicesParagraph };