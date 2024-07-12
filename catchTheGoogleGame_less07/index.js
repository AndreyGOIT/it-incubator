import { setObserver } from './data/state-manager.js';
import {AppComponent} from './ui/App.component.js';
import { bindKeyboardsControlsForMovingPlayer1, bindVoiceRecognitionControlsForMovingPlayer2 } from './ui/controls.js';

const rootElement = document.getElementById('root');

function render() {
    rootElement.innerHTML = '';
    const appComponent = AppComponent();
    rootElement.append(appComponent);
}

render();

bindKeyboardsControlsForMovingPlayer1();

bindVoiceRecognitionControlsForMovingPlayer2();

setObserver(render);