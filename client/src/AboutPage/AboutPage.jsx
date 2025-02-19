import React from "react";
import { Introduction } from "./Introduction/Introduction";
import { Biography } from "./Biography/Biography";
import { Services } from "./Services/Services";
import { Final } from "./Final/Final";
import { OurTeam } from "./OurTeam/OurTeam";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../LanguageContext";

const AboutPage = () => {
    const { t } = useTranslation();
    const { lang } = useLanguage();

    console.log("Rendering AboutPage - Current Language:", lang);

    return (
        <>
            <h1>{t("home")}</h1>
            <Introduction key={lang} />
            <Biography />
            <Services />
            <Final />
            <OurTeam />
        </>
    )
};

export { AboutPage };