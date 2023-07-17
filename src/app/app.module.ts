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
import {FormsModule} from "@angular/forms";
import { PersonasComponent } from './components/personas/personas.component';
import { HttpClientModule } from '@angular/common/http';
//services
import { PacientesService } from './services/pacientes.service';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { SedesComponent } from './components/sedes/sedes.component';
import { TerapiasComponent } from './components/terapias/terapias.component';
import { TratamientosComponent } from './components/tratamientos/tratamientos.component';
import { MedicamentosComponent } from './components/medicamentos/medicamentos.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { AgendaComponent } from './components/agenda/agenda.component';



@NgModule({
  declarations: [
    AppComponent,
    SedesComponent,
    TerapiasComponent,
    TratamientosComponent,
    MedicamentosComponent,
    ConsultasComponent,
    AgendaComponent
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
    PersonasComponent,
    MatDialogModule
  ],
  providers: [
    PacientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
