import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: any[] = [];
  originalEvents: any[] = [];
  typeFilter: number = 0;
  startDate: string = '';
  endDate: string = '';

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.getEvents(); // Llama a la función para cargar eventos al inicializar el componente
  }

  getEvents(): void {
    this.eventService.getEvents().subscribe((data) => {
      this.events = data; // Asigna los datos recibidos a la propiedad events
      this.originalEvents = this.events;
    });
  }

  filterEvents(): void {
    let filteredEvents = [...this.originalEvents];
    filteredEvents = filteredEvents.filter((event) => {
      if (event.typeEvent.toString() === this.typeFilter.toString())
        return true;
      return false;
    });
    if (this.startDate && this.endDate) {
      filteredEvents = filteredEvents.filter((event) => {
        const eventD = new Date(event.dateEvent);
        eventD.setHours(0, 0, 0, 0);
        const startD = new Date(this.startDate);
        const endD = new Date(this.endDate);

        return eventD >= startD && eventD <= endD;
      });
    }

    this.events = filteredEvents;
  }

  getEventType(eventType: number): string {
    switch (eventType) {
      case 1:
        return "Venta";
      default:
        return "Compra";
    }
  }
}
