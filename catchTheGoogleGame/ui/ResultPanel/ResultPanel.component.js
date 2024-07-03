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
    resultTitleElement_1.append('Catch:');
    resultBlockElement_1.append(resultTitleElement_1);
    const resultScoreElement_1 = document.createElement('span');
    resultScoreElement_1.classList.add('result');
    resultBlockElement_1.append(points.catch);

    resultBlockElement_1.append(resultScoreElement_1);
    // result block 2
    const resultBlockElement_2 = document.createElement('div');
    resultBlockElement_2.classList.add('result-block');
    
    const resultTitleElement_2 = document.createElement('span');
    resultTitleElement_2.classList.add('result-title');
    resultTitleElement_2.append('Miss:');
    resultBlockElement_2.append(resultTitleElement_2);
    const resultScoreElement_2 = document.createElement('span');
    resultScoreElement_2.classList.add('result');
    resultBlockElement_2.append(points.miss);

    resultBlockElement_2.append(resultScoreElement_2);
    // append to container
    element.append(resultBlockElement_1, resultBlockElement_2);
    
    return element;
}