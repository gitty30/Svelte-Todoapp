import { writable } from "svelte/store";

const isBrowser = typeof window !== "undefined";

const initialTodos =
  isBrowser && localStorage
    ? JSON.parse(localStorage.getItem("todos")) || []
    : [];

export const todos = writable(initialTodos);

export const addTodo = (text) => {
  todos.update((curr) => {
    const newtodos = [
      ...curr,
      {
        text: text,
        completed: false,
        id: Date.now(),
      },
    ];
    addtolocalStorage(newtodos);
    return newtodos;
  });
};

export const deleteTodo = (id) => {
  todos.update((todos) => {
    todos = todos.filter((todo) => todo.id != id);
    addtolocalStorage(todos);
    return todos;
  });
};

export const toggleTodoCompleted = (id) => {
  todos.update((todos) => {
    // let index = -1;

    const index = todos.findIndex((todo) => todo.id === id);

    if (index !== -1) {
      todos[index].completed = !todos[index].completed;
    }
    console.log(todos[index].completed);
    addtolocalStorage(todos);
    return todos;
  });
};

const addtolocalStorage = (data) => {
  if (isBrowser && localStorage) {
    localStorage.setItem("todos", JSON.stringify(data));
  }
};
