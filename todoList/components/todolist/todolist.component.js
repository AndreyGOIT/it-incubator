import { ButtonsPanel } from "./ButtonsPanel/ButtonsPanel.js";
import { Header } from "./Header/Header.js";
import { TasksList } from "./TasksList/TasksList.js";
import { AddNewTaskDialog } from "./AddNewTaskDialog/AddNewTaskDialog.component.js";

export function Todolist(data) {
    const container = document.createElement('div');
    
    const headerElement = Header(data.title);
    const tasksListElement = TasksList(data.tasks);
    const buttonsElement = ButtonsPanel();
    const dialogElement = AddNewTaskDialog();

    container.append(
        headerElement, 
        tasksListElement, 
        buttonsElement,
        dialogElement
    );

    return container;
};
