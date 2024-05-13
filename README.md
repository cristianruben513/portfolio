# My Personal Website

My personal portfolio website designed to be simplistic and clean while including features like MDX blog posts with view counts, a dark mode toggle, gear list, an about page, and more.

## Tech Stack

backend:

- [Next.js](nextjs.org) / TypeScript
- [MDX](https://mdxjs.com) / [Contentlayer](https://contentlayer.dev/) (Blog Posts)

frontend:

- [Tailwind CSS](https://tailwindcss.com) (Styling)
- [Radix Primitives](https://www.radix-ui.com/primitives) (Headless UI components)
- [Radix UI Colors](https://www.radix-ui.com/colors) (Color system)
- [Framer Motion](https://www.framer.com/motion/) (Animations)

## Getting Started

Make sure you have Node.js v18.17.0+ installed on your machine.

1. **Install Dependencies**: `npm install`
2. **Environment variables**: Copy `.env.example` to a new `.env.local`
3. **Database Setup**: See [Database Setup](#database-setup)
4. **Start Developing**: `npm run dev`, this will automatically create the .contentlayer files and start the Next.js development server.
