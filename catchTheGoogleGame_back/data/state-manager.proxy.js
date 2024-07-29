import { GAME_STATUSES, DIRECTIONS, DOMAIN_EVENTS } from "./costants.js";
// const _state = {
//   gameStatus: GAME_STATUSES.SETTINGS,
//   points: {
//     google: 0,
//     players: {
//       1: { id: 1, value: 0 },
//       2: { id: 2, value: 0 },
//     },
//   },
//   settings: {
//     pointsToLose: 5,
//     pointsToWin: 5,
//     gridSize: {
//       width: 4,
//       height: 4,
//     },
//   },
//   positions: {
//     google: {
//       x: 0,
//       y: 0,
//     },
//     players: {
//       1: { x: 1, y: 1 },
//       2: { x: 2, y: 2 },
//     },
//   },
// };

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

// function _getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// function _setGooglePosition(newX, newY) {
//   _state.positions.google.x = newX;
//   _state.positions.google.y = newY;
// }

// function _moveGoogleToRandomPosition() {
//   const newX = _getRandomInt(_state.settings.gridSize.width);
//   const newY = _getRandomInt(_state.settings.gridSize.height);

//   if (_isCellOccupiedByGoogle({ x: newX, y: newY })) {
//     _moveGoogleToRandomPosition();
//     return;
//   }
//   if (_isCellOccupiedByPlayer({ x: newX, y: newY })) {
//     _moveGoogleToRandomPosition();
//     return;
//   }

//   _setGooglePosition(newX, newY);
// }

// let _intervalId;
// function _play() {
//   _intervalId = setInterval(() => {
//     _state.points.google++;
//     notifyObservers(DOMAIN_EVENTS.SCORES_CHANGED);

//     if (_state.points.google >= _state.settings.pointsToLose) {
//       clearInterval(_intervalId);
//       _state.gameStatus = GAME_STATUSES.LOSE;
//       notifyObservers(DOMAIN_EVENTS.STATUS_CHANGED);
//     } else {
//       _moveGoogleAndNotifyObservers()
//     }
//   }, 2000);
// };

// /* The function `_moveGoogleAndNotifyObservers` moves the Google element to a random position and notifies observers about the change in position.*/
// function _moveGoogleAndNotifyObservers() {
//   const payload = {
//     oldPosition: getGooglePosition(),
//     newPosition: null
//   }

//   _moveGoogleToRandomPosition();
//   payload.newPosition = getGooglePosition();

//   notifyObservers(DOMAIN_EVENTS.GOOGLE_JUMPED, payload);
// }

// function _catchGoogle(playerId) {
//   const points = _state.points.players[playerId];
//   points.value++;
//   notifyObservers(DOMAIN_EVENTS.SCORES_CHANGED);
//   if (points.value >= _state.settings.pointsToWin) {
//     clearInterval(_intervalId);
//     _state.gameStatus = GAME_STATUSES.WIN;
//     notifyObservers(DOMAIN_EVENTS.STATUS_CHANGED);
//   } else {
//     _moveGoogleAndNotifyObservers();
//     clearInterval(_intervalId);
//     _play();
//   }
// };

// getter / selector / query / mapper
export function getPoints() {
  return {
    
  };
}
export async function getGameStatus() {
  const promise = fetch('http://localhost:3000/getGameStatus')
  const response = await promise
  const result = await response.json()
  return result.value
}
export function getGridSize() {
  return 
}
export function getGooglePosition() {
  return {
    
  };
}
export function getPlayerPositions() {
  return 
}
// Геттер для pointsToWin
export function getPointsToWin() {
  return 
}
// Геттер для pointsToLose
export function getPointsToLose() {
  return 
}
/*---------------------------------------------------*/
// setter / command / mutator / side-effect / CQRS
export function playAgain() {
  
}

// setter Функция для установки размера сетки
export function setGridSize(width, height) {
  
}
// setter Функция для pointsToWin
export function setPointsToWin(points) {
  
}
// Сеттер для pointsToLose
export function setPointsToLose(points) {
  
}

export function movePlayer(id, direction) {
  
}


