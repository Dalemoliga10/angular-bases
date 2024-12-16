import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';

@Injectable({providedIn: 'root'})
export class dbzService {
  constructor() { }
    //Traido de mains-page component

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
      this.Personajes.push(personaje);
    }

    //el output llega aqui
    public onDeletePersonaje(indice:number): void{
      let eliminado = this.Personajes.splice(indice, 1)

      console.log(eliminado);

    }
}
