# TodoMaster - React Todo Application

A modern, feature-rich todo application built with React, TypeScript, and Zustand for state management.

## Features

- 🔐 User Authentication (Sign up & Login)
- ✅ Todo Management (Create, Read, Update, Delete)
- 🔄 Todo Status Management (Pending, In Progress, Completed)
- 👤 User Profile Management
- 🎨 Modern UI with Tailwind CSS
- 🔔 Toast Notifications
- 💾 Local Storage Persistence

## Tech Stack

- React 18
- TypeScript
- Zustand (State Management)
- Tailwind CSS (Styling)
- React Hot Toast (Notifications)
- Lucide React (Icons)
- UUID (Unique IDs)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/todo-master.git
```

2. Install dependencies:
```bash
cd todo-master
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/          # React components
│   ├── AuthForm.tsx    # Authentication form component
│   ├── Profile.tsx     # User profile component
│   └── TodoList.tsx    # Todo list management component
├── store/              # Zustand store
│   ├── auth.ts         # Authentication store
│   └── todos.ts        # Todos store
├── types/              # TypeScript types
│   └── index.ts        # Type definitions
├── App.tsx             # Main App component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## Features in Detail

### Authentication
- User registration with name, email, and password
- User login with email and password
- Secure token-based authentication
- Profile management

### Todo Management
- Create new todos with title and description
- Update existing todos
- Delete todos
- Change todo status (Pending, In Progress, Completed)
- Persistent storage using localStorage

### User Profile
- View profile information
- Update name, email, and password
- Secure logout functionality

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.