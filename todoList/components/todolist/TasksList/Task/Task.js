
export function Task(task) {
    const container = document.createElement('li');
    container.append(task.title);
    return container;
}
