import {GAME_STATUSES} from './costants.js';
// todo: change points structure
const _state = {
    gameStatus: GAME_STATUSES.SETTINGS,
    points: {
        miss: 2,
        catch: 3,
    },
    settings: {
        pointsToLose: 5,
        pointsToWin: 5,
        gridSize: {
            width: 4,
            height: 4,
        }
    }
}
let _observer = () => {};
export function setObserver(observer) {
    _observer = observer;
}
// getter / selector / query / CQS
export const getPoints = function () {
    return {
        miss: _state.points.miss,
        catch: _state.points.catch,
    };
};

let intervalId = setInterval(() => {
    _state.points.miss++;

    if (_state.points.miss >= _state.settings.pointsToLose) {
        clearInterval(intervalId);
    }
    _observer();
}, 1000);
