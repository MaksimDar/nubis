import styled from "styled-components";

const OptionSection = styled.section`
background-color: rgb(0, 150, 136) ;
display: flex;
padding-top: 60px;
padding-bottom: 60px;
padding-left: 60px;
padding-right: 60px;
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
color: rgb(255,255,255);
`;

const OptionTitle = styled.p`
font-size: 24px;
font-weight: 600;
color: rgb(255,255,255);
margin-bottom: 20px;
`;

const OptionList = styled.ul`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 30px; 
width: 100%;
padding: 0;
margin: 0;
`;


const OptionItem = styled.li`
   text-align: center;
`;

const OptionGoal = styled.h3`
font-size: 20px;
font-weight: 600;
color: rgb(255, 255, 255);
padding: 10px;
border: 1px solid rgb(255, 255, 255);
border-radius: 4px;
width: 100%; 
max-width: 200px; 
margin: 0 auto; 
text-align: center;
`;


export { OptionSection, OptionTitle, OptionContent, OptionHeader, OptionList, OptionItem, OptionGoal };

// Soft Blue: RGB(135, 206, 235) 
// Accent: RGB(255, 140, 0)