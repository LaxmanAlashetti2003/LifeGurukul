# Life Transformation Expert Website

## Overview

This is a marketing and consultation booking website for a life transformation expert specializing in Graphology, Vastu Shastra, Astrology, and Numerology. The application is built as a single-page application (SPA) with a professional, wellness-focused design that emphasizes trust and transformation. The primary goal is to attract potential clients and enable them to submit consultation requests.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework:** React 18 with TypeScript
- **Routing:** Wouter (lightweight client-side routing)
- **State Management:** TanStack Query (React Query) for server state
- **Styling:** Tailwind CSS with custom design system
- **UI Components:** Radix UI primitives with shadcn/ui component library
- **Build Tool:** Vite

**Design System:**
- Uses a custom Tailwind configuration with CSS variables for theming
- Typography: Inter (body text) and Plus Jakarta Sans (headings) from Google Fonts
- Color scheme: Neutral-based palette with HSL color system for easy theming
- Component library follows the "New York" style variant from shadcn/ui
- Responsive design with mobile-first approach

**Component Structure:**
- Single-page layout with multiple sections (Hero, Services, Testimonials, Contact, etc.)
- Reusable UI components from shadcn/ui library
- Form handling using React Hook Form with Zod validation
- Toast notifications for user feedback

### Backend Architecture

**Technology Stack:**
- **Runtime:** Node.js with TypeScript
- **Framework:** Express.js
- **ORM:** Drizzle ORM
- **Database Driver:** Neon serverless driver for PostgreSQL
- **Validation:** Zod schemas shared between frontend and backend

**API Design:**
- RESTful API endpoints under `/api` prefix
- Centralized error handling and request logging middleware
- JSON request/response format
- CORS and security headers configured through Express middleware

**Key Endpoints:**
- `POST /api/consultation-requests` - Submit consultation request
- `GET /api/consultation-requests` - Retrieve all requests (admin)

**Data Flow:**
- Frontend forms validate using shared Zod schemas
- API validates incoming data before database operations
- Responses include success/error flags with descriptive messages
- In-memory storage implementation provided as fallback/development option

### Data Storage

**Database Schema:**
- **users table:** Authentication placeholder (id, username, password)
- **consultation_requests table:** Stores client inquiry data (id, name, email, phone, message, created_at)
- UUID primary keys generated via PostgreSQL's `gen_random_uuid()`
- Timestamps with automatic `defaultNow()` for record creation

**ORM Strategy:**
- Drizzle ORM chosen for type-safe database operations
- Schema defined in TypeScript for full type inference
- Migrations managed through drizzle-kit
- Database credentials configured via environment variables

**Storage Interface:**
- Abstract `IStorage` interface allows swapping implementations
- `MemStorage` provides in-memory fallback for development
- Designed to be replaced with actual Drizzle database operations in production

### Development & Build Configuration

**Development Environment:**
- Vite dev server with HMR (Hot Module Replacement)
- Express server runs in middleware mode during development
- TypeScript compilation via `tsx` for server code
- Replit-specific plugins for enhanced development experience

**Build Process:**
- Frontend: Vite builds React app to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js`
- ESM module format throughout the application
- Path aliases configured for clean imports (`@/`, `@shared/`, `@assets/`)

**TypeScript Configuration:**
- Strict mode enabled for type safety
- Module resolution set to "bundler" for modern bundler compatibility
- Shared types between client and server via `@shared` directory

## External Dependencies

### Third-Party UI Libraries
- **Radix UI:** Accessible, unstyled component primitives (accordion, dialog, dropdown, etc.)
- **shadcn/ui:** Pre-styled components built on Radix UI
- **Lucide React:** Icon library for consistent iconography
- **cmdk:** Command menu component
- **Embla Carousel:** Carousel/slider functionality

### Form & Validation
- **React Hook Form:** Form state management and validation
- **Zod:** Schema validation for forms and API data
- **@hookform/resolvers:** Integration between React Hook Form and Zod

### Data Fetching & State
- **TanStack Query (React Query):** Server state management, caching, and synchronization
- **Wouter:** Lightweight routing library (alternative to React Router)

### Database & Backend
- **Neon Database:** Serverless PostgreSQL database (via `@neondatabase/serverless`)
- **Drizzle ORM:** Type-safe SQL ORM with PostgreSQL dialect
- **Drizzle Kit:** Migration and schema management tools
- **Drizzle Zod:** Automatic Zod schema generation from Drizzle schemas
- **connect-pg-simple:** PostgreSQL session store for Express (included but not actively used)

### Styling
- **Tailwind CSS:** Utility-first CSS framework
- **class-variance-authority:** Type-safe variant management for components
- **clsx & tailwind-merge:** Conditional class name utilities

### Development Tools
- **Vite:** Fast build tool and dev server
- **esbuild:** JavaScript bundler for production server code
- **tsx:** TypeScript execution for development
- **TypeScript:** Static type checking
- **Replit plugins:** Development environment enhancements (cartographer, dev banner, runtime error modal)

### Fonts
- **Google Fonts:** Inter and Plus Jakarta Sans loaded via CDN in HTML

### Asset Management
- Static images stored in `attached_assets/generated_images/` directory
- Vite configured with `@assets` alias for clean imports
- Images referenced directly in components (hero image, testimonial avatars)