import {
  playAgain,
  getGridSize,
  setGridSize,
  getPointsToWin,
  setPointsToWin,
} from "../../data/state-manager.js";

export function SettingsComponent() {
  const gridSize = getGridSize();
  const pointsToWin = getPointsToWin();

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
  const gridSizeOptions = [
    { label: "4x4", value: { width: 4, height: 4 } },
    { label: "5x5", value: { width: 5, height: 5 } },
    { label: "6x6", value: { width: 6, height: 6 } },
    { label: "7x7", value: { width: 7, height: 7 } },
    { label: "8x8", value: { width: 8, height: 8 } },
  ];

  gridSizeOptions.forEach((option) => {
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
    // Добавьте здесь вызов функции для обновления интерфейса игры с новыми параметрами
    console.log("Selected grid size:", selectedGridSize);
  });

  topItemsElement_1.appendChild(labelElement_1);
  topItemsElement_1.appendChild(selectElement_1);
  // ItemsElement_2
  // const topItemsElement_2 = document.createElement("div");
  // topItemsElement_2.classList.add("line");

  // const labelElement_2 = document.createElement("label");
  // labelElement_2.append("Points to win");

  // const selectElement_2 = document.createElement("select");
  // selectElement_2.name = "select";
  // selectElement_2.id = "02";

  // const optionElement_2_1 = document.createElement("option");
  // optionElement_2_1.append("20pts");
  // const optionElement_2_2 = document.createElement("option");
  // optionElement_2_2.append("40pts");
  // const optionElement_2_3 = document.createElement("option");
  // optionElement_2_3.append("50pts");
  // const optionElement_2_4 = document.createElement("option");
  // optionElement_2_4.append("60pts");
  // const optionElement_2_5 = document.createElement("option");
  // optionElement_2_5.append("80pts");

  // selectElement_2.append(
  //   optionElement_2_1,
  //   optionElement_2_2,
  //   optionElement_2_3,
  //   optionElement_2_4,
  //   optionElement_2_5
  // );
  // topItemsElement_2.append(labelElement_2, selectElement_2);
  /*-----------------------------------------------------*/
  const topItemsElement_2 = document.createElement("div");
  topItemsElement_2.classList.add("line");

  const labelElement_2 = document.createElement("label");
  labelElement_2.textContent = "Points to win: ";

  const selectElement_2 = document.createElement("select");
  selectElement_2.name = "select";
  selectElement_2.id = "02";

  // Создаем опции на основе данных из _state
  const pointsToWinOptions = [
    { label: "5 points", value: 5 },
    { label: "10 points", value: 10 },
    { label: "20 points", value: 20 },
    { label: "40 points", value: 40 },
    { label: "50 points", value: 50 },
  ];

  pointsToWinOptions.forEach((option) => {
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
    console.log("Selected points to win:", selectedPointsToWin);
  });

  topItemsElement_2.appendChild(labelElement_2);
  topItemsElement_2.appendChild(selectElement_2);
  // ItemsElement_3
  const topItemsElement_3 = document.createElement("div");
  topItemsElement_3.classList.add("line");

  const labelElement_3 = document.createElement("label");
  labelElement_3.append("Points to lose");

  const selectElement_3 = document.createElement("select");
  selectElement_3.name = "select";
  selectElement_3.id = "03";

  const optionElement_3_1 = document.createElement("option");
  optionElement_3_1.append("5pts");
  const optionElement_3_2 = document.createElement("option");
  optionElement_3_2.append("10pts");
  const optionElement_3_3 = document.createElement("option");
  optionElement_3_3.append("15pts");
  const optionElement_3_4 = document.createElement("option");
  optionElement_3_4.append("20pts");
  const optionElement_3_5 = document.createElement("option");
  optionElement_3_5.append("25pts");

  selectElement_3.append(
    optionElement_3_1,
    optionElement_3_2,
    optionElement_3_3,
    optionElement_3_4,
    optionElement_3_5
  );
  topItemsElement_3.append(labelElement_3, selectElement_3);
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
