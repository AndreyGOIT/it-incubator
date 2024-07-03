import { playAgain } from "../../data/state-manager.js";

export function SettingsComponent() {
    const element = document.createElement('div');
    // element.innerHTML = 'Settings';
    const gridSizeInput = document.createElement('input');
    const pointsToWinInput = document.createElement('input');
    const pointsToLoseInput = document.createElement('input');
    const soundCheckbox = document.createElement('input');
    soundCheckbox.type = 'checkbox';

    const startGameBtnElement = document.createElement('button');
    startGameBtnElement.textContent = 'START GAME';
    startGameBtnElement.addEventListener('click', () => {
        playAgain();
    });

    element.append(gridSizeInput, pointsToWinInput, pointsToLoseInput, soundCheckbox, startGameBtnElement);

    return element;
}