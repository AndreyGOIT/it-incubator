import { openAddTaskDialod } from "../../../data/data.js";

export function ButtonsPanel() {
    const container = document.createElement('div');
    const addButtonElement = document.createElement('button');
    addButtonElement.append('+ Add');

    addButtonElement.addEventListener('click', openAddTaskDialod);
    
    container.append(addButtonElement);
    return container;
}
