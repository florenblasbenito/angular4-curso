import { Component } from "@angular/core";

@Component ({
    selector: 'fruta',
    templateUrl: '../fruta/fruta.component.html'
})

export class FrutaComponent {
    public nombre_componente = 'Fruit of component';
    public listado_frutas = 'Orange and apple'; 
}
