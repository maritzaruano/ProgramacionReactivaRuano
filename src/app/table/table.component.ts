import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table'
import { DialogEstudianteComponent } from './dialog-estudiante/dialog-estudiante.component';

export interface Estudiante {
  id: number;
  nombre: string;
  apellido: string;
  fecha_registro: Date;
  curso_actual: string;
  pais: string;
  email: string;
  telefono: number;
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  estudiantes: Estudiante[] = [
    {
      id: 1,
      nombre: 'Diana',
      apellido: 'Perez',
      fecha_registro: new Date(),
      curso_actual: 'JavaScript',
      pais: 'Colombia',
      email: 'dianaperez@gmail.com',
      telefono: 573112062098
    },
    {
      id: 2,
      nombre: 'Jhon',
      apellido: 'Aguiar',
      fecha_registro: new Date(),
      curso_actual: 'React',
      pais: 'España',
      email: 'jhonaguiar@gmail.com',
      telefono: 3438975234
    },
    {
      id: 3,
      nombre: 'Sindy',
      apellido: 'Mora',
      fecha_registro: new Date(),
      curso_actual: 'SQL',
      pais: 'Argentina',
      email: 'sindymora@gmail.com',
      telefono: 546730972211,
    },
  ];

  dataSource = new MatTableDataSource(this.estudiantes);

  displayedColumns: string[] = ['id', 'nombreCompleto', 'fecha_registro' , 'curso_actual', 'pais', 'email', 'telefono'];

  aplicarFiltros(ev: Event): void {
    const inputValue = (ev.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue?.trim()?.toLowerCase();
  }

  constructor(private matDialog: MatDialog) {}


  abrirABMAlumnos(): void {
    const dialog = this.matDialog.open(DialogEstudianteComponent)
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        this.dataSource.data = [
          ...this.dataSource.data,
          {
            ...valor,
            fecha_registro: new Date(),
            id: this.dataSource.data.length + 1,
          }
        ];
      }
    })
  }
}
