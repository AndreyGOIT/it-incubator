import { data } from "../../../data/data.js";

export function AddNewTaskDialog() {
    const container = document.createElement('dialog');
    const inputElement = document.createElement('input');
    const saveButtonElement = document.createElement('button');
    saveButtonElement.append('Save');
    const cancelButtonElement = document.createElement('button');
    cancelButtonElement.append('Cancel');

    if (data.todolist.isAddTaskDialogOpen) {
        container.open = true;
    }

    container.append(inputElement, saveButtonElement, cancelButtonElement);

    return container;
}