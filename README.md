# Express TypeScript Template

A minimal TypeScript Express.js starter template with Nunjucks templating.

## Getting Started

1. Install dependencies: `npm install`
2. Run in development mode: `npm run dev`
3. Build for production: `npm run build`
4. Start production server: `npm start`

## Project Structure

```
src/
├── handler/
│   └── handlers.ts    # Route handlers
├── templates/
│   └── index.njk      # Nunjucks templates
└── index.ts           # Express server with Nunjucks configuration
```

## Features

- TypeScript for type safety
- Express.js web framework
- Nunjucks templating engine
- Hot reload with nodemon
- Environment configuration with dotenv
- dayjs for date/time handling

## Configuration

Server port can be configured in `.env` file (defaults to 3030)
# awd-readBurn
