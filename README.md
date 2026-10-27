# The Roam Report

A beginner-friendly Angular travel journal with standalone components, signal-based story filtering, routed story details, and a validated contact form.

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
- `src/app/components/story-detail/` displays an individual story selected by its route slug.
- `src/app/components/contact-page/` provides a reactive, validated contact form.
- `src/app/components/home-page/` arranges the homepage sections for the root route.
- `src/app/components/itinerary/` renders upcoming destinations from a TypeScript array.
- `src/app/components/footer/` contains closing navigation and copyright information.
- `src/app/app.routes.ts` defines the homepage, story, and contact routes.
- `src/app/data/story-data.ts` is the shared source of story content for the cards and detail pages.
- `src/app/models/` defines the story and itinerary data shapes.
- `src/styles.css` contains shared colors, reset styles, and focus styles.

Story content is in `src/app/data/story-data.ts`. Add an object matching the `Story` interface with a unique slug to add a searchable/filterable card and a matching detail route. Upcoming destinations are in the itinerary component; add an object matching the `ItineraryItem` interface to add another stop.

The story search and destination filter use Angular signals and a computed filtered list. Story cards use Angular Router to open `/stories/:slug`; the contact page uses a reactive form with required, email, and minimum-length validation. The app also uses interpolation, property and event binding, and `@for`/`@if` template control flow.

The contact form currently validates and confirms locally; it does not send messages to a server.

Story cards use Angular's `animate.enter` and `animate.leave` APIs when search or filters change. Routed pages use a short enter animation, and CSS transitions add subtle hover feedback. Motion is reduced for visitors whose device has the reduced-motion preference enabled.
