# The Roam Report

A beginner-friendly Angular travel journal homepage built with standalone components, TypeScript data, and plain CSS.

## Run the app

```bash
npm install
npm start
```

Open `http://localhost:4200/`. To create a production build, run `npm run build`.

## Project structure

- `src/app/app.component.*` combines the page components.
- `src/app/components/header/` contains the brand, navigation, and mobile menu.
- `src/app/components/hero/` contains the introduction and featured story.
- `src/app/components/story-list/` renders the latest stories from a TypeScript array.
- `src/app/components/itinerary/` renders upcoming destinations from a TypeScript array.
- `src/app/components/footer/` contains closing navigation and copyright information.
- `src/app/models/` defines the story and itinerary data shapes.
- `src/styles.css` contains shared colors, reset styles, and focus styles.

Story and itinerary content lives in the `stories` and `destinations` arrays in their respective components. Add another object that matches its model interface to show another card or destination.

The page uses Angular interpolation for text, property binding for image sources and accessibility labels, click binding for the mobile menu, and `@for` to render the data arrays.
