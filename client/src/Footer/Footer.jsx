import React from "react";
import { FooterSpan, FooterSection, FooterContainer, FooterList, FooterLink, FooterItem, ContactItem, ContactList, ContactLink, Adress } from './Footer.styled.jsx';


const Footer = () => {
    return (
        <>
            <FooterSection>
                <FooterContainer>
                    <Adress>
                        <FooterSpan>Nubis</FooterSpan>
                        <ContactList>
                            <ContactItem>
                                <ContactLink href="https://goo.gl/maps/FsZgaGo8YKT9qEPr9" class="address__location link">
                                    м. Київ, пр-т Лесі Українки, 26</ContactLink>
                            </ContactItem>
                            <ContactItem>
                                <ContactLink href="mailto:example@gmail.com">example@gmail.com</ContactLink>
                            </ContactItem>
                            <ContactItem>
                                <ContactLink href="tel:+38 000 000 00 00">
                                    +38 000 000 00 00
                                </ContactLink>
                            </ContactItem>
                        </ContactList>
                    </Adress>
                    <FooterList>
                        <FooterItem>
                            <FooterLink to="/">Головна</FooterLink>
                        </FooterItem>
                        <FooterItem>
                            <FooterLink to="/about">Про компанію</FooterLink>
                        </FooterItem>
                        <FooterItem>
                            <FooterLink to="/services">Послуги</FooterLink>
                        </FooterItem>
                        <FooterItem>
                            <FooterLink to="/projects">Проекти</FooterLink>
                        </FooterItem>
                        <FooterItem>
                            <FooterLink to="/news">Новини</FooterLink>
                        </FooterItem>
                        <FooterItem>
                            <FooterLink to="/contacts">Контакти</FooterLink>
                        </FooterItem>
                    </FooterList>

                </FooterContainer>
            </FooterSection>
        </>
    );
};

export default Footer;