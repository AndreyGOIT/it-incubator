export const data = {
    settings: {
        rowsCount: 3,
        columnsCount: 3,
        pointsToWin: 10,
        maxMisses: 3,
        decreaseDeltaInMs: 100,
        isMuted: true,
    },
    coords: {
        current: {
            x: 0,
            y: 0
        },
        catched: {
            x: 1,
            y: 1
        },
        missed: {
            x: 2,
            y: 2
        }
    },
    score: {
        catchedCount: 0,
        missedCount: 0
    }
}