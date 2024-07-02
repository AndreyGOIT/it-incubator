import {GAME_STATUSES} from './costants.js';
// todo: change points structure
const _state = {
    gameStatus: GAME_STATUSES.IN_PROGRESS,
    points: {
        miss: 2,
        catch: 3,
    },
    settings: {
        pointsToLose: 5,
        pointsToWin: 5,
        gridSize: {
            width: 5,
            height: 4,
        }
    }
}
let _observer = () => {};
export function setObserver(observer) {
    _observer = observer;
}

function _play() {
    let _intervalId = setInterval(() => {
        _state.points.miss++;
    
        if (_state.points.miss >= _state.settings.pointsToLose) {
            clearInterval(_intervalId);
            _state.gameStatus = GAME_STATUSES.LOSE;
        }
        _observer();
    }, 1000);
}

_play();

// getter / selector / query / CQS
export function getPoints() {
    return {
        miss: _state.points.miss,
        catch: _state.points.catch,
    };
};
export function getGameStatus() {
    return _state.gameStatus;
};
// mapper 
export function getGridSize() {
    return _state.settings.gridSize;
}
// setter / command / mutator / side-effect / CQRS
export function playAgain() {
    _state.gameStatus = GAME_STATUSES.IN_PROGRESS;
    _state.points.miss = 0;
    _state.points.catch = 0;
    _play();
    _observer();
}
