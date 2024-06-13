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
    isAddTaskDialogOpen: false,
  },
};

export function openAddTaskDialod() {
  data.todolist.isAddTaskDialogOpen = true;

  notifySubscribers();
};

export function closeAddTaskDialod() {
  data.todolist.isAddTaskDialogOpen = false;

  notifySubscribers();
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

export function deleteTask(id) {
data.todolist.tasks = data.todolist.tasks.filter(task => task.id !== id);

  notifySubscribers();
}
