// todo: change points structure
const _state = {
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

setInterval(() => {
    _state.points.miss++;

    if (_state.points.miss >= _state.settings.pointsToLose) {
        alert('You lose');
    }
    _observer();
}, 1000);
