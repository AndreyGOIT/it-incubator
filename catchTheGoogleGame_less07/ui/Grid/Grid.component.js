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

    const localState = {
        childrenCleanups: []
    }
    
    for (let y = 0; y < gridSize.height; y++) {
        const rowElement = document.createElement('tr');
        for (let x = 0; x < gridSize.width; x++) {
            const cellWrapper = CellComponent(x,y);
            
            rowElement.append(cellWrapper.cellElement);
            localState.childrenCleanups.push(cellWrapper.cleanup);
        }
        tableBodyElement.append(rowElement);
    }
    element.append(tableBodyElement);
    return {element, cleanup: () => {
        localState.childrenCleanups.forEach(cf => cf());
        localState.childrenCleanups = []
    }};
}