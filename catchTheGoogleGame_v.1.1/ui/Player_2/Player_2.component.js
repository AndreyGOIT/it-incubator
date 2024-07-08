
export function Player2_Component() {
    const element = document.createElement('img');
    element.src = 'assets/player_1.png';
    element.addEventListener('click', () => {
        // _catchGoogle();
    });
    return element;
}