import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { STORIES } from '../../data/story-data';

@Component({
  imports: [RouterLink],
  selector: 'app-story-detail',
  styleUrl: './story-detail.component.css',
  templateUrl: './story-detail.component.html',
})
export class StoryDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly routeParams = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });
  protected readonly story = computed(() =>
    STORIES.find((item) => item.slug === this.routeParams().get('slug')),
  );
}
