export const GAME_STATUSES = {
    SETTINGS: 'settings',
    IN_PROGRESS: 'in-progress',
    WIN: 'win',
    LOSE: 'lose',
};

export const DIRECTIONS = {
    UP: 'up',
    DOWN: 'down',
    LEFT: 'left',
    RIGHT: 'right',
};

export const GRID_SIZE_OPTIONS = [
    { label: "4x4", value: { width: 4, height: 4 } },
    { label: "5x5", value: { width: 5, height: 5 } },
    { label: "6x6", value: { width: 6, height: 6 } },
    { label: "7x7", value: { width: 7, height: 7 } },
    { label: "8x8", value: { width: 8, height: 8 } },
  ];

export const POINTS_TO_WIN_OPTIONS = [
    { label: "5 points", value: 5 },
    { label: "10 points", value: 10 },
    { label: "20 points", value: 20 },
    { label: "40 points", value: 40 },
    { label: "50 points", value: 50 },
  ];

export const POINTS_TO_LOSE_OPTIONS = [
    { label: "5 points", value: 5 },
    { label: "10 points", value: 10 },
    { label: "15 points", value: 15 },
    { label: "20 points", value: 20 },
    { label: "25 points", value: 25 },
  ];