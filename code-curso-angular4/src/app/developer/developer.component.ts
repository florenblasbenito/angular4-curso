import { Component, OnInit } from '@angular/core';
import { Developer} from './developer';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
    public titulo = 'titledeveloper';
    public developer: Developer;

  constructor() {
    this.developer = new Developer ('juan perez');
    console.log(this.developer);

   }

  ngOnInit() {

  }

}
