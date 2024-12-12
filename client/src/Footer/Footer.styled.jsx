import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const FooterSpan = styled.span`
font-size: 24;
font-weight:600;
color: rgb(255,255,255);
margin-right: 40px; 
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: space-between;
  text-align: center;
  align-items: baseline;
  flex-wrap: nowrap;
  justify-content: center;
  text-align: left;
`;

const FooterSection = styled.section`
background-color: rgb(0, 150, 136);
display: flex;
padding: 60px 15px;
`;

const FooterList = styled.ul`
display: flex;
list-style: none;
flex-direction: column;
margin: 0 auto;
`;

const FooterItem = styled.li`
text-decoration: none;
font-size: 20px;
font-weight: 400px;
color: rgb(255,255,255);
&:not(:last-child) {
margin-right: 30px;
}
`;

const ContactList = styled.ul`
display: flex;
flex-direction: column;

`
const ContactItem = styled.li`
text-decoration: none;
font-size: 20px;
font-weight: 400px;
color: rgb(255,255,255);
`;

const FooterLink = styled(NavLink)`
text-decoration: none;
color: inherit; 
padding-bottom: 2px;
border-bottom: 2px solid transparent; 
transition: border-color 0.3s ease;
&:hover {
color: orange;
};
&.active {
  border-bottom: 2px solid orange;
}
`;

const ContactLink = styled.a`
text-decoration: none;
color: inherit; 

&:hover {
color: orange;
};
&:active {
  color: orange;
}
`;

const Adress = styled.address`
display: block;
margin-right: 40px;`
export { FooterSpan, FooterSection, FooterContainer, FooterList, FooterItem, ContactItem, ContactList, ContactLink, FooterLink, Adress };