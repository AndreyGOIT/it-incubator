import { data, closeAddTaskDialod, createTask } from "../../../data/data.js";

export function AddNewTaskDialog() {
    const container = document.createElement('dialog');

    const inputElement = document.createElement('input');
    const saveButtonElement = document.createElement('button');
    saveButtonElement.append('Save');
    saveButtonElement.addEventListener('click', () => {
        if (inputElement.value.trim().length > 0) {
            createTask(inputElement.value);
            closeAddTaskDialod();
        } else {
            inputElement.classList.add('error');
        }
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