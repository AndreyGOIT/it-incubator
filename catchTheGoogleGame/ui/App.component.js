import {ResultPanelComponent} from './ResultPanel/ResultPanel.component.js';
import {LoseComponent} from './Lose/Lose.component.js';
import {GridComponent} from './Grid/Grid.component.js';
import { getGameStatus } from '../data/state-manager.js';
import { GAME_STATUSES } from '../data/costants.js';

export function AppComponent() {
    const element = document.createElement('div');

    const status = getGameStatus();
    const transitions = {
        [GAME_STATUSES.WIN]: () => {
            console.warn('Not implemented yet');
            // const winElement = WinComponent();
            // element.append(winElement);
        },
        [GAME_STATUSES.LOSE]: () => {
            const loseElement = LoseComponent();
            element.append(loseElement);
        },
        [GAME_STATUSES.SETTINGS]: () => {
            console.warn('Not implemented yet');
        },
        [GAME_STATUSES.IN_PROGRESS]: () => {
            const resultPanelElement = ResultPanelComponent();
            element.append(resultPanelElement);
            const gridElement = GridComponent();
            element.append(gridElement);
        },
    }
    transitions[status]();
    // if (status === GAME_STATUSES.LOSE) {
    //     const loseElement = LoseComponent();
    //     element.append(loseElement);
    // } else {
    //     const resultPanelElement = ResultPanelComponent();
    //     element.append(resultPanelElement);
    // }
    // if (_state.gameStatus === GAME_STATUSES.WIN) {
    //     const winElement = WinComponent();
    //     element.append(winElement);
    // }
    // if (_state.gameStatus === GAME_STATUSES.SETTINGS) {
    //     const settingsElement = SettingsComponent();
    //     element.append(settingsElement);
    // }
    return element;
}