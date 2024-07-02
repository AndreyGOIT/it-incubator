export function GridComponent() {
    const element = document.createElement('div');
    element.append('Here will be grid component');
    // element.setAttribute('class', 'grid');
    // for (let i = 0; i < 16; i++) {
    //     const cell = document.createElement('div');
    //     cell.setAttribute('class', 'cell');
    //     cell.setAttribute('data-id', i);
    //     element.append(cell);
    // }
    return element;
}