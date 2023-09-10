import { Component } from '@angular/core';
import { EventService } from 'src/app/event.service'
import { CommonService } from 'src/app/common.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent {
  event: any = {};
  succesfulMessage: string | null = null;

  constructor(
    private eventService: EventService,
    private commomServive: CommonService,
    private router: Router)
  { }

  addEvent() {
    this.event.dateEvent = new Date();
    this.eventService.saveEvent(this.event).subscribe(
      (response) => {
        console.log('Evento guardado exitosamente', response);
        this.commomServive.showSuccesfulMessage();
        this.router.navigate(['/event-list'])
        // Puedes redirigir al usuario a una página de éxito o realizar otras acciones después de guardar el evento.
      },
      (error) => {
        console.error('Error al guardar el evento', error);
        this.commomServive.showErrorMessage();
      }
    );
  }
}
