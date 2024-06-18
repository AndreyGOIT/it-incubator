import { data } from "./data/data.js";
import { renderUi } from "./render/renderUi.js";

export function main() {
    const container = document.querySelector('#root');
    container.append(renderUi(data));

    return container;
}