export function ButtonsPanel() {
    const container = document.createElement('div');
    const addButtonElement = document.createElement('button');
    addButtonElement.append('+ Add');
    container.append(addButtonElement);
    return container;
}
