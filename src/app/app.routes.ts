import { Routes } from '@angular/router';
import { ContactPage } from './components/contact-page/contact-page.component';
import { HomePage } from './components/home-page/home-page.component';
import { StoryDetail } from './components/story-detail/story-detail.component';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'The Roam Report — A journal for the curious' },
  { path: 'stories/:slug', component: StoryDetail, title: 'Travel story — The Roam Report' },
  { path: 'contact', component: ContactPage, title: 'Contact — The Roam Report' },
  { path: '**', redirectTo: '' },
];
