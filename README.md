# Express TypeScript Template

A minimal TypeScript Express.js starter template with Nunjucks templating and Pico CSS.

## Getting Started

1. Install dependencies: `npm install`
2. Run in development mode: `npm run dev`
3. Build for production: `npm run build`
4. Start production server: `npm start`

## Project Structure

```
src/
├── handler/
│   └── handlers.ts       # Route handlers
├── middleware/
│   └── loggerMiddleware.ts  # Request logging middleware
├── templates/
│   └── index.njk         # Nunjucks templates
└── index.ts              # Express server with Nunjucks configuration

public/
└── styles/
    └── custom.css        # Custom CSS with glassmorphic styling
```

## Features

- TypeScript for type safety
- Express.js web framework
- Nunjucks templating engine
- Pico CSS for semantic styling
- Custom glassmorphic design
- Hot reload with nodemon
- Request logging middleware
- Environment configuration with dotenv
- dayjs for date/time handling

## Development

The `npm run dev` command uses nodemon to watch for changes in TypeScript files, JSON configs, and Nunjucks templates, automatically restarting the server on changes.

## Build Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Build and start production server

## Configuration

- Server port can be configured in `.env` file (defaults to 3030)
