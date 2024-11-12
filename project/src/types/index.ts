export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Todo = {
  id: string;
  userId: string;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed';
  createdAt: string;
  updatedAt: string;
};

export type AuthState = {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
};

export type TodoState = {
  todos: Todo[];
  addTodo: (todo: Omit<Todo, 'id' | 'userId' | 'createdAt' | 'updatedAt'>) => void;
  updateTodo: (id: string, todo: Partial<Todo>) => void;
  deleteTodo: (id: string) => void;
  getTodos: () => Todo[];
};