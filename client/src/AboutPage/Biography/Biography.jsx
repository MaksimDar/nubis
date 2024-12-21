import React from "react";
import { BiographySection, BiographyContainer, BiographyHead, BiographyParagraph } from "./Biography.styled";

const Biography = () => {
    return (
        <>
            <BiographySection>
                <BiographyContainer>
                    <BiographyHead>Про компанію </BiographyHead>
                    <BiographyParagraph>Компанія Nubis, заснована у 2019 році, спеціалізується на розробці, будівництві та експлуатації наземних сонячних фотогальванічних електростанцій. Ми створюємо ефективні та екологічно чисті рішення для виробництва електроенергії з використанням енергії сонячного випромінювання, допомагаючи зробити майбутнє сталим та енергонезалежним.

                        Nubis об’єднує професіоналів із глибоким досвідом у галузі відновлюваної енергетики. Наш підхід базується на впровадженні інноваційних технологій, що забезпечують високу продуктивність та довговічність наших систем.

                    </BiographyParagraph>
                </BiographyContainer>
            </BiographySection>

        </>
    )
};

export { Biography };