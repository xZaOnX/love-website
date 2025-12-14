# Love Website - Project Context

## Project Overview
This project is an interactive, romantic website designed as a gift to showcase "100 Reasons Why I Love You". It allows users to flip digital cards to reveal individual reasons, tracks progress, and includes special animations and "Easter eggs".

**Key Features:**
*   **Interactive Cards:** 100 flip cards revealing unique reasons.
*   **Gamification:** Progress tracking with persistent state (localStorage).
*   **Animations:** Rich animations using Framer Motion and confetti effects.
*   **Surprises:** A "Final Surprise" upon completion and a "Secret Letter" triggered by a specific click sequence (1-4-3).
*   **Responsiveness:** Designed to work on mobile and desktop.

**Tech Stack:**
*   **Framework:** React 19
*   **Build Tool:** Vite
*   **Animation:** Framer Motion, React Confetti Explosion
*   **Styling:** CSS (Component-scoped files)

## Building and Running

### Prerequisites
*   Node.js and npm installed.

### Key Commands

| Command | Description |
| :--- | :--- |
| `npm install` | Install project dependencies. |
| `npm run dev` | Start the development server (default port: 5173). |
| `npm run build` | Build the project for production (output to `dist/`). |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint checks. |

## Development Conventions

### Directory Structure
*   `src/components/`: Contains React components, each typically with its own CSS file (e.g., `Card.jsx` and `Card.css`).
*   `src/data/`: Contains static data. `reasons.js` holds the array of 100 strings displayed on the cards.
*   `src/App.jsx`: The main entry point handling global state and view routing.
*   `public/`: Static assets like images (e.g., `vite.svg`).

### State Management
*   **Global State:** Managed in `App.jsx` using `useState`.
    *   `currentView`: Controls navigation ('welcome', 'landing', 'game', 'loveMeter').
    *   `revealedCards`: Array of IDs of cards that have been opened.
    *   `clickSequence`: Tracks card clicks to trigger the secret letter (1-4-3).
*   **Persistence:** `localStorage` is used to save and load `loveCardsProgress`.

### Styling & Animation
*   **CSS:** Standard CSS files are imported directly into components.
*   **Framer Motion:** Used extensively for:
    *   Page transitions (fade in/out).
    *   Card flip animations.
    *   Modal popups (`AnimatePresence`).

### Customization Points
*   **Names:** `herName` and `yourName` variables in `src/App.jsx`.
*   **Photos:** `public/` folder is used for images like the final surprise photo.
*   **Content:**
    *   Reasons: `src/data/reasons.js`
    *   Secret Letter: `src/components/SecretLetter.jsx`
*   **Secret Code:** The anniversary date sequence (default 1-4-3) is defined in `src/App.jsx`.
