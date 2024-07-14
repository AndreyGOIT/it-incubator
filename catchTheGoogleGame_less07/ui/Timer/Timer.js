let timerInterval;
let startTime;

export function startTimer(callback) {
    startTime = Date.now();
    timerInterval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        callback(formatTime(elapsedTime));
    }, 1000);
}

export function stopTimer() {
    clearInterval(timerInterval);
}

export function resetTimer() {
    stopTimer();
    startTime = 0;
}

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
}