import { catchGoogle, getGooglePosition, getGridSize } from "../../data/state-manager.js";

export function GridComponent() {
    const element = document.createElement('table');
    element.classList.add('table');
    const tableBodyElement = document.createElement('tbody');

    const gridSize = getGridSize();
    const googlePosition = getGooglePosition();

    for (let y = 0; y < gridSize.height; y++) {
        const rowElement = document.createElement('tr');
        for (let x = 0; x < gridSize.width; x++) {
            // todo: move to CellComponent
            // const cellElement = CellComponent(x, y);
            const cellElement = document.createElement('td');
            cellElement.classList.add('cell');
            if (googlePosition.x === x && googlePosition.y === y) {
                // todo: const googleElement = Google();
                const googleElement = document.createElement('img');
                googleElement.src = 'assets/google-color-svgrepo-com 1.png';
                googleElement.addEventListener('click', () => {
                    catchGoogle();
                });
                cellElement.append(googleElement);
            }
            rowElement.append(cellElement);
        }
        tableBodyElement.append(rowElement);
    }
    element.append(tableBodyElement);
    return element;
}