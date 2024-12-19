import { Component, OnInit } from '@angular/core';
import { dbzService } from '../services/dbz.service';
import { Personaje } from '../interfaces/personajes.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

//Creo un par de personajes, importando la interfaz desde su lugar correspondiente
export class NameComponent implements OnInit {

  //Ahora se llama al servicio
  constructor(private dbzService: dbzService){}

  get personajes(): Personaje[]{
    return this.dbzService.Personajes;
  }

  onDeletePersonaje(id:string):void {
    this.dbzService.onDeletePersonaje(id)
  }

  onNewPersonaje(Personaje:Personaje):void{
    this.dbzService.onNewPersonaje(Personaje)
  }

  ngOnInit() { }
}
