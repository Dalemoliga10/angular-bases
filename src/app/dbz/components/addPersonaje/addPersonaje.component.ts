import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Personaje } from '../../interfaces/personajes.interface';

@Component({
  selector: 'dbz-add',
  templateUrl: './addPersonaje.component.html',

})

//Hacer que el formulario recoja datos paso 1, crear propiedad para almacenar el dato
export class dbzAddComponent implements OnInit {

  //Creamos propiedad de elemento capaz de emitir valores, con un Output para que este disponible (igual que input)
  @Output()
  public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();


  public personaje:Personaje = {
    nombre:"",
    fuerza:0
  }

  public addPersonaje(): void{
    //Hacer debug
    //debugger;
    console.log(this.personaje);

    //Comprobacion de que el personaje no esta vacio
    if(this.personaje.nombre.length===0)  return;

    //Emitimos personaje creado
    this.onNewPersonaje.emit(this.personaje);

    this.personaje = {
      nombre: '',
      fuerza:0
    };
    //Inicializo
    // this.personaje.nombre = '';
    // this.personaje.fuerza = 0;
  }
  ngOnInit() { }
}
