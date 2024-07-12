import { getPoints } from '../../data/state-manager.js';

export function ResultPanelComponent() {
    const element = document.createElement('div');
    element.classList.add('result-container');
    
    const points = getPoints();
    // result block 1
    const resultBlockElement_1 = document.createElement('div');
    resultBlockElement_1.classList.add('result-block');

    const resultTitleElement_1 = document.createElement('span');
    resultTitleElement_1.classList.add('result-title');
    resultTitleElement_1.append('Player_1:');
    resultBlockElement_1.append(resultTitleElement_1);
    const resultScoreElement_1 = document.createElement('span');
    resultScoreElement_1.classList.add('result');
    resultBlockElement_1.append(points.players[0].value);

    resultBlockElement_1.append(resultScoreElement_1);
    // result block 2
    const resultBlockElement_2 = document.createElement('div');
    resultBlockElement_2.classList.add('result-block');
    
    const resultTitleElement_2 = document.createElement('span');
    resultTitleElement_2.classList.add('result-title');
    resultTitleElement_2.append('Player_2:');
    resultBlockElement_2.append(resultTitleElement_2);
    const resultScoreElement_2 = document.createElement('span');
    resultScoreElement_2.classList.add('result');
    resultBlockElement_2.append(points.players[1].value);

    resultBlockElement_2.append(resultScoreElement_2);
    // result block 3
    const resultBlockElement_3 = document.createElement('div');
    resultBlockElement_3.classList.add('result-block');
    
    const resultTitleElement_3 = document.createElement('span');
    resultTitleElement_3.classList.add('result-title');
    resultTitleElement_3.append('Google:');
    resultBlockElement_3.append(resultTitleElement_3);
    const resultScoreElement_3 = document.createElement('span');
    resultScoreElement_3.classList.add('result');
    resultBlockElement_3.append(points.google);

    resultBlockElement_3.append(resultScoreElement_3);
    // append to container
    element.append(resultBlockElement_1, resultBlockElement_2, resultBlockElement_3);
    
    return element;
}