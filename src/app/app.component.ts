import { Component } from '@angular/core';
import { PacientesService } from './services/pacientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  events: string[] = [];
  opened: boolean;
  title = 'Landing';

}
