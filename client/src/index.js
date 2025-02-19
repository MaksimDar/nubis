// import { createRoot } from 'react-dom/client';
// import App from './App';
// import './i18n';
// createRoot(document.getElementById('root')).render(<App />);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './i18n';
import { I18nextProvider } from "react-i18next";
import i18next from "./i18n";
import { LanguageProvider } from "./LanguageContext";

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <I18nextProvider i18n={i18next}>
        <LanguageProvider>
            <App />
        </LanguageProvider>
    </I18nextProvider>
);

