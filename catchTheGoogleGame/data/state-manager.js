import {GAME_STATUSES} from './costants.js';
// todo: change points structure
const _state = {
    gameStatus: GAME_STATUSES.IN_PROGRESS,
    points: {
        miss: 0,
        catch: 0,
    },
    settings: {
        pointsToLose: 5,
        pointsToWin: 5,
        gridSize: {
            width: 4,
            height: 4,
        }
    },
    googlePosition: {
        x: 0,
        y: 0,
    }
}
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

    if (newX === _state.googlePosition.x && newY === _state.googlePosition.y) {
        _moveGoogleToRandomPosition();
        return;
    }
    _state.googlePosition.x = newX;
    _state.googlePosition.y = newY;
}

function _play() {
    let _intervalId = setInterval(() => {
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

_play();

// getter / selector / query / mapper
export function getPoints() {
    return {
        miss: _state.points.miss,
        catch: _state.points.catch,
    };
};
export function getGameStatus() {
    return _state.gameStatus;
};
export function getGridSize() {
    return _state.settings.gridSize;
}
export function getGooglePosition() {
    return {
        x: _state.googlePosition.x,
        y: _state.googlePosition.y,
    };
}
// setter / command / mutator / side-effect / CQRS
export function playAgain() {
    _state.gameStatus = GAME_STATUSES.IN_PROGRESS;
    _state.points.miss = 0;
    _state.points.catch = 0;
    _play();
    _observer();
}

export function catchGoogle() {
    _state.points.catch++;
    if (_state.points.catch >= _state.settings.pointsToWin) {
        _state.gameStatus = GAME_STATUSES.WIN;
    }
    _observer();
}