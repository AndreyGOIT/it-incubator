import { GAME_STATUSES } from "./costants.js";
// todo: change points structure
const _state = {
  gameStatus: GAME_STATUSES.SETTINGS,
  points: {
    google: 0,
    players: [
      {id: 1, value: 0},
      {id: 2, value: 0}
      ],
    },
  settings: {
    pointsToLose: 5,
    pointsToWin: 5,
    gridSize: {
      width: 4,
      height: 4,
    },
  },
  positions: {
    google: {
      x: 0,
      y: 0,
    },
    players: {
      "1": {x: 1, y: 1},
      "2": {x: 2, y: 2}
    },
  }
};
let _observer = () => {};
export function setObserver(observer) {
  _observer = observer;
}

function _getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function _moveGoogleToRandomPosition() {
  const newX = _getRandomInt(_state.settings.gridSize.width);
  const newY = _getRandomInt(_state.settings.gridSize.height);

  if (newX === getGooglePosition().x && newY === getGooglePosition().y) {
    _moveGoogleToRandomPosition();
    return;
  }
  _state.positions.google.x = newX;
  _state.positions.google.y = newY;
}
let _intervalId;
function _play() {
  _intervalId = setInterval(() => {
    _state.points.miss++;

    if (_state.points.miss >= _state.settings.pointsToLose) {
      clearInterval(_intervalId);
      _state.gameStatus = GAME_STATUSES.LOSE;
    } else {
      _moveGoogleToRandomPosition();
    }
    _observer();
  }, 1000);
}

function _catchGoogle(playerId) {
  _state.points.catch++;
  if (_state.points.catch >= _state.settings.pointsToWin) {
    clearInterval(_intervalId);
    _state.gameStatus = GAME_STATUSES.WIN;
  } else {
    _moveGoogleToRandomPosition();
    clearInterval(_intervalId);
    _play();
  }
  _observer();
}

// getter / selector / query / mapper
export function getPoints() {
  return {
    miss: _state.points.miss,
    catch: _state.points.catch,
  };
}
export function getGameStatus() {
  return _state.gameStatus;
}
export function getGridSize() {
  return _state.settings.gridSize;
}
export function getGooglePosition() {
  return {
    x: _state.positions.google.x,
    y: _state.positions.google.y,
  };
}
// Геттер для pointsToWin
export function getPointsToWin() {
  return _state.settings.pointsToWin;
}
// Геттер для pointsToLose
export function getPointsToLose() {
  return _state.settings.pointsToLose;
}
/*---------------------------------------------------*/
// setter / command / mutator / side-effect / CQRS
export function playAgain() {
  _state.gameStatus = GAME_STATUSES.IN_PROGRESS;
  _state.points.miss = 0;
  _state.points.catch = 0;
  _play();
  _observer();
}

// setter Функция для установки размера сетки
export function setGridSize(width, height) {
  _state.settings.gridSize.width = width;
  _state.settings.gridSize.height = height;
}
// setter Функция для pointsToWin
export function setPointsToWin(points) {
  _state.settings.pointsToWin = points;
}
// Сеттер для pointsToLose
export function setPointsToLose(points) {
  _state.settings.pointsToLose = points;
}
