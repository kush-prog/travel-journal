import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { STORIES } from '../../data/story-data';

@Component({
  imports: [RouterLink],
  selector: 'app-story-list',
  styleUrl: './story-list.component.css',
  templateUrl: './story-list.component.html',
})
export class StoryList {
  protected readonly storyCount = STORIES.length;
  protected readonly searchQuery = signal('');
  protected readonly selectedCategory = signal('All');
  protected readonly categories = ['All', ...new Set(STORIES.map((story) => story.category))];

  protected readonly filteredStories = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const category = this.selectedCategory();

    return STORIES.filter((story) => {
      const matchesCategory = category === 'All' || story.category === category;
      const searchableText = `${story.title} ${story.category} ${story.excerpt}`.toLowerCase();
      return matchesCategory && searchableText.includes(query);
    });
  });

  protected updateSearch(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      this.searchQuery.set(event.target.value);
    }
  }

  protected updateCategory(event: Event): void {
    if (event.target instanceof HTMLSelectElement) {
      this.selectedCategory.set(event.target.value);
    }
  }
}
