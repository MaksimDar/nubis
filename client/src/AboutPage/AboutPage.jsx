import React from "react";
import { Introduction } from "./Introduction/Introduction";
import { Biography } from "./Biography/Biography";
import { Services } from "./Services/Services";
import { Final } from "./Final/Final";
import { OurTeam } from "./OurTeam/OurTeam";

const AboutPage = () => {
    return (
        <>
            <Introduction />
            <Biography />
            <Services />
            <Final />
            <OurTeam />
        </>
    )
};

export { AboutPage };