import React from "react";
import { NavSpan, NavSection, NavContainer, NavList, NavigationLink, NavItem, NavButtons, ContactItem, ContactList, ContactLink, NavButton } from "./NavMenu.styled";

const NavMenu = () => {
    return (
        <>
            <NavSection>
                <NavContainer>
                    <NavSpan>Nubis</NavSpan>
                    <NavList>
                        <NavItem>
                            <NavigationLink to="/">Головна</NavigationLink>
                        </NavItem>
                        <NavItem>
                            <NavigationLink to="/about">Про компанію</NavigationLink>
                        </NavItem>
                        <NavItem>
                            <NavigationLink to="/services">Послуги</NavigationLink>
                        </NavItem>
                        <NavItem>
                            <NavigationLink to="/projects">Проекти</NavigationLink>
                        </NavItem>
                        <NavItem>
                            <NavigationLink to="/news">Новини</NavigationLink>
                        </NavItem>
                        <NavItem>
                            <NavigationLink to="/contacts">Контакти</NavigationLink>
                        </NavItem>
                    </NavList>
                    <ContactList>
                        <ContactItem>
                            <ContactLink href="mailto:example@gmail.com">example@gmail.com</ContactLink>
                        </ContactItem>
                        <ContactItem>
                            <ContactLink href="tel:+38 000 000 00 00">
                                +38 000 000 00 00
                            </ContactLink>
                        </ContactItem>
                    </ContactList>
                    <NavButtons>
                        <NavButton>
                            UA
                        </NavButton>
                        <NavButton>
                            UK
                        </NavButton>
                        <NavButton>
                            ES
                        </NavButton>
                    </NavButtons>
                </NavContainer>
            </NavSection>

        </>
    )
};

export default NavMenu;