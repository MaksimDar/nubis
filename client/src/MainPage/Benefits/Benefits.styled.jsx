import styled from "styled-components";

const BenefitsSection = styled.section`
background-color: rgb(0, 150, 136) ;
display: flex;
padding-top: 60px;
padding-bottom: 60px;
`;

const BenefitsContainer = styled.div`
width: 100%;
margin: 0 auto;
padding-left: 15px;
padding-right: 15px;
`;

const BenefitsTitle = styled.h2`
font-size: 28px;
font-weight: 600;
text-align: center;
color: rgb(255,255,255);
margin-bottom: 40px;
`;

const BenefitsList = styled.ul`
  display: flex;
  justify-content: space-between; 
  flex-wrap: wrap;
  padding: 0 80px; 
  gap: 30px;
`;

const BenefitsItem = styled.li`
  flex-basis: calc(33.33% - 20px); 
  max-width: 370px; 
  box-sizing: border-box; 
  text-align: center; 
  background-color: rgba(255, 255, 255, 0.1); 
  border-radius: 8px; 
`;

const BenefitsInfo = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid #EEEEEE;
  border-left: 1px solid #EEEEEE;
  border-right: 1px solid #EEEEEE;
  flex-grow: 1;
`;

const ItemTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 2;
  letter-spacing: 0.06em;
  color: rgb(255,255,255);
}`;

const BenefitsLink = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
  transition-property: box-shadow;
  transition-duration: 250ms;
  text-decoration: none;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  &:hover, 
  &:focus {
    cursor: pointer;
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.5);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;  
`;

const ItemText = styled.p`
  position: absolute;
  font-size: 18px;
  line-height: 1.56;
  letter-spacing: 0.03em;
  color: #FFFFFF;
  background-color: rgba(33, 150, 243, 0.9);
  padding: 20px;
  height: 100%;
  top: 0;
  left: 0;
  transform: translateY(100%);  
  z-index: 2;  
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  
  ${BenefitsLink}:hover &,
  ${BenefitsLink}:focus & {
    transform: translateY(0); 
  }
`;





export { BenefitsSection, BenefitsContainer, BenefitsTitle, BenefitsList, BenefitsItem, BenefitsInfo, ItemTitle, BenefitsLink, ImageContainer, ItemText };