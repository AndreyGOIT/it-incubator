import { DIRECTIONS } from "../data/costants.js";
import { movePlayer } from "../data/state-manager.proxy.js";

export function bindKeyboardsControlsForMovingPlayer1() {
    // publisher / subject
    window.addEventListener('keyup', 
        // listener / subscriber / observer
        (event) => {
        switch(event.code) {
            case 'ArrowUp':
                movePlayer(1, DIRECTIONS.UP);
                break;
            case 'ArrowDown':
                movePlayer(1, DIRECTIONS.DOWN);
                break;
            case 'ArrowLeft':
                movePlayer(1, DIRECTIONS.LEFT);
                break;
            case 'ArrowRight':
                movePlayer(1, DIRECTIONS.RIGHT);
                break;
            case 'KeyW':
                movePlayer(2, DIRECTIONS.UP);
                break;
            case 'KeyS':
                movePlayer(2, DIRECTIONS.DOWN);
                break;
            case 'KeyA':
                movePlayer(2, DIRECTIONS.LEFT);
                break;
            case 'KeyD':
                movePlayer(2, DIRECTIONS.RIGHT);
                break;
            default:
                break;
        }
    })
}

let recognition;
export function bindVoiceRecognitionControlsForMovingPlayer2() {
    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = function(event) {
        const transcript = event.results[event.resultIndex][0].transcript.trim().toLowerCase();
        console.log(transcript);
        const words = transcript.split(/\s+/);

        words.forEach(word => {
            switch (word) {
                case DIRECTIONS.UP:
                    movePlayer(2, DIRECTIONS.UP);
                    break;
                case DIRECTIONS.DOWN:
                    movePlayer(2, DIRECTIONS.DOWN);
                    break;
                case DIRECTIONS.LEFT:
                    movePlayer(2, DIRECTIONS.LEFT);
                    break;
                case DIRECTIONS.RIGHT:
                    movePlayer(2, DIRECTIONS.RIGHT);
                    break;
                default:
                    break;
            }
        });
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error detected: ' + event.error);
    };

    recognition.onend = function() {
        recognition.start();
    };

    recognition.start();
}

export function stopVoiceRecognition() {
    if (recognition) {
        recognition.stop();
        recognition.onend = null; // Убираем обработчик onend, чтобы предотвратить повторный запуск
    }
}