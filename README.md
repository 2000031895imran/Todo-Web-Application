TodoMaster - React Todo Application
A modern, feature-rich todo application built with React, TypeScript, and Zustand for state management.
![image](https://github.com/user-attachments/assets/ed7b0639-1873-416c-a46b-2d100ccd13e9)

Features
🔐 User Authentication (Sign up & Login)
✅ Todo Management (Create, Read, Update, Delete)
🔄 Todo Status Management (Pending, In Progress, Completed)
👤 User Profile Management
🎨 Modern UI with Tailwind CSS
🔔 Toast Notifications
💾 Local Storage Persistence
![image](https://github.com/user-attachments/assets/647734be-f398-4ca6-af77-800b538c7cd3)



Tech Stack
React 18
TypeScript
Zustand (State Management)
Tailwind CSS (Styling)
React Hot Toast (Notifications)
Lucide React (Icons)
UUID (Unique IDs)
Getting Started
Clone the repository:
git clone https://github.com/yourusername/todo-master.git
Install dependencies:
cd todo-master
npm install
Start the development server:
npm run dev
Open your browser and navigate to http://localhost:5173
![image](https://github.com/user-attachments/assets/4edfb3b8-4645-4fbd-8e79-66a39621f70f)

Project Structure
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
Features in Detail
Authentication
User registration with name, email, and password
User login with email and password
Secure token-based authentication
Profile management
Todo Management
Create new todos with title and description
Update existing todos
Delete todos
Change todo status (Pending, In Progress, Completed)
Persistent storage using localStorage
User Profile
View profile information
Update name, email, and password
Secure logout functionality
Contributing
Fork the repository
Create your feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add some amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request
