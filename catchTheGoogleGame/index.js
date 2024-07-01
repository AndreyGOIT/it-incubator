import { setObserver } from './data/state-manager.js';
import {AppComponent} from './ui/App.component.js';

const rootElement = document.getElementById('root');

function render() {
    rootElement.innerHTML = '';
    const appComponent = AppComponent();
    rootElement.append(appComponent);
}

render();
setObserver(render);