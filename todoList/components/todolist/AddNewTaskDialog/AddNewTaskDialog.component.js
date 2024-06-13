import { data, closeAddTaskDialod, createTask } from "../../../data/data.js";

export function AddNewTaskDialog() {
    const container = document.createElement('dialog');

    const inputElement = document.createElement('input');
    const saveButtonElement = document.createElement('button');
    saveButtonElement.append('Save');
    saveButtonElement.addEventListener('click', () => {
        createTask(inputElement.value);
        closeAddTaskDialod();
    });

    const cancelButtonElement = document.createElement('button');
    cancelButtonElement.append('Cancel');
    cancelButtonElement.addEventListener('click', () => { closeAddTaskDialod()});

    if (data.todolist.isAddTaskDialogOpen) {
        container.open = true;
    }

    container.append(inputElement, saveButtonElement, cancelButtonElement);

    return container;
}