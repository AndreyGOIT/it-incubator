import { getPoints, removeObserver, setObserver } from "../../data/state-manager.js";
import { startTimer } from "../Timer/Timer.js";

let timerStarted = false; // Глобальная переменная для отслеживания состояния таймера
let resultTimerElement_4; // Глобальная переменная для хранения ссылки на элемент таймера

export function ResultPanelComponent() {
  // console.log('ResultPanelComponent rendering...');
  const element = document.createElement("div");
  element.classList.add("result-container");

  const points = getPoints();
  const localState = {
    points: points,
  };

  render(element, localState);

  const handler = () => {
    localState.points = getPoints();

    render(element, localState);
  };
  setObserver(handler);

  return {element, cleanup: () => {removeObserver(handler)}};
}

function render(element, localState) {
  element.innerHTML = "";
  // console.log("RESULT PANEL COMPONENT rendering...");
  const points = localState.points;
  // result block 1
  const resultBlockElement_1 = document.createElement("div");
  resultBlockElement_1.classList.add("result-block");

  const resultTitleElement_1 = document.createElement("span");
  resultTitleElement_1.classList.add("result-title");
  resultTitleElement_1.append("Player_1:");
  resultBlockElement_1.append(resultTitleElement_1);

  const resultImgElement_1 = document.createElement("img");
  resultImgElement_1.classList.add("result-img");
  resultImgElement_1.src = "assets/player_1.png";
  resultImgElement_1.alt = "Player 1 icon";
  resultBlockElement_1.append(resultImgElement_1);

  const resultScoreElement_1 = document.createElement("span");
  resultScoreElement_1.classList.add("result");
  resultScoreElement_1.append(points.players[0].value);

  resultBlockElement_1.append(resultScoreElement_1);
  // result block 2
  const resultBlockElement_2 = document.createElement("div");
  resultBlockElement_2.classList.add("result-block");

  const resultTitleElement_2 = document.createElement("span");
  resultTitleElement_2.classList.add("result-title");
  resultTitleElement_2.append("Player_2:");
  resultBlockElement_2.append(resultTitleElement_2);

  const resultImgElement_2 = document.createElement("img");
  resultImgElement_2.classList.add("result-img");
  resultImgElement_2.src = "assets/player_2.png";
  resultImgElement_2.alt = "Player 2 icon";
  resultBlockElement_2.append(resultImgElement_2);

  const resultScoreElement_2 = document.createElement("span");
  resultScoreElement_2.classList.add("result");
  resultScoreElement_2.append(points.players[1].value);

  resultBlockElement_2.append(resultScoreElement_2);
  // result block 3
  const resultBlockElement_3 = document.createElement("div");
  resultBlockElement_3.classList.add("result-block");

  const resultTitleElement_3 = document.createElement("span");
  resultTitleElement_3.classList.add("result-title");
  resultTitleElement_3.append("Google:");
  resultBlockElement_3.append(resultTitleElement_3);

  const resultImgElement_3 = document.createElement("img");
  resultImgElement_3.classList.add("result-img");
  resultImgElement_3.src = "assets/google-color-svgrepo-com 1.png";
  resultImgElement_3.alt = "Google icon";
  resultBlockElement_3.append(resultImgElement_3);

  const resultScoreElement_3 = document.createElement("span");
  resultScoreElement_3.classList.add("result");
  resultScoreElement_3.append(points.google);

  resultBlockElement_3.append(resultScoreElement_3);

  // result block 4
  const resultBlockElement_4 = document.createElement("div");
  resultBlockElement_4.classList.add("result-block");

  const resultTitleElement_4 = document.createElement("span");
  resultTitleElement_4.classList.add("result-title");
  resultTitleElement_4.append("Time:");
  resultBlockElement_4.append(resultTitleElement_4);

  resultTimerElement_4 = document.createElement("span");
  resultTimerElement_4.classList.add("result");
  if (
    points.players[0].value === 0 &&
    points.players[1].value === 0 &&
    points.google === 0
  ) {
    resultTimerElement_4.textContent = "00:00";
    timerStarted = false;
  }
  if (!timerStarted) {
    timerStarted = true;
    startTimer((time) => {
      resultTimerElement_4.textContent = time;
    });
  }

  resultBlockElement_4.append(resultTimerElement_4);

  // append to container
  element.append(
    resultBlockElement_1,
    resultBlockElement_2,
    resultBlockElement_3,
    resultBlockElement_4
  );
}
