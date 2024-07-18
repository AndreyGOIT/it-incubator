// import { getGooglePosition, getGridSize, getPlayerPositions } from "../../data/state-manager.js";
import {  getGridSize } from "../../data/state-manager.js";
// import { GoogleComponent } from "../Google/Google.component.js";
import { CellComponent } from "../Cell/Cell.component.js";
// import { Player1_Component } from "../Player_1/Player_1.component.js";
// import { Player2_Component } from "../Player_2/Player_2.component.js";


export function GridComponent() {
    const element = document.createElement('table');
    element.classList.add('table');
    const tableBodyElement = document.createElement('tbody');

    const gridSize = getGridSize();
    // const googlePosition = getGooglePosition();
    // const googleElement = GoogleComponent();
    // const playerPosition = getPlayerPositions();
    // const player1Element = Player1_Component();
    // const player2Element = Player2_Component();
    
    for (let y = 0; y < gridSize.height; y++) {
        const rowElement = document.createElement('tr');
        for (let x = 0; x < gridSize.width; x++) {
            const cellElement = CellComponent(x,y);
            // if (googlePosition.x === x && googlePosition.y === y) {
            //     cellElement.append(googleElement);
            // }
            // if (playerPosition[0].x === x && playerPosition[0].y === y) {
            //     cellElement.append(player1Element);
            // }
            // if (playerPosition[1].x === x && playerPosition[1].y === y) {
            //     cellElement.append(player2Element);
            // }
            rowElement.append(cellElement);
        }
        tableBodyElement.append(rowElement);
    }
    element.append(tableBodyElement);
    return element;
}