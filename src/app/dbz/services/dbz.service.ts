import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';
//uudi, nuevo
import {v4 as uuid} from "uuid";

@Injectable({providedIn: 'root'})
export class dbzService {
  constructor() { }
    //Traido de mains-page component

    //De aqui me etoy trayendo los personajes
    public Personajes: Personaje[] = [{
      id:uuid(),
      nombre:"krilin",
      fuerza:500
    }, {
      id:uuid(),
      nombre:"Goku",
      fuerza: 10000
    },{
      id:uuid(),
      nombre:"CR7",
      fuerza: 100000
    }]

    //Metodo que e va a ejecutar en el evento
    public onNewPersonaje(personaje:Personaje): void{
      //COn el uuid añadido, ahora podemos añadir identificadores unicos
      const newPersonaje: Personaje = {...personaje}

      this.Personajes.push(newPersonaje);
    }

    //el output llega aqui
    // public onDeletePersonaje(indice:number): void{
    //   let eliminado = this.Personajes.splice(indice, 1)

    //   console.log(eliminado);

    // }


    //Parte nueva ejercicio 5.4
    public onDeletePersonaje(id:string){
      console.log(id)

      this.Personajes = this.Personajes.filter(personaje => personaje.id !== id)

    }
}
