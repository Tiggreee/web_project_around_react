# Around The U.S. - React

Social photo sharing application built with React and Vite, featuring complete authentication system. Users can register, sign in, view photo cards, like posts, edit their profile, change avatar, and manage a complete image collection connected to a real API.

## Development

```bash
npm run dev      # Development server (port 3000)
npm run build    # Production build  
npm run preview  # Build preview
```

## Structure

```
src/
├── components/
│   ├── Header/          # Logo and user profile with auth
│   ├── Main/            # Main content with photo cards
│   │   └── components/  # Card, Popup, forms
│   ├── Login/           # Sign in form component
│   ├── Register/        # User registration form
│   ├── ProtectedRoute/  # Protected routes for auth
│   ├── InfoTooltip/     # Confirmation tooltip
│   └── Footer/          # Copyright footer
├── contexts/            # CurrentUserContext for global state
├── utils/               # API class + auth utilities
├── images/              # Local assets
└── index.css           # BEM styles + auth components
```

## Features

- **Authentication System**: Register, login, logout with JWT tokens
- **Protected Routes**: Controlled access to main application
- **API Integration**: Complete backend connection for data and auth
- **Context API**: Global user state management
- **React Router**: SPA navigation with dynamic routes
- **Dynamic Popups**: Centralized system with real-time validation
- **Form Validation**: Native error messages
- **Responsive Design**: Mobile-first (767px, 1279px breakpoints)  
- **React Hooks**: useState, useEffect, useContext, useRef
- **Full Interactivity**: Like/unlike, delete, edit profile, change avatar, add cards

## Key Components

### Authentication System
- `Login.jsx`: Sign in form with validation
- `Register.jsx`: User registration form  
- `ProtectedRoute.jsx`: HOC for routes requiring authentication
- `InfoTooltip.jsx`: Visual feedback for registration success/failure
- `auth.js`: Authentication API utilities (register, authorize, checkToken)

### Main Application
- `App.jsx`: Main router and authentication state management
- `Main.jsx`: Photo cards rendering with props from App  
- `Header.jsx`: Logo, navigation and user state (login/logout)
- `Card.jsx`: Individual photo component with like/delete (owner only)
- `CurrentUserContext.js`: Global context for user and functions
- Forms: `EditProfile` (controlled), `EditAvatar` (refs), `NewCard`

## Functionality

### API and Backend
- Load cards from server on component mount
- Load user data from API
- Like/unlike with real-time updates
- Delete cards (owner only)
- Profile editing (name and description)
- Avatar change with URL validation
- Add new cards that appear at the beginning

### Validation
- Required fields (2-40 chars names, 2-200 descriptions)
- Valid URLs for images and avatar
- Inactive buttons with error states
- Real-time visual feedback

### UX/UI
- Close popups with ESC or overlay click  
- Auto-close after successful changes
- Hover effects on buttons and interactive elements
- Automatic UI updates after changes (declarative paradigm)

## Technologies

- React 19
- Vite
- Context API
- React Router DOM
- Fetch API
- BEM Methodology

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Tiggreee/web_project_around_react.git
   cd web_project_around_react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Deployment

This project is configured for deployment on GitHub Pages using Vite's build system.

```bash
npm run build    # Creates dist/ folder
npm run preview  # Preview production build locally
```
