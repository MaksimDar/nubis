import styled from "styled-components";

const CalculatorSection = styled.section`
background-color: rgb(0, 150, 136) ;
display: flex;
padding-top: 60px;
padding-bottom: 60px;
padding-left: 15px;
padding-right: 15px;
`;

const CalculationContainer = styled.div`
display: flex;
flex-direction: column; 
align-items: center; 
width: 100%;
`;

const CalculatorTitle = styled.h2`
font-size: 28px;
font-weight: 600;
text-align: center;
color: rgb(255,255,255);
margin-bottom: 20px;
`;

const CalculatorList = styled.ul`
display: flex;
flex-direction: flex-start;
gap: 15px;
margin-bottom: 20px;
`;

const CalculatorItem = styled.li`
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

const CalculatorButton = styled.button`
width: 140px;
height: 60px;
background-color: rgb(255, 193, 7);
border-radius: 16px;
border: 2px solid rgb(255, 87, 34);
font-size: 18px;
font-weight: 600;
color: rgb(255, 255, 255);
text-align:center;
margin-bottom: 20px;
cursor: pointer;
&:hover {
background-color: rgb(255, 87, 34);
};
`;

const CalculatorResult = styled.p`
font-size: 24px;
font-weight: 600;
text-align: center;
color: rgb(255,255,255);
`;

export { CalculatorSection, CalculationContainer, CalculatorTitle, CalculatorList, CalculatorItem, CalculatorButton, CalculatorResult };