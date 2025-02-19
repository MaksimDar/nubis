// import React from "react";
// import { useTranslation } from "react-i18next";
// import { IntroductionSection, IntroductionHeader } from "./Introduction.styled";
// import { useLanguage } from "../../LanguageContext";

// const Introduction = () => {
//     const { t } = useTranslation();
//     const { lang } = useLanguage();
//     console.log("Current language of Introduction:", lang);

//     return (
//         <IntroductionSection>
//             <IntroductionHeader>{t("introduction_title")}</IntroductionHeader>
//         </IntroductionSection>
//     );
// };


// export { Introduction };

import React from "react";
import { useTranslation } from "react-i18next";
import { IntroductionSection, IntroductionHeader } from "./Introduction.styled";
import { useLanguage } from "../../LanguageContext";

const Introduction = () => {
    const { t } = useTranslation();
    const { lang } = useLanguage();

    console.log("Introduction Component - Current Language:", lang);
    console.log("Translation for 'introduction_title':", t("introduction_title"));

    return (
        <IntroductionSection>
            <IntroductionHeader>{t("introduction_title")}</IntroductionHeader>
        </IntroductionSection>
    );
};

export { Introduction };








