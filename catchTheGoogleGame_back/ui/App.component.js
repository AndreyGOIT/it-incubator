import { ResultPanelComponent } from "./ResultPanel/ResultPanel.component.js";
import { LoseComponent } from "./Lose/Lose.component.js";
import { GridComponent } from "./Grid/Grid.component.js";
import { getGameStatus, setObserver } from "../data/state-manager.proxy.js";
import { DOMAIN_EVENTS, GAME_STATUSES } from "../data/costants.js";
import { WinComponent } from "./Win/Win.component.js";
import { SettingsComponent } from "./Settings/Settings.component.js";
import { stopVoiceRecognition } from "./controls.js";

export function AppComponent() {
  const element = document.createElement("div");
  element.classList.add("container");

  const localState = {
    cleanups: []
  }

  setObserver((e) => {
    if (e.type !== DOMAIN_EVENTS.STATUS_CHANGED) return;

    render(element,localState);
  });

  render(element, localState);

  return element;
}

function render(element, localState) {
  localState.cleanups.forEach(cf => {
    if (typeof cf === 'function') {
      cf();
    } else {
      console.error('Expected function but found:', cf);
    }
  });
  localState.cleanups = [];

  element.innerHTML = "";

  const gameStatus = getGameStatus();
  const transitions = {
    [GAME_STATUSES.WIN]: () => {
      const winWrapper = WinComponent();
      element.append(winWrapper.element);
      stopVoiceRecognition();

      localState.cleanups.push(winWrapper.cleanup);
    },
    [GAME_STATUSES.LOSE]: () => {
      const loseWrapper = LoseComponent();
      element.append(loseWrapper.element);
      stopVoiceRecognition();

      localState.cleanups.push(loseWrapper.cleanup);
    },
    [GAME_STATUSES.SETTINGS]: () => {
      const settingsWrapper = SettingsComponent();
      element.append(settingsWrapper.element);
      stopVoiceRecognition();

      localState.cleanups.push(settingsWrapper.cleanup);
    },
    [GAME_STATUSES.IN_PROGRESS]: () => {
      const resultPanelWrapper = ResultPanelComponent();
      element.append(resultPanelWrapper.element);
      const gridWrapper = GridComponent();
      element.append(gridWrapper.element);

      localState.cleanups.push(resultPanelWrapper.cleanup);
      localState.cleanups.push(gridWrapper.cleanup);
    },
  };
  transitions[gameStatus]();
}
