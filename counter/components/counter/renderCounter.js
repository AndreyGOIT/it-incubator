import { Header } from "./header/Header.js";
import { Count } from "./value/Count.js";
import { Button } from "./button/Button.js";

export function renderCounter() {
    document.body.innerHTML = "";

    document.body.append(Header());
    document.body.append(Count());
    document.body.append(Button());
}