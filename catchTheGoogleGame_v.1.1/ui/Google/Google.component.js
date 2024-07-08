import { catchGoogle } from '../../data/state-manager.js';

export function GoogleComponent() {
    const element = document.createElement('img');
    element.src = 'assets/google-color-svgrepo-com 1.png';
    element.addEventListener('click', () => {
        catchGoogle();
    });
    return element;
}