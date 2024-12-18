import React from "react";
import NavMenu from "./NavMenu/NavMenu";
import MainPage from "./MainPage/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import { AppHeader, AppSection } from "./App.styled";
import { AboutPage } from "./AboutPage/AboutPage";

const App = () => {
    const ServicesPage = () => <AppHeader>Services Page</AppHeader>;
    const ProjectsPage = () => <AppHeader>Projects Page</AppHeader>;
    const NewsPage = () => <AppHeader>News Page</AppHeader>;
    const ContactsPage = () => <AppHeader>Contacts Page</AppHeader>;
    return (
        <Router>
            <header>
                <NavMenu />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/news" element={<NewsPage />} />
                    <Route path="/contacts" element={<ContactsPage />} />
                </Routes>
            </main>
            <footer>
                <Footer />
            </footer>
        </Router>
    )
};

export default App;