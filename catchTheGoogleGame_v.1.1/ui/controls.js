import { DIRECTIONS } from "../data/costants.js";
import { movePlayer } from "../data/state-manager.js";

export function bindKeyboardsControls() {
    // publisher / subject
    window.addEventListener('keyup', 
        // listener / subscriber / observer
        (event) => {
            // console.log(event.code);
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
            // case 'Space':
            //     pauseGame();
            //     break;
            // case 'KeyP':
            //     playAgain();
            //     break;
            // case 'KeyS':
            //     toggleSound();
            //     break;
            default:
                break;
        }
    })
}