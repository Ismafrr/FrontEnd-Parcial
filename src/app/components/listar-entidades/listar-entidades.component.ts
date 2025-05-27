import { Component, OnInit } from '@angular/core';
import { EntidadService } from '../../services/entidad.service';
import { Entidad } from '../../models/entidad.model';

@Component({
  selector: 'app-listar-entidades',
  templateUrl: './listar-entidades.component.html',
  styleUrls: ['./listar-entidades.component.css']
})
export class ListarEntidadesComponent implements OnInit {
  entidades: Entidad[] = [];

  constructor(private entidadService: EntidadService) {}

  ngOnInit(): void {
    this.entidadService.getAll().subscribe(data => {
      this.entidades = data;
    });
  }
}