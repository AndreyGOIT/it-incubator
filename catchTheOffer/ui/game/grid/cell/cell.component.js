export function Cell(x, y) {
    const cellEl = document.createElement('td');
    cellEl.append(x + '-' + y);
    return cellEl;
    
};
