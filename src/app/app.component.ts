import { Component } from '@angular/core';
import { Footer } from './components/footer/footer.component';
import { Header } from './components/header/header.component';
import { Hero } from './components/hero/hero.component';
import { Itinerary } from './components/itinerary/itinerary.component';
import { StoryList } from './components/story-list/story-list.component';

@Component({
  imports: [Header, Hero, StoryList, Itinerary, Footer],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class App {}
