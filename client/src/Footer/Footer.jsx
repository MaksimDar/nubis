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
                                <ContactLink href="https://maps.app.goo.gl/2voMw9M9dA4GDjg27" class="address__location link">
                                    вул. Щаслива, 106, село
                                    Йосипівка, Благовіщенський район, Кіровоградська
                                    обл., 26414
                                </ContactLink>
                            </ContactItem>
                            <ContactItem>
                                <ContactLink href="mailto:nubis.energy@gmail.com">nubis.energy@gmail.com</ContactLink>
                            </ContactItem>
                            <ContactItem>
                                <ContactLink href="tel:+38 097 552 29 08">
                                    +38 097 552 29 08
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