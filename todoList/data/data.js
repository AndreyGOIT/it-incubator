export const data = {
    todolist: {
        id: createUniqueId(),
        title: 'to Learn',
        tasks: [
            {
                id: createUniqueId(),
                title: 'Learn HTML',
            },
            {
                id: createUniqueId(),
                title: 'Learn CSS',
            }
        ]
    }
}

function createUniqueId() {
    return Math.floor(Math.random() * 10000)
}