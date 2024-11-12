import React from 'react';
import { useAuthStore } from './store/auth';
import { AuthForm } from './components/AuthForm';
import { TodoList } from './components/TodoList';
import { Profile } from './components/Profile';
import { Toaster } from 'react-hot-toast';
import { CheckSquare } from 'lucide-react';

function App() {
  const { user } = useAuthStore();

  if (!user) {
    return (
      <>
        <AuthForm />
        <Toaster position="top-right" />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <CheckSquare className="w-8 h-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">TodoMaster</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user.name}!</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-8">
            <TodoList />
            <Profile />
          </div>
        </div>
      </main>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;