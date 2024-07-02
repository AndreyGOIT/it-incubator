import {ResultPanelComponent} from './ResultPanel/ResultPanel.component.js';

export function AppComponent() {
    const element = document.createElement('div');
    const resultPanelElement = ResultPanelComponent();
    element.append(resultPanelElement);

    return element;
}