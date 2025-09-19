# React + Vite Tic-Tac-Toe Game

## Project Overview
This is a React + Vite application implementing a tic-tac-toe game. The project uses modern React with JSX, Vite for building and development, and ESLint for code quality.

## Development Commands
- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production 
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## Architecture
- **Entry point**: `src/main.jsx` - React app initialization with StrictMode
- **Main component**: `src/App.jsx` - Contains the complete tic-tac-toe game logic
- **UI components**: `src/Square.jsx` - Reusable square component for the game board

## Technology Stack
- React 19.1.1 with hooks (useState)
- Vite 7.1.6 for build tooling and dev server
- ESLint with React-specific rules
- CSS for styling (App.css, index.css)

## Code Patterns
- Uses functional components with hooks
- Props are passed as objects (e.g., `props.fx`, `props.value`)
- State management with useState for game state and turn tracking
- Component file naming follows PascalCase.jsx convention

## Notes
- The main game logic is implemented in App.jsx
- No test framework is currently configured

## Vite Template Information

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
