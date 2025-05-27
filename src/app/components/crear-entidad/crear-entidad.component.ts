import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntidadService } from '../../services/entidad.service';

@Component({
  selector: 'app-crear-entidad',
  templateUrl: './crear-entidad.component.html',
  styleUrls: ['./crear-entidad.component.css']
})
export class CrearEntidadComponent {
  entidadForm: FormGroup;
  mensaje = '';

  constructor(private fb: FormBuilder, private entidadService: EntidadService) {
    this.entidadForm = this.fb.group({
      nit: ['', Validators.required],
      nombre: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.entidadForm.valid) {
      this.entidadService.create(this.entidadForm.value).subscribe({
        next: () => {
          this.mensaje = 'Entidad creada';
          this.entidadForm.reset();
        },
        error: () => {
          this.mensaje = 'Error al crear entidad';
        }
      });
    }
  }
}