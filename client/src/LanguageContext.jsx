import React, { createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language);

    const changeLanguage = (newLang) => {
        i18n.changeLanguage(newLang);
        setLang(newLang); // ✅ Update state
    };

    return (
        <LanguageContext.Provider value={{ lang, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);

