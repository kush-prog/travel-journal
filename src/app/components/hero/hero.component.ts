import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.component.css',
  templateUrl: './hero.component.html',
})
export class Hero {
  protected readonly featuredImage =
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85';
  protected readonly featuredImageAlt = 'An empty road winding through red rock desert hills';
  protected readonly storyImage =
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=85';
  protected readonly storyImageAlt =
    'A small boat crossing a clear turquoise lake beneath alpine peaks';
}
