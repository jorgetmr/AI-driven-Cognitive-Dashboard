# AI Rules & Tech Stack: Use it or Lose it

## Project Goal
Build a modern, clean, gamified dashboard ("Use it or Lose it") to train cognitive abilities. The aesthetic should be calm, minimalistic, and slightly futuristic.

## Tech Stack

- **Framework:** React with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (Mobile-first, responsive)
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Icons:** lucide-react
- **Routing:** react-router-dom
- **Animations:** framer-motion (for smooth, futuristic transitions)
- **Data Visualization:** Recharts (for cognitive rings, mood graphs, and progress tracking)
- **State Management:** React Context or Local State (keep it simple)
- **Date Handling:** date-fns

## Development Rules

1.  **Directory Structure:**
    - `src/pages/`: Main views (Dashboard, Puzzles, Learn, Reflection, Profile).
    - `src/components/`: Reusable UI elements.
    - `src/components/layout/`: Layout components (Sidebar, Header).
    - `src/lib/`: Utilities and helper functions.

2.  **UI & UX Guidelines:**
    - **Aesthetic:** Soft colors, rounded corners, "glassmorphism" effects where appropriate.
    - **Feedback:** Use Toasts for user actions (e.g., "Puzzle Solved").
    - **Responsiveness:** Sidebar should collapse on mobile.

3.  **Library Usage:**
    - Use **Recharts** for all analytics (Reflection Tracker, Cognitive Rings).
    - Use **Framer Motion** for page transitions and interactive elements (e.g., breathing exercises).
    - Use **Lucide React** for navigation icons.

4.  **Code Quality:**
    - Strictly typed TypeScript.
    - Components under 150 lines.
    - Create new files for every new component.