import {ResultPanelComponent} from './ResultPanel/ResultPanel.component.js';
import {LoseComponent} from './Lose/Lose.component.js';
import {GridComponent} from './Grid/Grid.component.js';
import { getGameStatus } from '../data/state-manager.js';
import { GAME_STATUSES } from '../data/costants.js';
import { WinComponent } from './Win/Win.component.js';
import { SettingsComponent } from './Settings/Settings.component.js';
import { stopVoiceRecognition } from './controls.js';

export function AppComponent() {
    const element = document.createElement('div');
    element.classList.add('container');

    const status = getGameStatus();
    const transitions = {
        [GAME_STATUSES.WIN]: () => {
            const winElement = WinComponent();
            element.append(winElement);
            stopVoiceRecognition();
        },
        [GAME_STATUSES.LOSE]: () => {
            const loseElement = LoseComponent();
            element.append(loseElement);
            stopVoiceRecognition();
        },
        [GAME_STATUSES.SETTINGS]: () => {
            const settingsElement = SettingsComponent();
            element.append(settingsElement);
        },
        [GAME_STATUSES.IN_PROGRESS]: () => {
            const resultPanelElement = ResultPanelComponent();
            element.append(resultPanelElement);
            const gridElement = GridComponent();
            element.append(gridElement);
        },
    }
    transitions[status]();

    return element;
}