import { Settings } from "./settings/settings.component.js";
import { Scores } from "./scores/scores.component.js";
import { Grid } from "./grid/grid.component.js";

export function Game() {
    const containerEl = document.createElement('div');

    const settingsEl = Settings();
    containerEl.append(settingsEl);

    const scoresEl = Scores();
    containerEl.append(scoresEl);

    const gridEl = Grid();
    containerEl.append(gridEl);

    return containerEl;
}