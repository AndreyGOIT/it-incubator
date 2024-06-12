export const data = {
  todolist: {
    id: createUniqueId(),
    title: "to Learn",
    tasks: [
      {
        id: createUniqueId(),
        title: "Learn HTML",
      },
      {
        id: createUniqueId(),
        title: "Learn CSS",
      },
    ],
  },
};

let notifySubscribers = null;

export function subscribe(subscriber) {
  notifySubscribers = subscriber;
}

function createUniqueId() {
  return Math.floor(Math.random() * 10000);
}

export function createTask(title) {
  const newTask = {
    id: createUniqueId(),
    title: '-----------',
  };
  data.todolist.tasks.push(newTask);

  notifySubscribers();
}
