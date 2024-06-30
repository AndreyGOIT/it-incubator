import {Game} from './ui/game/game.components.js';

const gameEl = Game();

function renderApp() {
    document.body.innerHTML = '';
    document.body.append(gameEl);
}

renderApp();
