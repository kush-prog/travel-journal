import { Component } from '@angular/core';
import { ItineraryItem } from '../../models/itinerary.model';

@Component({
  imports: [],
  selector: 'app-itinerary',
  styleUrl: './itinerary.component.css',
  templateUrl: './itinerary.component.html',
})
export class Itinerary {
  protected readonly destinations: ItineraryItem[] = [
    {
      number: '01',
      destination: 'Oaxaca, Mexico',
      dates: 'October 16–24, 2026',
      description: 'Markets, mezcal, and slow mornings in the valley.',
      imageUrl:
        'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=500&q=85',
      altText: 'Colorful colonial buildings in Oaxaca',
    },
    {
      number: '02',
      destination: 'Rome, Italy',
      dates: 'November 5–12, 2026',
      description: 'Long lunches and familiar streets, walked slowly.',
      imageUrl:
        'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=500&q=85',
      altText: 'A view of the Colosseum in Rome',
    },
    {
      number: '03',
      destination: 'Lofoten, Norway',
      dates: 'December 1–9, 2026',
      description: 'Small fishing villages beneath the northern lights.',
      imageUrl:
        'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=85',
      altText: 'A mountain range reflected in a still Norwegian fjord',
    },
    {
      number: '04',
      destination: 'Kagoshima, Japan',
      dates: 'January 8–15, 2027',
      description: 'A little island-hopping at the southern edge of Japan.',
      imageUrl:
        'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=500&q=85',
      altText: 'A traditional Japanese street beneath a distant mountain',
    },
  ];
}
