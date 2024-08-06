// let timerInterval;
// let startTime;
// export let totalGameTime = "0:0";

// export function convertTimeFormat(totalGameTime) {
//     // Разделяем строку на минуты и секунды
//     const [minutes, seconds] = totalGameTime.split(':').map(Number);

//     // Преобразуем минуты и секунды в требуемый формат
//     // const formattedMinutes = minutes === 0 ? "" : `${minutes}m `;
//     const formattedMinutes = `${minutes}m `;
//     const formattedSeconds = `${seconds}s`;

//     // Возвращаем результирующую строку
//     return `${formattedMinutes}${formattedSeconds}`;
// }

// export function startTimer(callback) {
//     startTime = Date.now();
//     timerInterval = setInterval(() => {
//         const elapsedTime = Date.now() - startTime;
//         totalGameTime = formatTime(elapsedTime);
//         callback(formatTime(elapsedTime));
//     }, 1000);
// }

// export function stopTimer() {
//     clearInterval(timerInterval);
// }

// export function resetTimer() {
//     stopTimer();
//     startTime = 0;
// }

// function formatTime(ms) {
//     const totalSeconds = Math.floor(ms / 1000);
//     const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
//     const seconds = String(totalSeconds % 60).padStart(2, '0');
//     return `${minutes}:${seconds}`;
// }

export async function startTimer() {
    const response = await fetch('http://localhost:3000/start-timer');
    const data = await response.json();
    console.log(data.message); // Timer started
}

export async function stopTimer() {
    const response = await fetch('http://localhost:3000/stop-timer');
    const data = await response.json();
    console.log(data.message); // Timer stopped
}

export async function resetTimer() {
    const response = await fetch('http://localhost:3000/reset-timer');
    const data = await response.json();
    console.log(data.message); // Timer reset
}

export async function getTime() {
    const response = await fetch('http://localhost:3000/get-time');
    const data = await response.json();
    console.log('Current time:', data.time);
    return 
}