import { Component, OnInit } from '@angular/core';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

//Creo un par de personajes, importando la interfaz desde su lugar correspondiente
export class NameComponent implements OnInit {

  //Ahora se llama al servicio
  constructor(public dbzService: dbzService){}

  ngOnInit() { }
}
