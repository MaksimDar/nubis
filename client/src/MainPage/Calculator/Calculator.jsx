import React, { useState } from "react";
import { CalculatorSection, CalculationContainer, CalculatorTitle, CalculatorList, CalculatorItem, CalculatorButton, CalculatorResult } from "./Calculator.styled";

const Calculator = () => {
    const [systemSize, setSystemSize] = useState('');
    const [sunLightHours, setSunLightHours] = useState('');
    const [energyEfficiency, setEnergyEfficiency] = useState('');
    const [electricityRate, setElectricityRate] = useState('');
    const [results, setResults] = useState('');

    const calculateOutput = () => {
        let energy = systemSize * sunLightHours * 365 * energyEfficiency;
        let income = energy * electricityRate;
        return { energy, income };
    }
    const handleCalculation = () => {
        const { energy, income } = calculateOutput();
        setResults({ energy, income });
    }
    return (
        <>
            <CalculatorSection>
                <CalculationContainer>
                    <CalculatorTitle>Калькулятор вихідної енергії та заробітку</CalculatorTitle>
                    <CalculatorList>
                        <CalculatorItem>Розмір системи (кВт):
                            <input type="number" value={systemSize} onChange={(e) => setSystemSize(e.target.value)} />
                        </CalculatorItem>
                        <CalculatorItem>Години сонячного світла/день:
                            <input type="numbers" value={sunLightHours} onChange={(e) => setSunLightHours(e.target.value)} />
                        </CalculatorItem>
                        <CalculatorItem>Коефіцієнт корисної дії:
                            <input type="numbers" value={energyEfficiency} onChange={(e) => setEnergyEfficiency(e.target.value)} />
                        </CalculatorItem>
                        <CalculatorItem>Ціна електроенергії (₴/кВт·год):
                            <input type="numbers" value={electricityRate} onChange={(e) => setElectricityRate(e.target.value)} />
                        </CalculatorItem>
                    </CalculatorList>
                    <CalculatorButton onClick={handleCalculation}> Розрахувати</CalculatorButton>
                    {results && (
                        <div>
                            <CalculatorResult>Вироблено енергії: {results.energy.toFixed(2)} кВт</CalculatorResult>
                            <CalculatorResult>Дохід: {results.income.toFixed(2)} ₴</CalculatorResult>
                        </div>
                    )}
                </CalculationContainer>
            </CalculatorSection>

        </>
    )
};

export { Calculator };