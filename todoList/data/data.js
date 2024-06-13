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
    addNewTaskDialog: {
      isOpen: false,
      error: null,
    },
  },
};

function setError(error) {
  data.todolist.addNewTaskDialog.error = error;

  notifySubscribers();
}

export function openAddTaskDialod() {
  data.todolist.addNewTaskDialog.isOpen = true;

  notifySubscribers();
}

export function closeAddTaskDialod() {
  data.todolist.addNewTaskDialog.isOpen = false;

  notifySubscribers();
}

let notifySubscribers = null;

export function subscribe(subscriber) {
  notifySubscribers = subscriber;
}

function createUniqueId() {
  return Math.floor(Math.random() * 10000);
}

export function createTask(newTitle) {
  if (newTitle.trim().length > 0) {
    const newTask = {
      id: createUniqueId(),
      title: newTitle,
    };
    data.todolist.tasks.push(newTask);

    notifySubscribers();
    return true;
    } else {
      setError("Title is required");
      notifySubscribers();
      return false;
      }
}

export function deleteTask(id) {
  data.todolist.tasks = data.todolist.tasks.filter((task) => task.id !== id);

  notifySubscribers();
}
