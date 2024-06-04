import {increaseClientsCount} from "../../../data/data.js";

export function Button() {
    const element = document.createElement("button");
    element.append("+");
    // element.onclick = increment;
    element.addEventListener("click", increment);
    return element;
}

function increment() {
    increaseClientsCount()
}