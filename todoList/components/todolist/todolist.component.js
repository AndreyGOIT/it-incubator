export function Todolist(data) {
    const container = document.createElement('div');
    
    const headerElement = Header(data.title);
    const tasksListElement = TasksList(data.tasks);
    const buttonsElement = ButtonsPanel();

    container.append(headerElement, tasksListElement, buttonsElement);

    return container;
};


function Header(title) {
    const container = document.createElement('h1');
    container.append(title);
    return container;
}
function TasksList(tasks) {
    const container = document.createElement('ol');

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const taskElement = Task(task);
        container.append(taskElement);
    }
    return container;
}