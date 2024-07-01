import { data, subscribe } from "../../../data/game.data.js";

export function Scores() {
    subscribe(()=> {
        containerEl.innerHTML = '';
        update(containerEl);

    })
    const containerEl = document.createElement('div');
    update(containerEl);

    return containerEl;
}

function update(containerEl) {
    containerEl.append('Catched: ' + data.score.catchedCount + '; Missed: ' + data.score.missedCount);
}