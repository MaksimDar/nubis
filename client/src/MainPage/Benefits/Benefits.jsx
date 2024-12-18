import React from "react";
import { BenefitsSection, BenefitsContainer, BenefitsTitle, BenefitsList, BenefitsItem, BenefitsInfo, ItemTitle, BenefitsLink, ImageContainer, ItemText } from "./Benefits.styled";
import sustainabilityImage from '../../images/sustainability.jpg';
import electricity from '../../images/electricity-costs.jpg';
import independence from '../../images/independence.jpg';
import climate from '../../images/climate-change.jpg';
import property from '../../images/property.jpg';
import environment from '../../images/environment.jpg';

const Benefits = () => {
    return (
        <>
            <BenefitsSection>
                <BenefitsContainer>
                    <BenefitsTitle>Переваги сонячної енергії</BenefitsTitle>
                    <BenefitsList>
                        <BenefitsItem>
                            <BenefitsLink href="" >
                                <ImageContainer>
                                    <img src={sustainabilityImage} alt="Sustainability" />
                                    <ItemText>Сонячна енергія є безмежним і невичерпним ресурсом. Вона знижує залежність від викопних палив, забезпечуючи доступ до енергії в майбутньому.
                                    </ItemText>
                                    <BenefitsInfo>
                                        <ItemTitle>Відновлюване джерело енергії</ItemTitle>
                                    </BenefitsInfo>
                                </ImageContainer>
                            </BenefitsLink >
                        </BenefitsItem>
                        <BenefitsItem>
                            <BenefitsLink href="">
                                <ImageContainer>
                                    <img src={electricity} alt="Electricity" />
                                    <ItemText>Виробляючи власну електроенергію, ви можете значно знизити щомісячні витрати на комунальні послуги. Надлишкова енергія, яка виробляється, часто може бути продана назад в мережу.
                                    </ItemText>
                                    <BenefitsInfo>
                                        <ItemTitle>Зменшує витрати на енергію</ItemTitle>
                                    </BenefitsInfo>
                                </ImageContainer>
                            </BenefitsLink>
                        </BenefitsItem>
                        <BenefitsItem>
                            <BenefitsLink href="">
                                <ImageContainer>
                                    <img src={independence} alt="Independence" />
                                    <ItemText>Сонячні системи дозволяють користувачам генерувати власну електроенергію, зменшуючи залежність від централізованих енергомереж. У віддалених або автономних районах сонячна енергія є ефективним і незалежним рішенням.
                                    </ItemText>
                                    <BenefitsInfo>
                                        <ItemTitle>Енергетична незалежність</ItemTitle>
                                    </BenefitsInfo>
                                </ImageContainer>
                            </BenefitsLink>
                        </BenefitsItem>
                        <BenefitsItem>
                            <BenefitsLink href="">
                                <ImageContainer>
                                    <img src={climate} alt="Climate" />
                                    <ItemText>Сонячна енергія значно зменшує потребу в використанні викопних видів палива, таких як вугілля, нафта та газ, що сприяє зниженню викидів парникових газів. Це допомагає уповільнити процес глобального потепління та зберегти природні ресурси для наступних поколінь.
                                    </ItemText>
                                    <BenefitsInfo>
                                        <ItemTitle>Пом'якшує зміну клімату</ItemTitle>
                                    </BenefitsInfo>
                                </ImageContainer>
                            </BenefitsLink>
                        </BenefitsItem>
                        <BenefitsItem>
                            <BenefitsLink href="">
                                <ImageContainer>
                                    <img src={property} alt="Property" />
                                    <ItemText>
                                        Будинки з сонячними панелями часто мають вищу ринкову вартість. Покупці приваблюються зниженням витрат на енергію та екологічно чистими технологіями. Сонячні системи не тільки знижують витрати, але й підвищують привабливість нерухомості завдяки сталому розвитку.
                                    </ItemText>
                                    <BenefitsInfo>
                                        <ItemTitle>
                                            Збільшує вартість власності</ItemTitle>
                                    </BenefitsInfo>
                                </ImageContainer>
                            </BenefitsLink>
                        </BenefitsItem>
                        <BenefitsItem>
                            <BenefitsLink href="">
                                <ImageContainer>
                                    <img src={environment} alt="Environment" />
                                    <ItemText>Виробництво сонячної енергії не викидає парникових газів, що зменшує вуглецевий слід. Сонячні панелі не забруднюють повітря чи воду, на відміну від традиційних джерел енергії, таких як вугілля та газ. Вони сприяють зменшенню забруднення навколишнього середовища та покращенню якості життя.
                                    </ItemText>
                                    <BenefitsInfo>
                                        <ItemTitle>Екологічне джерело енергії</ItemTitle>
                                    </BenefitsInfo>
                                </ImageContainer>
                            </BenefitsLink>
                        </BenefitsItem>
                    </BenefitsList>
                </BenefitsContainer>
            </BenefitsSection>

        </>
    )
};

export { Benefits };

