import { Component } from '@angular/core';
import { Hero } from '../hero/hero.component';
import { Itinerary } from '../itinerary/itinerary.component';
import { StoryList } from '../story-list/story-list.component';

@Component({
  imports: [Hero, StoryList, Itinerary],
  selector: 'app-home-page',
  template: `
    <main animate.enter="route-enter">
      <app-hero />
      <app-story-list />
      <app-itinerary />
    </main>
  `,
})
export class HomePage {}
