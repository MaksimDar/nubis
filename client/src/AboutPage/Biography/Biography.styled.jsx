import styled from "styled-components";

const BiographySection = styled.section`
background-color: rgb(0, 150, 136);
display: flex;
padding-top: 60px;
padding-bottom: 60px;
padding-right: 80px;
`;

const BiographyContainer = styled.div`
width: 100%;
margin: 0 auto;
padding-left: 40px;
padding-right: 40px;
`;

const BiographyHead = styled.h2`
font-family: 'Lato', sans-serif;
text-align: center;
font-size: 28px;
margin-bottom: 15px;
`;

const BiographyParagraph = styled.p`
font-family: 'Lato', sans-serif;
font-size: 24px;
`;


export { BiographySection, BiographyContainer, BiographyHead, BiographyParagraph };