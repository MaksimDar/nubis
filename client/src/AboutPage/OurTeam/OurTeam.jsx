import React from "react";

import { TeamSection, TeamContainer, TeamHead, TeamList, TeamBox, TeamItem, TeamTitle, TeamText, SocialList, SocLink, SocSvg } from "./OurTeam.styled";
import photo from "../../images/img-4.jpg";

import instagram from "../../images/icons.svg#icon-instagram";

const OurTeam = () => {
    return (
        <>
            <TeamSection>
                <TeamContainer>
                    <TeamHead>Наша команда</TeamHead>
                    <TeamList>
                        <TeamItem>
                            <img src={photo} alt="Photo" width="100%" />
                            <TeamBox>
                                <TeamTitle>Ігор Дем'яненко</TeamTitle>
                                <TeamText>Product Designer</TeamText>
                                <SocialList>
                                    <li>
                                        <SocLink href="" >
                                            <SocSvg class="soc__icon" width="20" height="20">
                                                <use href={instagram}></use>
                                            </SocSvg>
                                        </SocLink>
                                    </li>
                                    <li>
                                        <SocLink href="" >
                                            <SocSvg width="20" height="20">
                                                <use href="../../images/icons.svg#icon-twitter"></use>
                                            </SocSvg>
                                        </SocLink>
                                    </li>
                                    <li >
                                        <SocLink href="">
                                            <SocSvg width="20" height="20">
                                                <use href="../../images/icons.svg#icon-facebook"></use>
                                            </SocSvg>
                                        </SocLink>
                                    </li>
                                    <li>
                                        <SocLink href="">
                                            <SocSvg width="20" height="20">
                                                <use href="../../images/icons.svg#icon-linkedin"></use>
                                            </SocSvg>
                                        </SocLink>
                                    </li>
                                </SocialList>

                            </TeamBox>


                        </TeamItem>
                        <TeamItem>
                            <img src={photo} alt="Photo" width="100%" />
                            <TeamBox>
                                <TeamTitle>Ігор Дем'яненко</TeamTitle>
                                <TeamText>Product Designer</TeamText>
                                <SocialList>
                                    <li>
                                        <SocLink href="" >
                                            <SocSvg class="soc__icon" width="20" height="20">
                                                <use href={instagram}></use>
                                            </SocSvg>
                                        </SocLink>
                                    </li>
                                    <li>
                                        <SocLink href="" >
                                            <SocSvg width="20" height="20">
                                                <use href="../../images/icons.svg#icon-twitter"></use>
                                            </SocSvg>
                                        </SocLink>
                                    </li>
                                    <li >
                                        <SocLink href="">
                                            <SocSvg width="20" height="20">
                                                <use href="../../images/icons.svg#icon-facebook"></use>
                                            </SocSvg>
                                        </SocLink>
                                    </li>
                                    <li>
                                        <SocLink href="">
                                            <SocSvg width="20" height="20">
                                                <use href="../../images/icons.svg#icon-linkedin"></use>
                                            </SocSvg>
                                        </SocLink>
                                    </li>
                                </SocialList>

                            </TeamBox>


                        </TeamItem>
                        <TeamItem>
                            <img src={photo} alt="Photo" width="100%" />
                            <TeamBox>
                                <TeamTitle>Ігор Дем'яненко</TeamTitle>
                                <TeamText>Product Designer</TeamText>
                                <SocialList>
                                    <li>
                                        <SocLink href="" >
                                            <SocSvg class="soc__icon" width="20" height="20">
                                                <use href={instagram}></use>
                                            </SocSvg>
                                        </SocLink>
                                    </li>
                                    <li>
                                        <SocLink href="" >
                                            <SocSvg width="20" height="20">
                                                <use href="../../images/icons.svg#icon-twitter"></use>
                                            </SocSvg>
                                        </SocLink>
                                    </li>
                                    <li >
                                        <SocLink href="">
                                            <SocSvg width="20" height="20">
                                                <use href="../../images/icons.svg#icon-facebook"></use>
                                            </SocSvg>
                                        </SocLink>
                                    </li>
                                    <li>
                                        <SocLink href="">
                                            <SocSvg width="20" height="20">
                                                <use href="../../images/icons.svg#icon-linkedin"></use>
                                            </SocSvg>
                                        </SocLink>
                                    </li>
                                </SocialList>

                            </TeamBox>


                        </TeamItem>
                        <TeamItem>
                            <img src={photo} alt="Photo" width="100%" />
                            <TeamBox>
                                <TeamTitle>Ігор Дем'яненко</TeamTitle>
                                <TeamText>Product Designer</TeamText>
                                <SocialList>
                                    <li>
                                        <SocLink href="" >
                                            <SocSvg class="soc__icon" width="20" height="20">
                                                <use href={instagram}></use>
                                            </SocSvg>
                                        </SocLink>
                                    </li>
                                    <li>
                                        <SocLink href="" >
                                            <SocSvg width="20" height="20">
                                                <use href="../../images/icons.svg#icon-twitter"></use>
                                            </SocSvg>
                                        </SocLink>
                                    </li>
                                    <li >
                                        <SocLink href="">
                                            <SocSvg width="20" height="20">
                                                <use href="../../images/icons.svg#icon-facebook"></use>
                                            </SocSvg>
                                        </SocLink>
                                    </li>
                                    <li>
                                        <SocLink href="">
                                            <SocSvg width="20" height="20">
                                                <use href="../../images/icons.svg#icon-linkedin"></use>
                                            </SocSvg>
                                        </SocLink>
                                    </li>
                                </SocialList>

                            </TeamBox>

                        </TeamItem>

                    </TeamList>
                </TeamContainer>
            </TeamSection>
        </>
    )
};

export { OurTeam };