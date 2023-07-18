import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonasComponent} from "./components/personas/personas.component";
import {AgendaComponent} from "./components/agenda/agenda.component";
import {TratamientosComponent} from "./components/tratamientos/tratamientos.component";
import {ConsultasComponent} from "./components/consultas/consultas.component";
import {MedicamentosComponent} from "./components/medicamentos/medicamentos.component";
import {TerapiasComponent} from "./components/terapias/terapias.component";
import {SedesComponent} from "./components/sedes/sedes.component";

const routes: Routes = [
  { path: 'personas', component: PersonasComponent},
  //{ path: '', component HomeComponent},
  { path: 'agenda', component: AgendaComponent},
  { path: 'tratamientos', component: TratamientosComponent},
  { path: 'consultas', component: ConsultasComponent},
  { path: 'medicamentos', component: MedicamentosComponent},
  { path: 'terapias', component: TerapiasComponent},
  { path: 'sedes', component: SedesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
