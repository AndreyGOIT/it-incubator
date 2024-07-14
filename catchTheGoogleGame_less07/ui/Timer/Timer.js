let timerInterval;
let startTime;
export let totalGameTime;

export function convertTimeFormat(totalGameTime) {
    // Разделяем строку на минуты и секунды
    const [minutes, seconds] = totalGameTime.split(':').map(Number);

    // Преобразуем минуты и секунды в требуемый формат
    const formattedMinutes = minutes === 0 ? "" : `${minutes}m `;
    const formattedSeconds = `${seconds}s`;

    // Возвращаем результирующую строку
    return `${formattedMinutes}${formattedSeconds}`;
}

export function startTimer(callback) {
    startTime = Date.now();
    timerInterval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        // console.log(formatTime(elapsedTime));
        totalGameTime = formatTime(elapsedTime);
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