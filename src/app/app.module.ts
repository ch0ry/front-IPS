import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule} from "@angular/material/menu";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EditDialogPersona, PersonasComponent} from './components/personas/personas.component';
import { HttpClientModule } from '@angular/common/http';
//services
import { PacientesService } from './services/pacientes.service';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { SedesComponent } from './components/sedes/sedes.component';
import { TerapiasComponent } from './components/terapias/terapias.component';
import { TratamientosComponent } from './components/tratamientos/tratamientos.component';
import { MedicamentosComponent } from './components/medicamentos/medicamentos.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import {AgendaComponent, EditDialogAgenda, EditDialogShowConsulta} from './components/agenda/agenda.component';
import {NgIf} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatOptionModule } from "@angular/material/core";
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    SedesComponent,
    TerapiasComponent,
    TratamientosComponent,
    MedicamentosComponent,
    ConsultasComponent,
    AgendaComponent,
    EditDialogPersona,
    EditDialogAgenda,
    EditDialogShowConsulta

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatDatepickerModule
  ],
  providers: [
    PacientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
