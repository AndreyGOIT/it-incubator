export function GridComponent() {
    const element = document.createElement('table');
    for (let i = 0; i < 5; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 5; j++) {
            const cell = document.createElement('td');
            cell.setAttribute('class', 'cell');
            cell.setAttribute('data-id', i * 5 + j);
            row.append(cell);
        }
        element.append(row);
    }
    return element;
}