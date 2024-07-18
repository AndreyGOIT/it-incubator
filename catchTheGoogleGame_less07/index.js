import {AppComponent} from './ui/App.component.js';
import { bindKeyboardsControlsForMovingPlayer1, bindVoiceRecognitionControlsForMovingPlayer2 } from './ui/controls.js';

const rootElement = document.getElementById('root');

    rootElement.innerHTML = '';
    const appComponent = AppComponent();
    rootElement.append(appComponent);

bindKeyboardsControlsForMovingPlayer1();

// bindVoiceRecognitionControlsForMovingPlayer2();

