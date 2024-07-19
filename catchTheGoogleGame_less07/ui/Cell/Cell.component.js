import {
  getGooglePosition,
  getPlayerPositions,
  setObserver,
} from "../../data/state-manager.js";
import { GoogleComponent } from "../Google/Google.component.js";
import { Player1_Component } from "../Player_1/Player_1.component.js";
import { Player2_Component } from "../Player_2/Player_2.component.js";

export function CellComponent(x, y) {
  const cellElement = document.createElement("td");
  cellElement.classList.add("cell");
  console.log("CellComponent rendering:", x, y);

  const localState = {
    googlePosition: getGooglePosition(),
    playerPosition: getPlayerPositions(),
    x,
    y
  };

  setObserver(() => {
    localState.googlePosition = getGooglePosition();
    localState.playerPosition = getPlayerPositions();

    render(cellElement, localState);
  });

  render(cellElement, localState);

  return cellElement;
}

function render(cellElement, localState) {
  cellElement.innerHTML = "";

  const googlePosition = localState.googlePosition;
  const playerPosition = localState.playerPosition;
  const googleElement = GoogleComponent();
  const player1Element = Player1_Component();
  const player2Element = Player2_Component();
  const {x,y} = localState;

  if (googlePosition.x === x && googlePosition.y === y) {
    cellElement.append(googleElement);
  }
  if (playerPosition[0].x === x && playerPosition[0].y === y) {
    cellElement.append(player1Element);
  }
  if (playerPosition[1].x === x && playerPosition[1].y === y) {
    cellElement.append(player2Element);
  }
}
