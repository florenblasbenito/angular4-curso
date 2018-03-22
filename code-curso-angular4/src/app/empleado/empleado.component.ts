import { Component, OnInit } from '@angular/core';
import { Empleado} from './empleado';

@Component({
  selector: 'empleado-tag',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  public titulo = 'Componentes Empleados';
  public empleado: Empleado;
  public trabajadores: Array<Empleado>;
  public trabajador_externo:boolean;

  constructor() {
    this.empleado = new Empleado ('David Lopez', 45, 'Cocinero', true);
    this.trabajadores = [
      new Empleado('Manolo Martinez', 35, 'Administrativo', true),
      new Empleado('Ana Lopez', 25, 'Cocinera', true),
      new Empleado('Víctor Robles', 66, 'Programador', false)
    ];
    this.trabajador_externo = false;


   }

  ngOnInit() {
    this.empleado = new Empleado('David Lopez', 45, 'Cocinero', true)
    console.log(this.empleado)
  }

}
