export function GridComponent() {
    const element = document.createElement('table');
    for (let y = 0; y < 5; y++) {
        const row = document.createElement('tr');
        for (let x = 0; x < 5; x++) {
            const cell = document.createElement('td');
            cell.addEventListener('click', () => {
                console.log(`Clicked on cell ${x}, ${y}`);
            });
            row.append(cell);
        }
        element.append(row);
    }
    return element;
}