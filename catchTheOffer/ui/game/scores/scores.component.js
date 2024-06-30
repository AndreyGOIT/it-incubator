import { data } from "../../../data/game.data.js";

export function Scores() {
    const containerEl = document.createElement('div');

    containerEl.append('Catched: ' + data.score.catchedCount + '; Missed: ' + data.score.missedCount);

    return containerEl;
}