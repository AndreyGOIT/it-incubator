import { GAME_STATUSES, DIRECTIONS, DOMAIN_EVENTS } from "./costants.js";
const _state = {
  gameStatus: GAME_STATUSES.SETTINGS,
  points: {
    google: 0,
    players: {
      1: { id: 1, value: 0 },
      2: { id: 2, value: 0 },
    },
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
      1: { x: 1, y: 1 },
      2: { x: 2, y: 2 },
    },
  },
};

function notifyObservers(type, payload = {} ) {
  console.log(type);
  const event = { type, payload };

  _observers.forEach((observer) => {
    observer(event);
  });
}

let _observers = [];
export function setObserver(observer) {
  _observers.push(observer);
  console.log('Observers array:', _observers);
}

export function removeObserver(observer) {
  _observers = _observers.filter((item) => item !== observer);
  console.log('observer removed:', _observers);
}

function _getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function _setGooglePosition(newX, newY) {
  _state.positions.google.x = newX;
  _state.positions.google.y = newY;
}

function _moveGoogleToRandomPosition() {
  const newX = _getRandomInt(_state.settings.gridSize.width);
  const newY = _getRandomInt(_state.settings.gridSize.height);

  if (_isCellOccupiedByGoogle({ x: newX, y: newY })) {
    _moveGoogleToRandomPosition();
    return;
  }
  if (_isCellOccupiedByPlayer({ x: newX, y: newY })) {
    _moveGoogleToRandomPosition();
    return;
  }

  _setGooglePosition(newX, newY);
}

let _intervalId;
function _play() {
  _intervalId = setInterval(() => {
    _state.points.google++;
    notifyObservers(DOMAIN_EVENTS.SCORES_CHANGED);

    if (_state.points.google >= _state.settings.pointsToLose) {
      clearInterval(_intervalId);
      _state.gameStatus = GAME_STATUSES.LOSE;
      notifyObservers(DOMAIN_EVENTS.STATUS_CHANGED);
    } else {
      _moveGoogleAndNotifyObservers()
    }
  }, 2000);
};

/**
 * The function `_moveGoogleAndNotifyObservers` moves the Google element to a random position and
 * notifies observers about the change in position.
 */
function _moveGoogleAndNotifyObservers() {
  const payload = {
    oldPosition: getGooglePosition(),
    newPosition: null
  }

  _moveGoogleToRandomPosition();
  payload.newPosition = getGooglePosition();

  notifyObservers(DOMAIN_EVENTS.GOOGLE_JUMPED, payload);
}

function _catchGoogle(playerId) {
  const points = _state.points.players[playerId];
  points.value++;
  notifyObservers(DOMAIN_EVENTS.SCORES_CHANGED);
  if (points.value >= _state.settings.pointsToWin) {
    clearInterval(_intervalId);
    _state.gameStatus = GAME_STATUSES.WIN;
    notifyObservers(DOMAIN_EVENTS.STATUS_CHANGED);
  } else {
    _moveGoogleAndNotifyObservers();
    clearInterval(_intervalId);
    _play();
  }
};

// getter / selector / query / mapper
export function getPoints() {
  return {
    google: _state.points.google,
    players: Object.values(_state.points.players).map((points) => {
      return { ...points };
    }),
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
export function getPlayerPositions() {
  return Object.values(_state.positions.players).map((position) => {
    return { ...position };
  });
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
  notifyObservers(DOMAIN_EVENTS.STATUS_CHANGED);
  // console.log(_state.gameStatus);
  _state.points.google = 0;
  Object.values(_state.points.players).forEach((points) => {
    points.value = 0;
  });
  notifyObservers(DOMAIN_EVENTS.SCORES_CHANGED);
  _play();
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

export function movePlayer(id, direction) {
  const position = _state.positions.players[id];
  const newPosition = { ...position };

  const updater = {
    [DIRECTIONS.UP]: () => {
      newPosition.y -= 1;
    },
    [DIRECTIONS.DOWN]: () => {
      newPosition.y += 1;
    },
    [DIRECTIONS.LEFT]: () => {
      newPosition.x -= 1;
    },
    [DIRECTIONS.RIGHT]: () => {
      newPosition.x += 1;
    },
  };
  updater[direction]();
  // guard / validator / checker
  if (!_isWithinBounds(newPosition)) return;
  if (_isCellOccupiedByPlayer(newPosition)) return;

  if (_isCellOccupiedByGoogle(newPosition)) {
    _catchGoogle(id);
    return;
  }

  const payload = {
    oldPosition: _state.positions.players[id],
    newPosition: newPosition
  }
  _state.positions.players[id] = newPosition;

  notifyObservers(DOMAIN_EVENTS[`PLAYER${id}_MOVED`], payload);
}

function _isWithinBounds(position) {
  const { x, y } = position;
  if (x < 0 || x >= _state.settings.gridSize.width) return false;
  if (y < 0 || y >= _state.settings.gridSize.height) return false;
  return true;
}

function _isCellOccupiedByPlayer({ x, y }) {
  const player1coord = getPlayerPositions()[0];
  const player2coord = getPlayerPositions()[1];
  if (x === player1coord.x && y === player1coord.y) {
    return true;
  }
  if (x === player2coord.x && y === player2coord.y) {
    return true;
  }
  return false;
}

function _isCellOccupiedByGoogle({ x, y }) {
  if (x === getGooglePosition().x && y === getGooglePosition().y) {
    return true;
  }
  return false;
}
