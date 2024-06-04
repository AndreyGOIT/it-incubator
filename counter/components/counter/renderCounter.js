import { Header } from "./header/Header.js";
import { Count } from "./value/Count.js";
import { increaseButton } from "./buttons/increaseButton.js";
import { decreaseButton } from "./buttons/decreaseButton.js";

export function renderCounter() {
    document.body.innerHTML = "";

    document.body.append(Header());
    document.body.append(Count());
    document.body.append(increaseButton());
    document.body.append(decreaseButton());
}