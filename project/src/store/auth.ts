import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import type { AuthState, User } from '../types';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,

  login: async (email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: User) => u.email === email && u.password === password);
    
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const token = btoa(JSON.stringify({ id: user.id, email: user.email }));
    localStorage.setItem('token', token);
    set({ user, token });
  },

  signup: async (name: string, email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.some((u: User) => u.email === email)) {
      throw new Error('Email already exists');
    }

    const newUser = {
      id: uuidv4(),
      name,
      email,
      password,
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    const token = btoa(JSON.stringify({ id: newUser.id, email: newUser.email }));
    localStorage.setItem('token', token);
    set({ user: newUser, token });
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, token: null });
  },

  updateProfile: async (data: Partial<User>) => {
    set((state) => {
      if (!state.user) return state;

      const updatedUser = { ...state.user, ...data };
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const updatedUsers = users.map((u: User) => 
        u.id === state.user?.id ? updatedUser : u
      );

      localStorage.setItem('users', JSON.stringify(updatedUsers));
      return { ...state, user: updatedUser };
    });
  },
}));