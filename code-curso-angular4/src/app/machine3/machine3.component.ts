import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado/empleado';

@Component({
  selector: 'app-machine3',
  templateUrl: './machine3.component.html',
  styleUrls: ['./machine3.component.css']
})
export class Machine3Component implements OnInit {

  public titulo = 'Componentes Empleados';
  public empleado: Empleado;
  public trabajadores: Array<Empleado>;

  constructor() {
    this.empleado = new Empleado('David Lopez', 43, 'Peluquero', true);
    this.trabajadores = [
      new Empleado('Manolo Martinez', 35, 'Administrativo', true),
      new Empleado('Ana Lopez', 25, 'Cocinera', true),
      new Empleado('Víctor Luis', 43, 'Programming', false)

    ];

  }

  ngOnInit() {
    this.empleado = new Empleado('David Lopez', 43, 'Cocinero', false)
    console.log(this.empleado)
  }

}
