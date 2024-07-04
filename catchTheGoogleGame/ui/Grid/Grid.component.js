import { getGooglePosition, getGridSize } from "../../data/state-manager.js";
import { GoogleComponent } from "../Google/Google.component.js";
import { CellComponent } from "../Cell/Cell.component.js";

export function GridComponent() {
    const element = document.createElement('table');
    element.classList.add('table');
    const tableBodyElement = document.createElement('tbody');

    const gridSize = getGridSize();
    const googlePosition = getGooglePosition();
    const googleElement = GoogleComponent();
    
    for (let y = 0; y < gridSize.height; y++) {
        const rowElement = document.createElement('tr');
        for (let x = 0; x < gridSize.width; x++) {
            const cellElement = CellComponent();
            if (googlePosition.x === x && googlePosition.y === y) {
                cellElement.append(googleElement);
            }
            rowElement.append(cellElement);
        }
        tableBodyElement.append(rowElement);
    }
    element.append(tableBodyElement);
    return element;
}