import styled from "styled-components";

const IntroductionSection = styled.section`
background-color: rgb(245, 245, 245);
display: flex;
padding-top: 60px;
padding-bottom: 60px;
padding-right: 80px;
`;

const IntroductionContainer = styled.div`
width: 100%;
margin: 0 auto;
padding-left: 15px;
padding-right: 15px;
`;

const IntroductionHeader = styled.h2`
font-size: 28px;
font-weight: 600;
text-align: center;
color: rgb(0,0,0);
margin-bottom: 20px;
`;

export { IntroductionSection, IntroductionContainer, IntroductionHeader };