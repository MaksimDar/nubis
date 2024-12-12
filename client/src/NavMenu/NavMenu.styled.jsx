import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavSpan = styled.span`
font-size: 24px;
font-weight: 600;
color: rgb(255,255,255);
margin-right: 40px; 
`;

const NavContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
margin: 0 auto;
padding-left: 15px;
padding-right: 15px;
`;
const NavSection = styled.section`
background-color: rgb(0, 150, 136);
display: flex;
align-items: center;
padding-top: 60px;
padding-bottom: 60px;
`;

const NavList = styled.ul`
display: flex;
list-style: none;
align-items: center;
margin: 0;
`;

const NavItem = styled.li`
text-decoration: none;
font-size: 20px;
font-weight: 400;
color: rgb(255,255,255);
&:not(:last-child) {
margin-right: 30px;
}
`;

const NavButtons = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
gap: 5px;`

const NavButton = styled.button`
border: 1px rgb(255,255,255) solid;
border-radius: 5px;
background-color:rgb(0, 150, 136);
color: rgb(255,255,255);
cursor: pointer;
&:hover {
color: orange;
border-color: orange;
}`

const ContactList = styled.ul`
display: flex;
align-items: center;
gap: 15px;
`
const ContactItem = styled.li`
text-decoration: none;
font-size: 20px;
font-weight: 400;
color: rgb(255,255,255);
`;

const NavigationLink = styled(NavLink)`
text-decoration: none;
color: inherit; 
padding-bottom: 5px;
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

export { NavSpan, NavSection, NavContainer, NavList, NavItem, NavButtons, ContactItem, ContactList, ContactLink, NavButton, NavigationLink };

