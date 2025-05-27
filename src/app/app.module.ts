import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearEntidadComponent } from './components/crear-entidad/crear-entidad.component';
import { ListarEntidadesComponent } from './components/listar-entidades/listar-entidades.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearEntidadComponent,
    ListarEntidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}