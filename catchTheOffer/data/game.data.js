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
            x: 0,
            y: 0
        },
        missed: {
            x: 0,
            y: 0
        }
    },
    score: {
        catchedCount: 0,
        missedCount: 0
    }
}