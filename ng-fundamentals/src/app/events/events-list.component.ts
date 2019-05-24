import { Component} from '@angular/core';

@Component({
  selector: 'app-events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr/>
      <app-event-thumbnail  (eventClick)="handleEventClicked($event)" [event]="event1"></app-event-thumbnail>
    </div>
  `
})

export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageURL: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };
  handleEventClicked(data) {
    console.log('received:', data);
  }
}
