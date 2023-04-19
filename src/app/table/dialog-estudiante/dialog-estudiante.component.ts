import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-estudiante',
  templateUrl: './dialog-estudiante.component.html',
  styleUrls: ['./dialog-estudiante.component.scss']
})
export class DialogEstudianteComponent {
  nombreControl = new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]);
  apellidoControl = new FormControl('', [Validators.required,Validators.maxLength(50), Validators.minLength(3)]);
  fechaControl = new FormControl('', [Validators.required]);
  cursoControl = new FormControl('', [Validators.required]);
  paisControl = new FormControl('', [Validators.required]);
  correoControl = new FormControl('', [Validators.required, Validators.email]);
  telefonoControl = new FormControl('', [Validators.required]);

  EstudiantesForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    fecha_registro: this.fechaControl,
    curso_actual: this.cursoControl,
    pais: this.paisControl,
    email: this.correoControl,
    telefono: this.telefonoControl

  });

  constructor(private dialogRef: MatDialogRef<DialogEstudianteComponent>) {}


  guardar(): void {
    if (this.EstudiantesForm.valid) {
      this.dialogRef.close(this.EstudiantesForm.value)
    } else {
      this.EstudiantesForm.markAllAsTouched();
    }
  }
}
