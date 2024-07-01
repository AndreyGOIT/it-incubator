import { data, subscribe, OFFER_STATUSES } from "../data/game.data.js";

export function Player() {
    const catchAudio = new Audio();
    catchAudio.src = 'assets/catch.mp3';
    
    subscribe(()=> {
        if (data.status === OFFER_STATUSES.catched) {
            catchAudio.currentTime = 0;
            catchAudio.play();
        }
    })
}