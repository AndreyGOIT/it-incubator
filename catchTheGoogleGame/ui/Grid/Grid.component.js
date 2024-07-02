export function GridComponent() {
    const element = document.createElement('table');
    for (let y = 0; y < 5; y++) {
        const rowElement = document.createElement('tr');
        for (let x = 0; x < 5; x++) {
            const cellElement = document.createElement('td');
            cellElement.textContent = `${x} - ${y}`;
            cellElement.addEventListener('click', () => {
                console.log(`Clicked on cell ${x}, ${y}`);
            });
            rowElement.append(cellElement);
        }
        element.append(rowElement);
    }
    return element;
}