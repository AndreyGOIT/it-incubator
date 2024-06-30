export const OFFER_STATUSES = {
    default: 'default',
    missed: 'missed',
    catched: 'catched'
}

export const data = {
    settings: {
        rowsCount: 5,
        columnsCount: 5,
        pointsToWin: 10,
        maxMisses: 3,
        decreaseDeltaInMs: 200,
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

// export function moveOfferToRandomPosition() {
//     data.coords.previous.x = data.coords.current.x;
//     data.coords.previous.y = data.coords.current.y;
//     data.coords.current.x = Math.floor(Math.random() * data.settings.rowsCount);
//     data.coords.current.y = Math.floor(Math.random() * data.settings.columnsCount);
//     data.status = OFFER_STATUSES.default;
//     subscriber();
// }

export function moveOfferToRandomPosition() {
    let newX = null;
    let newY = null;

    do {
        newX = getRandom(data.settings.columnsCount - 1);
        newY = getRandom(data.settings.rowsCount - 1);
    } while (data.coords.current.x === newX && data.coords.current.y === newY);

    data.status = OFFER_STATUSES.missed;
    data.coords.previous = {...data.coords.current};

    data.coords.current.x = newX;
    data.coords.current.y = newY;

    setTimeout(() => {
        data.status = OFFER_STATUSES.default;
        subscriber();
    }, 200);

    subscriber();
}

function getRandom(N) {
    return Math.floor(Math.random() * (N + 1));
}