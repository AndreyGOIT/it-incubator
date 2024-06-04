import { data } from "../../../data/data.js";

export function Count() {
    const element = document.createElement("div");
    element.append(data.clientsCount);
    return element;
}