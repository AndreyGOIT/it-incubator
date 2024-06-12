import {deleteTask} from '../../../../data/data.js'

export function Task(task) {
    const container = document.createElement('li');
    container.append(task.title);

    const deleteButtonElement = DeleteButton(task.id);
    container.append(deleteButtonElement);
    
    return container;
}

function DeleteButton(taskId) {
    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.append('❌');

    deleteButtonElement.addEventListener('click', () => {
        deleteTask(taskId)
    });
    return deleteButtonElement;
}
