import { removeObserver, setObserver } from './data/state-manager.js';
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

// bindVoiceRecognitionControlsForMovingPlayer2();

setObserver(render);

const logger = () => {console.log('STATE CHANGED')};
setObserver(logger);

setTimeout(() => {
    removeObserver(logger);
},10000)