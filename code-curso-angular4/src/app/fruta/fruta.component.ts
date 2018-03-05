import { Component } from "@angular/core";

@Component ({
    selector: 'fruta',
    templateUrl: '../fruta/fruta.component.html'
})

export class FrutaComponent {
    public nombre_componente = 'Fruit of component';
    public listado_frutas = 'Orange and apple';

    public nombre: string;
    public edad: number;
    public mayorDeEdad: boolean;
    public trabajos: Array<any> = ['Carpintero', 44, 'Fontanero'];
    commodin: any;
    public anything: string;
   
    constructor() {
        this.nombre = 'holaaaa'
        this.edad = 77
        this.mayorDeEdad = false;
        this.commodin = "SI";
        this.anything = 'cucurucho'
    }

    ngOnInit() {
        this.cambiarNombre();
        this.cambiarEdad(45);
        console.log(this.nombre + " " + this.edad);

        // Variables y alcance
    }

    cambiarNombre(){
        this.nombre = 'Juan Lopez';
    }

    cambiarEdad(edad) {
        this.edad = edad;
    }
}

