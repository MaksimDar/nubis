import React from "react";
import { NavSpan, NavSection, NavContainer, NavList, NavigationLink, NavItem, NavButtons, ContactItem, ContactList, ContactLink, NavButton } from "./NavMenu.styled";

import { useTranslation } from "react-i18next";
import { useLanguage } from "../LanguageContext";

const NavMenu = () => {
    const { t } = useTranslation();
    const { lang, changeLanguage } = useLanguage();


    return (
        <>
            <NavSection>
                <NavContainer>
                    <NavSpan>Nubis.Energy</NavSpan>
                    <NavList>
                        <NavItem>
                            <NavigationLink to="/">{t("home")}</NavigationLink>
                        </NavItem>
                        <NavItem>
                            <NavigationLink to="/about">{t("about")}</NavigationLink>
                        </NavItem>
                        {/* <NavItem>
                            <NavigationLink to="/services">{t("services")}</NavigationLink>
                        </NavItem>
                        <NavItem>
                            <NavigationLink to="/projects">{t("projects")}</NavigationLink>
                        </NavItem>
                        <NavItem>
                            <NavigationLink to="/news">{t("news")}</NavigationLink>
                        </NavItem> */}
                        <NavItem>
                            <NavigationLink to="/contacts">{t("contacts")}</NavigationLink>
                        </NavItem>
                    </NavList>
                    <ContactList>
                        <ContactItem>
                            <ContactLink href="mailto:nubis.energy@gmail.com">nubis.energy@gmail.com</ContactLink>
                        </ContactItem>
                        <ContactItem>
                            <ContactLink href="tel:+380975522908">
                                +38 097 552 29 08
                            </ContactLink>
                        </ContactItem>
                    </ContactList>
                    <NavButtons>
                        <NavButton onClick={() => changeLanguage("uk")}>UA</NavButton>
                        <NavButton onClick={() => changeLanguage("en")}>EN</NavButton>
                    </NavButtons>
                </NavContainer>
            </NavSection>

        </>
    )
};

export default NavMenu;