import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import type { TodoState, Todo } from '../types';
import { useAuthStore } from './auth';

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],

  addTodo: (todo) => {
    const user = useAuthStore.getState().user;
    if (!user) return;

    const newTodo: Todo = {
      ...todo,
      id: uuidv4(),
      userId: user.id,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    set((state) => {
      const todos = [...state.todos, newTodo];
      localStorage.setItem(`todos_${user.id}`, JSON.stringify(todos));
      return { todos };
    });
  },

  updateTodo: (id, todoUpdate) => {
    const user = useAuthStore.getState().user;
    if (!user) return;

    set((state) => {
      const todos = state.todos.map((todo) =>
        todo.id === id
          ? { ...todo, ...todoUpdate, updatedAt: new Date().toISOString() }
          : todo
      );
      localStorage.setItem(`todos_${user.id}`, JSON.stringify(todos));
      return { todos };
    });
  },

  deleteTodo: (id) => {
    const user = useAuthStore.getState().user;
    if (!user) return;

    set((state) => {
      const todos = state.todos.filter((todo) => todo.id !== id);
      localStorage.setItem(`todos_${user.id}`, JSON.stringify(todos));
      return { todos };
    });
  },

  getTodos: () => {
    const user = useAuthStore.getState().user;
    if (!user) return [];

    const todos = JSON.parse(localStorage.getItem(`todos_${user.id}`) || '[]');
    set({ todos });
    return todos;
  },
}));