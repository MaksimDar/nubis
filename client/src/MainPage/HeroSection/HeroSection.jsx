import React from "react";
import { Section, HeroTitle } from "./HeroSection.styled";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
    const { t } = useTranslation()
    return (
        <>
            <Section>
                <HeroTitle>{t("hero_title")}</HeroTitle>

            </Section>
        </>
    )
};

export { HeroSection };