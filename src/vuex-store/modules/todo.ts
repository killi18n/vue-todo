interface TodoType {
    id: number;
    todo: string;
}

interface TodoStateType {
    todos: TodoType[];
    todoInput: string;
}

const state: TodoStateType = {
    todos: [
        {
            id: 0,
            todo: 'hello world!',
        },
        {
            id: 1,
            todo: 'This is my todo vue',
        },
    ],
    todoInput: 'HELLO',
};

interface AddTodoPayload {
    todo: TodoType;
}

interface ChangeTodoInputPayload {
    value: string;
}

const mutations = {
    addTodo(todoState: TodoStateType, payload: AddTodoPayload) {
        const { todo } = payload;
        todoState.todos.push(todo);
        todoState.todoInput = '';
    },
    changeTodoInput(todoState: TodoStateType, payload: ChangeTodoInputPayload) {
        const { value } = payload;
        todoState.todoInput = value;
    },
    removeTodo(todoState: TodoStateType, payload: number) {
        const todoId = payload;
        todoState.todos = todoState.todos.filter((todo: TodoType) => {
            return todo.id !== todoId;
        });
    },
};

const actions = {};

export default {
    state,
    mutations,
    actions,
};
