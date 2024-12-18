import React, { useState } from "react";
import { OptionSection, OptionTitle, OptionContent, OptionHeader, OptionList, OptionItem, OptionGoal } from "./Option.styled";

const Option = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleItem = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const items = [
        {
            title: "Турбота про клієнтів",
            content: "Ми прагнемо зробити перехід на сонячну енергію максимально простим і комфортним для наших клієнтів. Nubis пропонує рішення, що відповідають вашим унікальним потребам і забезпечують довготривалі переваги.",
        },
        {
            title: "Стабільний розвиток",
            content: "Використання сонячної енергії — це інвестиція у сталий розвиток. У Nubis ми підтримуємо вашу місію зробити світ екологічно чистішим, надаючи найсучасніші енергетичні технології.",
        },
        {
            title: "Доступність технологій",
            content: "Ми в Nubis знаємо, що інновації повинні бути доступними для кожного. Завдяки нашим рішенням сонячна енергія стає реальністю для будь-якого дому чи бізнесу.",
        },
        {
            title: "Економічний акцент",
            content: "Сонячна енергія з Nubis — це розумний вибір для вашого бюджету. Економте кошти сьогодні та забезпечте стабільність завтра.",
        },
        {
            title: "Технологічний акцент",
            content: "Ми впроваджуємо найновіші технології, щоб надати вам енергетичні рішення, які вирізняються продуктивністю, ефективністю та довговічністю.",
        },
        {
            title: "Глобальна перспектива",
            content: "Ми з Nubis не лише змінюємо майбутнє енергетики, але й формуємо глобальну спільноту, яка піклується про навколишнє середовище.",
        },
    ];

    return (
        <>
            <OptionSection>
                <OptionContent>
                    <OptionHeader>Вибір, Що Змінює Майбутнє</OptionHeader>
                    <OptionTitle>Чому варто обрати Nubis?</OptionTitle>
                    <OptionList>
                        {items.map((item, index) => (
                            <OptionItem key={index}>
                                <OptionGoal onClick={() => toggleItem(index)} style={{ cursor: "pointer" }}>
                                    {item.title}
                                </OptionGoal>
                                <p style={{
                                    display: activeIndex === index ? "block" : "none",
                                    marginTop: "10px",
                                    color: "#333",
                                }}>
                                    {item.content}
                                </p>
                            </OptionItem>
                        ))}
                    </OptionList>
                </OptionContent>
            </OptionSection>
        </>
    );
};

export { Option };
