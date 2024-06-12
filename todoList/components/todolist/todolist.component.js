import { ButtonsPanel } from "./ButtonsPanel/ButtonsPanel.js";
import { Header } from "./Header/Header.js";
import { TasksList } from "./TasksList/TasksList.js";

export function Todolist(data) {
    const container = document.createElement('div');
    
    const headerElement = Header(data.title);
    const tasksListElement = TasksList(data.tasks);
    const buttonsElement = ButtonsPanel();

    container.append(headerElement, tasksListElement, buttonsElement);

    return container;
};
