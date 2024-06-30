export const OFFER_STATUSES = {
    default: 'default',
    missed: 'missed',
    catched: 'catched'
}

export const data = {
    settings: {
        rowsCount: 3,
        columnsCount: 3,
        pointsToWin: 10,
        maxMisses: 3,
        decreaseDeltaInMs: 100,
        isMuted: true,
    },
    status: OFFER_STATUSES.default,
    coords: {
        current: {
            x: 1,
            y: 0
        },
        previous: {
            x: 1,
            y: 2
        }
    },
    score: {
        catchedCount: 1,
        missedCount: 2
    }
}

let subscriber = function() {};

export function subscribe(newSubscriber) {
    subscriber = newSubscriber;
}

setInterval(() => {
    moveOfferToRandomPosition();
}, 2000);

export function moveOfferToRandomPosition() {
    data.coords.previous.x = data.coords.current.x;
    data.coords.previous.y = data.coords.current.y;
    data.coords.current.x = Math.floor(Math.random() * data.settings.rowsCount);
    data.coords.current.y = Math.floor(Math.random() * data.settings.columnsCount);
    data.status = OFFER_STATUSES.default;
    subscriber();
}