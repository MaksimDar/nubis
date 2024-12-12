import React from "react";
import { AboutSection, AboutHeadline, AboutParagraph, AboutContainer } from "./AboutUs.styled";

const AboutUs = () => {
    return (
        <>
            <AboutSection>
                <AboutContainer>
                    <AboutHeadline>Ми — Nubis</AboutHeadline>
                    <AboutParagraph>
                        У Nubis ми прагнемо революціонізувати споживання енергії,
                        пропонуючи інноваційні сонячні рішення. Наша місія —
                        зробити чисту відновлювану енергію доступною для кожного.
                        Ми поєднуємо передові технології з бездоганним
                        обслуговуванням клієнтів, щоб освітити шлях до світлого
                        майбутнього.
                    </AboutParagraph>

                </AboutContainer>
            </AboutSection>
        </>
    )
};

export { AboutUs };