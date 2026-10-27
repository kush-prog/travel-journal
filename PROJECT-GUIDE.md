# The Roam Report

## Project and Angular concepts guide

**The Roam Report** is a responsive travel-journal website built with Angular. It introduces the journal, highlights a featured trip, presents travel stories and upcoming destinations, and includes individual story pages and a contact form.

The project is designed to be easy to explain: the page is divided into small components, story content is stored as data, and Angular features are used where they solve a real UI need.

## 1. What the visitor can do

- Browse an editorial-style home page with a blue introduction and featured photograph, a cream-colored story section, an olive itinerary, and a closing footer.
- Search stories by words in the title, destination, or summary, and filter by destination.
- Select a story to open its own page, then return to the list.
- Open the contact page and submit a form after entering a valid name, email, and message.
- Use the responsive navigation on smaller screens and follow links between sections and pages.

The layout uses CSS Grid for the hero and story cards, Flexbox for navigation and itinerary details, and media queries to adapt the layout to smaller screens. Images have descriptive alternative text, links and controls have visible keyboard focus, and the page avoids horizontal overflow at common viewport widths.

The contact form currently demonstrates validation and a confirmation message only. It is not connected to an email service or backend.

## 2. How the Angular app is organized

The root [App component](src/app/app.component.ts) is the shared page frame. It displays the [Header](src/app/components/header/header.component.ts), an Angular `RouterOutlet`, and the [Footer](src/app/components/footer/footer.component.ts). The router places the appropriate page inside that outlet.

The home route displays [HomePage](src/app/components/home-page/home-page.component.ts), which combines three focused sections:

| Component                                                                | Responsibility                                          |
| ------------------------------------------------------------------------ | ------------------------------------------------------- |
| [Header](src/app/components/header/header.component.ts)                  | Brand, page navigation, and the mobile menu toggle      |
| [Hero](src/app/components/hero/hero.component.ts)                        | Travel-journal introduction and featured story          |
| [StoryList](src/app/components/story-list/story-list.component.ts)       | Searchable, filterable collection of travel stories     |
| [Itinerary](src/app/components/itinerary/itinerary.component.ts)         | Upcoming destination list                               |
| [StoryDetail](src/app/components/story-detail/story-detail.component.ts) | Full content for the selected story                     |
| [ContactPage](src/app/components/contact-page/contact-page.component.ts) | Validated contact form                                  |
| [Footer](src/app/components/footer/footer.component.ts)                  | Closing slogan, navigation, social links, and copyright |

The shared story content lives in [story-data.ts](src/app/data/story-data.ts). Each entry follows the [Story interface](src/app/models/story.model.ts), which defines the fields a story needs, including a unique URL slug, title, date, category, summary, paragraphs, image URL, and alternative text. Itinerary entries follow [ItineraryItem](src/app/models/itinerary.model.ts).

Routes are declared in [app.routes.ts](src/app/app.routes.ts): `/` is the homepage, `/stories/:slug` displays a story, and `/contact` displays the contact page. The wildcard route sends unknown paths back to the home page.

## 3. Angular concepts used and where

### Standalone components and component composition

Each UI section is a standalone component with its own template and stylesheet. A component lists the other components or Angular features it uses in its `imports` array. For example, the root imports the header, footer, and `RouterOutlet`; the home page imports the hero, stories, and itinerary.

**How to explain it:** “I split the interface into components based on what each part is responsible for. The root component provides the shared frame, while the router chooses which page appears inside it.”

### TypeScript data and interfaces

`Story` and `ItineraryItem` describe the shape of the page data. Story objects are kept in one shared array so the story cards and the story detail route show consistent information.

**Why it helps:** TypeScript can flag a story that is missing a required field, and a unique `slug` gives each story a readable route.

**How to add a story:** Add an object to `STORIES` in `story-data.ts`, give it a unique slug, and provide every field from `Story`. The story will appear in the list and its `/stories/<slug>` page will use the same object.

### Signals and computed values

In [StoryList](src/app/components/story-list/story-list.component.ts), `searchQuery` and `selectedCategory` are signals that hold the current search text and destination. `filteredStories` is a computed signal: it derives the visible stories from those two values. When either value changes, Angular recalculates the result and updates the template.

**How to explain it:** “The signals hold the filter choices. The computed signal applies both filters to the story data, so I don’t need to keep a second, manually synchronized list.”

### Angular template binding and control flow

The templates use:

- **Interpolation**, such as `{{ story.title }}`, to show values in text.
- **Property binding**, such as `[src]="story.imageUrl"` and `[routerLink]="['/stories', story.slug]"`, to set element properties from component data.
- **Event binding**, such as `(input)="updateSearch($event)"` and `(click)="toggleMenu()"`, to respond to visitor actions.
- **`@for` and `@if`**, to render repeating stories and conditionally display states such as an empty result message or form confirmation.

The `track` expression in the story loop uses the unique slug so Angular can identify each story consistently as the list changes.

### Angular Router and route data

The router enables direct page URLs and in-app navigation without manually swapping page markup. Clicking a story links to `/stories/<slug>`. [StoryDetail](src/app/components/story-detail/story-detail.component.ts) reads the route parameter and finds the matching entry in `STORIES`. A missing slug displays a not-found message. The header and footer use `RouterLink` for internal navigation.

**How to explain it:** “The route parameter identifies which story to show. The detail component reads the slug from the URL and looks up the matching story.”

### Reactive forms and validation

[ContactPage](src/app/components/contact-page/contact-page.component.ts) uses Angular’s `FormGroup` and `FormControl` to represent the form. Validators require a name, a valid email address, and a message of at least 15 characters. On submit, invalid controls are marked as touched so the relevant error messages appear. A valid submission shows a confirmation and resets the form.

**How to explain it:** “The form model and the validation rules live in TypeScript. The template reflects each control’s state, so visitors see what needs correcting.”

### Motion and reduced-motion support

The story-list template uses Angular’s `animate.enter` and `animate.leave` APIs so cards gently enter or leave when filters change. A short page entrance animation is applied to routed content. CSS transitions provide small hover and focus effects on images and links. Shared styles reduce animation and transition durations when the visitor’s device requests reduced motion.

**How to explain it:** “Motion gives feedback when the story list changes, but it stays brief and is reduced for people who prefer less motion.”

## 4. A short project explanation for an interview

> “I built The Roam Report as a responsive Angular travel journal. I organized it into standalone components for the header, hero, story list, itinerary, story detail, contact form, and footer. Story content is typed with an interface and stored as reusable data. On the homepage, signals hold the search and destination filters, and a computed signal derives the stories to display. Angular Router gives each story its own URL, and the contact page uses a reactive form with validation. I used Angular template bindings and control flow to connect the data to the UI, and added lightweight animations with reduced-motion support.”

## 5. Questions you may be asked

1. **Why use components?**  
   They keep related markup, behavior, and styles together and make each part of the page easier to understand.
2. **What is a signal?**  
   A signal stores a value that Angular can track. When it changes, Angular updates the parts of the view that depend on it.
3. **What does `computed()` do?**  
   It derives a value from other signals. Here, it calculates the stories that match the search and destination.
4. **What is the difference between interpolation and property binding?**  
   Interpolation displays a value as text; property binding sets an element property, such as an image source or router link.
5. **How does a story URL select a story?**  
   The route contains a slug. The detail component reads that slug and looks up the matching story data.
6. **What is a reactive form?**  
   It is a form whose controls, values, and validation rules are represented in the component’s TypeScript model.
7. **What happens when the contact form is invalid?**  
   It does not show success. The controls are marked as touched and display the validation messages that apply.
8. **Why use interfaces for the page data?**  
   Interfaces document the expected fields and help TypeScript catch incomplete or incorrectly shaped entries.
9. **How does the layout respond to screen size?**  
   CSS Grid, Flexbox, and media queries rearrange columns and navigation for smaller screens.
10. **Why reduce motion?**  
    Some visitors prefer less movement. Respecting the system preference makes the interface more comfortable and accessible.

## 6. Run and verify

```bash
npm install
npm start
```

Open `http://localhost:4200/`. To check the production build, run `npm run build`. For the full component and template map, see the project [README](README.md).
