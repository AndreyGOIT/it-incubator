// import {getPoints} from './data/state-manager.js';

// const points = getPoints();

// const appElement = document.getElementById('app');

// const div = document.createElement('div');
// div.append(`Catched: ${points.catch}; Misses: ${points.miss}`)
// appElement.append(div);
import {AppComponent} from './ui/App.component.js';

const rootElement = document.getElementById('root');

const appComponent = AppComponent();

rootElement.append(appComponent);