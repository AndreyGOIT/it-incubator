import { getPoints, playAgain } from '../../data/state-manager.js';

export function WinComponent() {
    const element = document.createElement('div');
    element.classList.add('modal');
    const points = getPoints();
    // modal decoration
    const modalDecorationElement = document.createElement('div');
    modalDecorationElement.classList.add('modal-decoration');
    const winnerIconElement = document.createElement('img');
    winnerIconElement.src = 'img/icons/winnerIcon.svg';
    winnerIconElement.alt = "icon";
    
    modalDecorationElement.append(winnerIconElement);
    // modal wrapper elements
    const modalWrapperElement = document.createElement('div');
    modalWrapperElement.classList.add('modal-elements');
    // 1. modal title
    const titleModalElement = document.createElement('div');
    titleModalElement.classList.add('title-modal');
    titleModalElement.append('You Win!');
    // 2. modal text
    const textModalElement = document.createElement('div');
    textModalElement.classList.add('text-modal');
    textModalElement.append('Congratulations');
    // 3. modal result
    const modalResultElement = document.createElement('div');
    modalResultElement.classList.add('modal-result');
    // modal result inner blocks:
    // 3.1. result block - 1
    const resultBlockElement_1 = document.createElement('div');
    resultBlockElement_1.classList.add('result-block');

    const resultTitleElement_1 = document.createElement('span');
    resultTitleElement_1.classList.add('result-title');
    resultTitleElement_1.append('Catch:');
    
    resultBlockElement_1.append(resultTitleElement_1);
    const resultScoreElement_1 = document.createElement('span');
    resultScoreElement_1.classList.add('result');

    resultScoreElement_1.append(points.catch);
    resultBlockElement_1.append(resultScoreElement_1);

    resultBlockElement_1.append(resultScoreElement_1);
    // 3.2. result block - 2
    const resultBlockElement_2 = document.createElement('div');
    resultBlockElement_2.classList.add('result-block');
    
    const resultTitleElement_2 = document.createElement('span');
    resultTitleElement_2.classList.add('result-title');
    resultTitleElement_2.append('Miss:');
    resultBlockElement_2.append(resultTitleElement_2);
    const resultScoreElement_2 = document.createElement('span');
    resultScoreElement_2.classList.add('result');
    resultScoreElement_2.append(points.miss);
    resultBlockElement_2.append(resultScoreElement_2);

    resultBlockElement_2.append(resultScoreElement_2);
    // append to modalResultElement
    modalResultElement.append(resultBlockElement_1, resultBlockElement_2);
    // 4. button "Play Again"
    const playAgainBtnElement = document.createElement('button');
    playAgainBtnElement.textContent = 'Play Again';
    playAgainBtnElement.classList.add('button');
    playAgainBtnElement.addEventListener('click', () => {
        playAgain();
    });
    // append to modalWrapperElement
    modalWrapperElement.append(titleModalElement, textModalElement, modalResultElement, playAgainBtnElement);
    // append to modal
    element.append(modalDecorationElement, modalWrapperElement);
    
    return element;
}