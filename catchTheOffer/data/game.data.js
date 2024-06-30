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
    status: OFFER_STATUSES.missed,
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
    data.coords.current.x = 3;
    data.coords.current.y = 3;
    subscriber();
}, 2000);
