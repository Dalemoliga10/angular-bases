import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

//Creo un par de personajes, importando la interfaz desde su lugar correspondiente
export class NameComponent implements OnInit {
  //De aqui me etoy trayendo los personajes
  public Personajes: Personaje[] = [{
    nombre:"krilin",
    fuerza:500
  }, {
    nombre:"Goku",
    fuerza: 10000
  },{
    nombre:"CR7",
    fuerza: 100000
  }]

  //Metodo que e va a ejecutar en el evento
  public onNewPersonaje(personaje:Personaje): void{
    console.log('main.page');
    console.log(personaje);
  }

  ngOnInit() { }
}
