import { Component } from '@angular/core';
import { Story } from '../../models/story.model';

@Component({
  imports: [],
  selector: 'app-story-list',
  styleUrl: './story-list.component.css',
  templateUrl: './story-list.component.html',
})
export class StoryList {
  protected readonly stories: Story[] = [
    {
      title: 'Finding Stillness in the Hills of San Cristóbal',
      date: 'October 12, 2025',
      imageUrl:
        'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1000&q=85',
      altText: 'Rocky mountain cliffs rising above a dense green forest',
    },
    {
      title: 'Wandering Through the Streets of Rome',
      date: 'October 2, 2025',
      imageUrl:
        'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1000&q=85',
      altText: 'The Colosseum lit beneath a blue evening sky in Rome',
    },
    {
      title: 'Driving Across Monument Valley',
      date: 'September 21, 2025',
      imageUrl:
        'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1000&q=85',
      altText: 'Red sandstone buttes rising from the desert in Monument Valley',
    },
    {
      title: 'Walking the Terraces of Northern Vietnam',
      date: 'September 2, 2025',
      imageUrl:
        'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1000&q=85',
      altText: 'Travelers watching hot air balloons rise over a wide valley',
    },
  ];
}
