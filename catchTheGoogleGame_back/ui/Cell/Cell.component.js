import { DOMAIN_EVENTS } from "../../data/costants.js";
import {
  getGooglePosition,
  getPlayerPositions,
  removeObserver,
  setObserver,
} from "../../data/state-manager.proxy.js";
import { GoogleComponent } from "../Google/Google.component.js";
import { Player1_Component } from "../Player_1/Player_1.component.js";
import { Player2_Component } from "../Player_2/Player_2.component.js";

export function CellComponent(x, y) {
  const cellElement = document.createElement("td");
  cellElement.classList.add("cell");

  const localState = {
    x,
    y
  };

  const handler = (e) => {
    if (e.type === DOMAIN_EVENTS.GOOGLE_JUMPED) {
      const newGooglePosition = e.payload.newPosition;
      const oldGooglePosition = e.payload.oldPosition;
      // должны рендериться, если новые координаты равны мне или старые координаты равны мне
      if (newGooglePosition.x === localState.x && newGooglePosition.y === localState.y) {
          render(cellElement, localState)
      };
      if (oldGooglePosition.x === localState.x && oldGooglePosition.y === localState.y) {
          render(cellElement, localState)
      };
    };

    if (e.type === DOMAIN_EVENTS.PLAYER1_MOVED) {
      const newPlayer1Position = e.payload.newPosition;
      const oldPlayer1Position = e.payload.oldPosition;
      // должны рендериться, если новые координаты равны мне или старые координаты равны мне
      if (newPlayer1Position.x === localState.x && newPlayer1Position.y === localState.y) {
          render(cellElement, localState)
      };
      if (oldPlayer1Position.x === localState.x && oldPlayer1Position.y === localState.y) {
          render(cellElement, localState)
      };
    };

    if (e.type === DOMAIN_EVENTS.PLAYER2_MOVED) {
      const newPlayer2Position = e.payload.newPosition;
      const oldPlayer2Position = e.payload.oldPosition;
      // должны рендериться, если новые координаты равны мне или старые координаты равны мне
      if (newPlayer2Position.x === localState.x && newPlayer2Position.y === localState.y) {
          render(cellElement, localState)
      };
      if (oldPlayer2Position.x === localState.x && oldPlayer2Position.y === localState.y) {
          render(cellElement, localState)
      };
    };
  }
  setObserver(handler);

  render(cellElement, localState);

  return {cellElement, cleanup: () => {removeObserver(handler)}};
}

async function render(cellElement, localState) {
  cellElement.innerHTML = "";

  const googlePosition = await getGooglePosition();
  const playerPosition = await getPlayerPositions();
  const googleElement = GoogleComponent();
  const player1Element = Player1_Component();
  const player2Element = Player2_Component();
  const {x,y} = localState;
  console.log("CellComponent rendering:", x, y);

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
