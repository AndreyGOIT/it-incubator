import { data } from "../../../data/game.data.js";
import {Cell} from "./cell/cell.component.js";

export function Grid() {
    const containerEl = document.createElement('table');

    for (let y = 0; y < data.settings.rowsCount; y++) {
        const rowEl = document.createElement('tr');
    for (let x = 0; x < data.settings.columnsCount; x++) {
            const cellEl = Cell(x, y);
            
            rowEl.append(cellEl);
        }
        containerEl.append(rowEl);
    }

    return containerEl;
}