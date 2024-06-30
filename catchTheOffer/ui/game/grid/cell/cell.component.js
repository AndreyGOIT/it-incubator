import { OFFER_STATUSES, data } from "../../../../data/game.data.js";

export function Cell(x, y) {
    const cellEl = document.createElement('td');

    if (x === data.coords.current.x && y === data.coords.current.y) {
        const offerEl = document.createElement('img');
        offerEl.src = 'assets/offer_stand.png';
        cellEl.append(offerEl);
    }
    if (data.status === OFFER_STATUSES.catched && x === data.coords.catched.x && y === data.coords.catched.y) {
        const offerEl = document.createElement('img');
        offerEl.src = 'assets/offer_to_job.png';
        cellEl.append(offerEl);
        
    }
    if (data.status === OFFER_STATUSES.missed && x === data.coords.missed.x && y === data.coords.missed.y) {
        const offerEl = document.createElement('img');
        offerEl.src = 'assets/offer_missed.png';
        cellEl.append(offerEl);
        
    }

    return cellEl;
    
};
