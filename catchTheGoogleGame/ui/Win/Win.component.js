import { getPoints, playAgain } from '../../data/state-manager.js';

export function WinComponent() {
    const element = document.createElement('div');
    
    const points = getPoints();

    const titleElement = document.createElement('h1');
    titleElement.textContent = 'You Win!';

    element.append(titleElement);
    element.append(`Catched: ${points.catch}; Misses: ${points.miss}`)

    const playAgainBtnElement = document.createElement('button');
    playAgainBtnElement.textContent = 'Play Again';
    playAgainBtnElement.addEventListener('click', () => {
        playAgain();
    });
    element.append(playAgainBtnElement);
    
    return element;
}