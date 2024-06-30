import { data } from "../../../../data/game.data.js";

export function Cell(x, y) {
    const cellEl = document.createElement('td');

    if (x === data.coords.current.x && y === data.coords.current.y) {
        const offerEl = document.createElement('img');
        offerEl.src = 'assets/offer_stand.png';
        cellEl.append(offerEl);
    }
    if (x === data.coords.catched.x && y === data.coords.catched.y) {
        const offerEl = document.createElement('img');
        offerEl.src = 'assets/offer_to_job.png';
        cellEl.append(offerEl);
        
    }
    if (x === data.coords.missed.x && y === data.coords.missed.y) {
        const offerEl = document.createElement('img');
        offerEl.src = 'assets/offer_missed.png';
        offerEl.onload = () => console.log('Image loaded successfully');
        offerEl.onerror = () => console.error('Failed to load image');
        cellEl.append(offerEl);
        
    }

    return cellEl;
    
};
