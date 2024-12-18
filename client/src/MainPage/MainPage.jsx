import React from "react";
import { HeroSection } from './HeroSection/HeroSection';
import { AboutUs } from "./AboutUs/AboutUs";
import { Option } from "./Option/Option";
import { Partners } from "./Partners/Partners";
import { Calculator } from "./Calculator/Calculator";
import { Benefits } from "./Benefits/Benefits";
import { Sustainability } from "./Sustainability/Sustainability";
// import { SolarMap } from "./SolarMap/SolarMap";
import { Goal } from "./Goal/Goal";
const MainPage = () => {
    return (
        <>
            <HeroSection />
            <AboutUs />
            <Benefits />
            {/* <SolarMap /> */}
            <Sustainability />
            <Calculator />
            <Goal />
            <Option />
            <Partners />
        </>
    )

};

export default MainPage;