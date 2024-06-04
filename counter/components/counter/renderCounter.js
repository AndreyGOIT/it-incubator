import { Header } from "./header/Header";
import { Count } from "./value/Count";
import { Button } from "./button/Button";

export function renderCounter(data) {
    document.body.append( Header());
    document.body.append(Count(data.clientsCount));
    document.body.append(Button());
}