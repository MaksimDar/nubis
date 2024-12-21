import styled from "styled-components";
// import futureImage from "../../images/future.jpg";
// import nubisFuture from "../../images/nubis_future.jpg";
import nubis from "../../images/nubis.jpg";

const IntroductionSection = styled.section`
display: block;
text-align: center;
background-image: linear-gradient(rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)), url(${nubis});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
padding-top: 250px;
padding-bottom: 250px;
max-width: 1600px;
max-height: 1000px;
`;

const IntroductionHeader = styled.h2`
font-size: 32;
font-weight: 600;
color: rgb(255,255,255);
`;

export { IntroductionSection, IntroductionHeader };