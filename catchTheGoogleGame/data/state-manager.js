// todo: change points structure
const _state = {
    points: {
        miss: 2,
        catch: 3,
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
    _observer();
}, 1000);
