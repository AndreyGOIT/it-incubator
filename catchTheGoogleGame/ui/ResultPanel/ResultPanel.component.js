import { getPoints } from '../../data/state-manager.js';

export function ResultPanelComponent() {
    const element = document.createElement('div');
    
    const points = getPoints();

    element.append(`Catched: ${points.catch}; Misses: ${points.miss}`)
    return element;
}