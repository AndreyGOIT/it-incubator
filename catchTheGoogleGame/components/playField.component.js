import { RenderUi } from "./components/renderUi.js";

export function PlayField() {
    const container = document.createElement('div');
    container.classList.add("play-field");

    container.appendChild(RenderUi());

    return container;
}