import { Header } from "./header/Header";
import { Count } from "./value/Count";
import { Button } from "./button/Button";

export function renderCounter(data) {
    Header();
    Count(data.clientsCount);
    Button();
}