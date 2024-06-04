import { Header } from "./header/Header.js";
import { Count } from "./value/Count.js";
import { Button } from "./button/Button.js";

export function renderCounter(data) {
    document.body.innerHTML = "";

    document.body.append(Header());
    document.body.append(Count(data.clientsCount));
    document.body.append(Button());
}