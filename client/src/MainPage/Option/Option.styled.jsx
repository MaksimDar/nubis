import styled from "styled-components";

const OptionSection = styled.section`
background-color: rgb(135, 206, 235) ;
display: flex;
padding-top: 60px;
padding-bottom: 60px;
padding-left: 15px;
padding-right: 15px;
`;

const OptionContent = styled.div`
display: flex;
flex-direction: column; 
justify-content: center; 
align-items: center;
text-align: center; 
width: 100%;
`;

const OptionHeader = styled.h2`
font-size: 28px;
font-weight: 600;
margin-bottom: 15px;
color: rgb(0,0,0);
`;

const OptionTitle = styled.h2`
font-size: 24px;
font-weight: 600;
color: rgb(0,0,0);
`;

export { OptionSection, OptionTitle, OptionContent, OptionHeader };

// Soft Blue: RGB(135, 206, 235) 
// Accent: RGB(255, 140, 0)