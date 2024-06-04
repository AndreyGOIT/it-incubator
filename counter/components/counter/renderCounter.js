import { renderHeader } from "./header/renderHeader";
import { renderCount } from "./value/renderCount";
import { renderButton } from "./button/renderButton";

export function renderCounter(data) {
    renderHeader();
    renderCount(datd.clientsCount);
    renderButton();
}