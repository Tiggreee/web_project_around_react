# Around the US - React Project Instructions

## Project Overview
This is a React migration of the "Around the US" social photo sharing application, built with Vite as the development environment. The app allows users to view photo cards, edit their profile, and manage a collection of place images.

## Architecture & Structure

### Core Components Organization
- **`src/components/`**: All reusable React components
- **`src/components/Header/`**: Logo and navigation
- **`src/components/Main/`**: Primary content area with nested components
- **`src/components/Footer/`**: Copyright information
- **`src/components/Main/components/`**: Main-specific components (Popup, Card, forms)

### Component Patterns

#### Popup System
The project uses a centralized popup management system in `Main.jsx`:
- **`Popup.jsx`**: Reusable container that accepts `title` and `children` props
- **No title = Image popup**: When `title` is null/undefined, renders as image viewer with special styling
- **Form popups**: `NewCard`, `EditProfile`, `EditAvatar` components passed as children
- **State management**: Single `popup` state with object pattern `{title, children}`

#### Card Component
- Renders from mock data array with `_id`, `name`, `link`, `isLiked` properties
- Supports click handlers for image viewing (`onCardClick` prop)
- Like button shows active state based on `isLiked` boolean

## Development Environment

### Key Configuration
- **Port**: Development server runs on port 3000 (configured in `vite.config.js`)
- **Auto-open**: `npm run dev` automatically opens browser with `--open` flag
- **ESLint**: Configured to disable `react/prop-types` warnings for faster development

### Build Commands
```bash
npm run dev      # Start development server on port 3000
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint checks
```

## Styling & Assets

### CSS Architecture
- **Single stylesheet**: All styles in `src/index.css` using BEM methodology
- **Responsive design**: Mobile-first approach with breakpoints at 767px and 1279px
- **Custom properties**: Uses CSS custom properties and Inter font from Google Fonts
- **Component styles**: Header, profile, cards, footer, and popup styles included

### Asset Management
- **Images**: Stored in `src/images/` directory
- **Logo/Avatar**: Imported as ES6 modules in components
- **Card images**: External URLs from Practicum content CDN

## State Management Patterns

### Popup State Pattern
```javascript
const popupObject = { 
  title: "Popup Title" || null, 
  children: <ComponentToRender /> 
};
```

### Event Handlers
- **`handleOpenPopup(popup)`**: Sets popup state with popup object
- **`handleClosePopup()`**: Clears popup state to null
- **`handleCardClick(card)`**: Creates image popup for card viewing

## Mock Data Structure
Cards array contains objects with:
```javascript
{
  _id: string,        // Unique identifier
  name: string,       // Card title
  link: string,       // Image URL
  isLiked: boolean,   // Like status
  owner: string,      // Owner ID
  createdAt: string   // Creation timestamp
}
```

## Component Development Guidelines

1. **Function components**: Use function declarations with default exports
2. **Props destructuring**: Extract props at component start for clarity
3. **Event handlers**: Pass functions as props, implement in parent when managing state
4. **Conditional rendering**: Use `&&` operator for optional elements
5. **CSS classes**: Apply BEM methodology, use template literals for dynamic classes

## Common Debugging Points

- **Popup not showing**: Check if popup state is set correctly and not null
- **Images not loading**: Verify import paths and external URLs
- **Styles not applying**: Check BEM class naming and CSS selector specificity
- **Click handlers not working**: Ensure functions are passed correctly through props