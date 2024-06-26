import {
  OFFER_STATUSES,
  data,
  catchOffer,
  subscribe,
} from "../../../../data/game.data.js";

export function Cell(x, y) {
  subscribe(() => {
    update(x, y, cellEl);
  });
  const cellEl = document.createElement("td");

  update(x, y, cellEl);

  return cellEl;
}
function update(x, y, cellEl) {
  cellEl.innerHTML = "";

  if (x === data.coords.current.x && y === data.coords.current.y) {
    const offerEl = document.createElement("img");
    offerEl.src = "assets/offer_stand.png";
    offerEl.addEventListener("click", catchOffer);
    cellEl.append(offerEl);
  }
  if (
    data.status === OFFER_STATUSES.catched &&
    x === data.coords.previous.x &&
    y === data.coords.previous.y
  ) {
    const offerEl = document.createElement("img");
    offerEl.src = "assets/offer_to_job.png";
    cellEl.append(offerEl);
  }
  if (
    data.status === OFFER_STATUSES.missed &&
    x === data.coords.previous.x &&
    y === data.coords.previous.y
  ) {
    const offerEl = document.createElement("img");
    offerEl.src = "assets/offer_missed.png";
    cellEl.append(offerEl);
  }
}
