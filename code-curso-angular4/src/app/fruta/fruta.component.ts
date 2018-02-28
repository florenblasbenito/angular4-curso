import { Component } from "@angular/core";

@Component ({
    selector: 'fruta',
    templateUrl: '../fruta/fruta.component.html'
})

export class FrutaComponent {
    public nombre_componente:string = 'Componente de fruta';
    public listado_frutas:string = 'Naranja y Manzana';
}   