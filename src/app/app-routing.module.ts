import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEntidadComponent } from './components/crear-entidad/crear-entidad.component';
import { ListarEntidadesComponent } from './components/listar-entidades/listar-entidades.component';

const routes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'crear', component: CrearEntidadComponent },
  { path: 'listar', component: ListarEntidadesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
