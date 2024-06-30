import { data } from "../../../data/game.data.js";

export function Grid() {
    const containerEl = document.createElement('table');

    for (let y = 0; y < data.settings.rowsCount; y++) {
        const rowEl = document.createElement('tr');
    for (let x = 0; x < data.settings.columnsCount; x++) {
            const cellEl = document.createElement('td');
            cellEl.setAttribute('data-x', x);
            cellEl.setAttribute('data-y', y);
            cellEl.append(x + ','+ y);
            rowEl.append(cellEl);
        }
        containerEl.append(rowEl);
    }

    return containerEl;
}