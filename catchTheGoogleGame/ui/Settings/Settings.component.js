import { playAgain } from "../../data/state-manager.js";

export function SettingsComponent() {
    const element = document.createElement('div');
    element.classList.add('top-items');
    // ItemsElement_1
    const topItemsElement_1 = document.createElement('div');
    topItemsElement_1.classList.add('line');

    const labelElement_1 = document.createElement('label');
    labelElement_1.append('Grid size: ');

    const selectElement_1 = document.createElement('select');
    selectElement_1.name = 'select';
    selectElement_1.id = '01';

    const optionElement_1 = document.createElement('option');
    optionElement_1.append('4x4');
    const optionElement_2 = document.createElement('option');
    optionElement_2.append('5x5');
    const optionElement_3 = document.createElement('option');
    optionElement_3.append('6x6');
    const optionElement_4 = document.createElement('option');
    optionElement_4.append('7x7');
    const optionElement_5 = document.createElement('option');
    optionElement_5.append('8x8');

    selectElement_1.append(optionElement_1, optionElement_2, optionElement_3, optionElement_4, optionElement_5);
    topItemsElement_1.append(labelElement_1, selectElement_1)
    // ItemsElement_2
    const topItemsElement_2 = document.createElement('div');
    topItemsElement_2.classList.add('line');

    const labelElement_2 = document.createElement('label');
    labelElement_2.append('Points to win');

    const selectElement_2 = document.createElement('select');
    selectElement_2.name = 'select';
    selectElement_2.id = '02';

    const optionElement_2_1 = document.createElement('option');
    optionElement_2_1.append('20pts');
    const optionElement_2_2 = document.createElement('option');
    optionElement_2_2.append('40pts');
    const optionElement_2_3 = document.createElement('option');
    optionElement_2_3.append('50pts');
    const optionElement_2_4 = document.createElement('option');
    optionElement_2_4.append('60pts');
    const optionElement_2_5 = document.createElement('option');
    optionElement_2_5.append('80pts');

    selectElement_2.append(optionElement_2_1, optionElement_2_2, optionElement_2_3, optionElement_2_4, optionElement_2_5);
    topItemsElement_2.append(labelElement_2, selectElement_2)

    const startGameBtnElement = document.createElement('button');
    startGameBtnElement.textContent = 'START GAME';
    startGameBtnElement.addEventListener('click', () => {
        playAgain();
    });

    element.append(topItemsElement_1, topItemsElement_2)
    // element.append(gridSizeInput, pointsToWinInput, pointsToLoseInput, soundCheckbox, startGameBtnElement);

    return element;
}