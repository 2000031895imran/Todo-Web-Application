import React, { useState, useEffect } from 'react';
import { useTodoStore } from '../store/todos';
import { Plus, Edit2, Trash2, CheckCircle } from 'lucide-react';
import { toast } from 'react-hot-toast';
import type { Todo } from '../types';

export function TodoList() {
  const { todos, addTodo, updateTodo, deleteTodo, getTodos } = useTodoStore();
  const [newTodo, setNewTodo] = useState({ title: '', description: '' });
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTodo) {
      updateTodo(editingTodo.id, {
        title: newTodo.title,
        description: newTodo.description,
      });
      toast.success('Todo updated successfully!');
    } else {
      addTodo({
        title: newTodo.title,
        description: newTodo.description,
        status: 'pending',
      });
      toast.success('Todo added successfully!');
    }
    setNewTodo({ title: '', description: '' });
    setEditingTodo(null);
  };

  const handleEdit = (todo: Todo) => {
    setEditingTodo(todo);
    setNewTodo({
      title: todo.title,
      description: todo.description,
    });
  };

  const handleDelete = (id: string) => {
    deleteTodo(id);
    toast.success('Todo deleted successfully!');
  };

  const handleStatusChange = (todo: Todo, status: Todo['status']) => {
    updateTodo(todo.id, { status });
    toast.success('Status updated successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Todo title"
            value={newTodo.title}
            onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <textarea
            placeholder="Description"
            value={newTodo.description}
            onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={3}
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Plus className="w-5 h-5 mr-2" />
            {editingTodo ? 'Update Todo' : 'Add Todo'}
          </button>
        </div>
      </form>

      <div className="space-y-4">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="p-4 bg-white rounded-lg shadow-md border border-gray-200"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">{todo.title}</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(todo)}
                  className="p-1 text-blue-600 hover:text-blue-800"
                >
                  <Edit2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="p-1 text-red-600 hover:text-red-800"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{todo.description}</p>
            <div className="flex items-center justify-between">
              <select
                value={todo.status}
                onChange={(e) => handleStatusChange(todo, e.target.value as Todo['status'])}
                className="px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="pending">Pending</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
              {todo.status === 'completed' && (
                <CheckCircle className="w-5 h-5 text-green-600" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}