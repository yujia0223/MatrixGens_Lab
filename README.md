# MatrixLab Research Lab Website

A full-stack website for MatrixLab, a non-profit AI research lab focused on reinforcement learning, LLM agents, and multiagent systems.

## Features

- **Publications**: Browse research papers with citation counts and links to arXiv/conferences
- **Projects**: Explore active research areas including LLM Agent Systems, Multi-Modal AI, Responsible AI, and Applied AI
- **Team**: Meet the researchers and collaborators
- **News**: Stay updated with the latest announcements and achievements
- **Contact**: Get in touch with the lab
- **Dark/Light Theme**: Toggle between light and dark modes

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn/ui component library
- Framer Motion for animations
- Wouter for routing
- TanStack React Query for data fetching

### Backend
- Node.js with Express.js
- TypeScript with ES modules
- RESTful API design
- Drizzle ORM (PostgreSQL ready)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:5000 in your browser

## Project Structure

```
client/               # React frontend
  src/
    components/       # UI components
    pages/            # Route pages
    hooks/            # Custom React hooks
    lib/              # Utilities
server/               # Express backend
  index.ts            # Server entry
  routes.ts           # API routes
  storage.ts          # Data layer
shared/               # Shared types
  schema.ts           # Database schema
```

## API Endpoints

- `GET /api/publications` - List all publications
- `GET /api/publications/:id` - Get single publication
- `GET /api/projects` - List all projects
- `GET /api/projects/:id` - Get single project
- `GET /api/team` - List team members
- `GET /api/team/:id` - Get single team member
- `GET /api/news` - List news items
- `GET /api/news/:id` - Get single news item
- `POST /api/contact` - Submit contact form

## License

MIT
