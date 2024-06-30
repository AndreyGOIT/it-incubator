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
    status: OFFER_STATUSES.catched,
    coords: {
        current: {
            x: 1,
            y: 0
        },
        catched: {
            x: 1,
            y: 2
        },
        missed: {
            x: 2,
            y: 1
        }
    },
    score: {
        catchedCount: 1,
        missedCount: 2
    }
}