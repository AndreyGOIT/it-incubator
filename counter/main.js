import { renderCounter } from "./components/counter/renderCounter.js";
import { setCalback } from "./data/data.js";

renderCounter();

setCalback(renderCounter);
