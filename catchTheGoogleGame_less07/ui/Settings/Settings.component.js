import { GRID_SIZE_OPTIONS, POINTS_TO_LOSE_OPTIONS, POINTS_TO_WIN_OPTIONS } from "../../data/costants.js";
import {
  playAgain,
  getGridSize,
  setGridSize,
  getPointsToWin,
  setPointsToWin,
  getPointsToLose,
  setPointsToLose,
} from "../../data/state-manager.js";

export function SettingsComponent() {
  const gridSize = getGridSize();
  const pointsToWin = getPointsToWin();
  const pointsToLose = getPointsToLose();

  const element = document.createElement("div");
  element.classList.add("settings-container");
  const topItems = document.createElement("div");
  topItems.classList.add("top-items");
  // ItemsElement_1
  const topItemsElement_1 = document.createElement("div");
  topItemsElement_1.classList.add("line");

  const labelElement_1 = document.createElement("label");
  labelElement_1.textContent = "Grid size: ";

  const selectElement_1 = document.createElement("select");
  selectElement_1.name = "select";
  selectElement_1.id = "01";

  // Создаем опции на основе данных из _state
  GRID_SIZE_OPTIONS.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.textContent = option.label;
    optionElement.value = JSON.stringify(option.value); // Сохраняем данные в JSON-строке для удобства
    selectElement_1.appendChild(optionElement);
  });

  // Устанавливаем начальное выбранное значение в соответствии с текущим состоянием
  const currentGridSize = `${gridSize.width}x${gridSize.height}`;
  selectElement_1.value = JSON.stringify(gridSize);

  // Слушатель изменения значения select
  selectElement_1.addEventListener("change", function () {
    const selectedGridSize = JSON.parse(this.value);
    // Обновляем состояние игры
    setGridSize(selectedGridSize.width, selectedGridSize.height);
  });

  topItemsElement_1.appendChild(labelElement_1);
  topItemsElement_1.appendChild(selectElement_1);
  /*-----------------------------------------------------*/
  // ItemsElement_2
  const topItemsElement_2 = document.createElement("div");
  topItemsElement_2.classList.add("line");

  const labelElement_2 = document.createElement("label");
  labelElement_2.textContent = "Points to win: ";

  const selectElement_2 = document.createElement("select");
  selectElement_2.name = "select";
  selectElement_2.id = "02";

  // Создаем опции на основе данных из _state
  POINTS_TO_WIN_OPTIONS.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.textContent = option.label;
    optionElement.value = option.value; // Сохраняем данные в value
    selectElement_2.appendChild(optionElement);
  });

  // Устанавливаем начальное выбранное значение в соответствии с текущим состоянием
  selectElement_2.value = pointsToWin;

  // Слушатель изменения значения select
  selectElement_2.addEventListener("change", function () {
    const selectedPointsToWin = parseInt(this.value, 10);
    // Обновляем состояние игры
    setPointsToWin(selectedPointsToWin);
  });

  topItemsElement_2.appendChild(labelElement_2);
  topItemsElement_2.appendChild(selectElement_2);
  /*-----------------------------------------------------*/
  // ItemsElement_3
  const topItemsElement_3 = document.createElement("div");
  topItemsElement_3.classList.add("line");

  const labelElement_3 = document.createElement("label");
  labelElement_3.textContent = "Points to lose: ";

  const selectElement_3 = document.createElement("select");
  selectElement_3.name = "select";
  selectElement_3.id = "03";

// Создаем опции на основе данных из _state
  POINTS_TO_LOSE_OPTIONS.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.textContent = option.label;
    optionElement.value = option.value;
    selectElement_3.appendChild(optionElement);
  });

  selectElement_3.value = pointsToLose;

  selectElement_3.addEventListener("change", function () {
    const selectedPointsToLose = parseInt(this.value, 10);
    setPointsToLose(selectedPointsToLose);
    console.log("Selected points to lose:", selectedPointsToLose);
  });

  topItemsElement_3.appendChild(labelElement_3);
  topItemsElement_3.appendChild(selectElement_3);
  /*-----------------------------------------------------*/
  // ItemsElement_4 / toggle slider
  const topItemsElement_4 = document.createElement("div");
  topItemsElement_4.classList.add("switch-button");

  const labelElement_4 = document.createElement("label");
  labelElement_4.append("Sound on");

  const soundToggleBtn = document.createElement("button");
  soundToggleBtn.classList.add("toggle");
  soundToggleBtn.addEventListener("click", () => {
    toggleSound();
  });

  const spanElement = document.createElement("span");
  spanElement.classList.add("icon-slider");
  soundToggleBtn.append(spanElement);

  topItemsElement_4.append(labelElement_4, soundToggleBtn);

  const startGameBtnElement = document.createElement("button");
  startGameBtnElement.textContent = "START GAME";
  startGameBtnElement.classList.add("button", "main-button");
  startGameBtnElement.addEventListener("click", () => {
    playAgain();
  });
//-----------------------------------------------------*/
  topItems.append(
    topItemsElement_1,
    topItemsElement_2,
    topItemsElement_3,
    topItemsElement_4
  );
  element.append(topItems, startGameBtnElement);

  return element;
}

function toggleSound() {
  let toggleButton = document.querySelector(".toggle");
  toggleButton.classList.toggle("on");
}
