import {getPoints} from '../data/state-manager.js';

export function AppComponent() {
    const points = getPoints();

    const div = document.createElement('div');
    div.append(`Catched: ${points.catch}; Misses: ${points.miss}`)
    return div;
}