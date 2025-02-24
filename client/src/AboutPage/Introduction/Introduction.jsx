

import React from "react";
import { useTranslation } from "react-i18next";
import { IntroductionSection, IntroductionHeader } from "./Introduction.styled";

const Introduction = () => {
    const { t } = useTranslation();

    return (
        <IntroductionSection>
            <IntroductionHeader>{t("introduction_title")}</IntroductionHeader>
        </IntroductionSection>
    );
};

export { Introduction };








