// import { data } from "./data/data.js";
// import { PlayField } from "./components/playField.component.js";
import { RenderUi } from "./components/renderUi.js";


function render() {
    // const playFieldElement = PlayField();
    // console.log(playFieldElement);
    const rootElement = document.getElementById("root");
    // rootElement.innerHTML = "Hello, world!";
    rootElement.append(RenderUi());
}
render();