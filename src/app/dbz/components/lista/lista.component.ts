import { Component, OnInit, Input } from "@angular/core";
import { Personaje } from "../../interfaces/personajes.interface";

@Component({
  selector: 'dbz-lista',
  templateUrl: './lista.component.html'
})
export class dbzListaComponent implements OnInit {
  /*Al añadir el decorado a la propiedad de la clase, indicamos que la clase puede recibir una propiedad llamada listaPersonajes.
  Además, tenemos un valor por defecto que sería Trunks-7000, por si nadie me envía nada.*/
  @Input("milista") //Nombre al input
  //Informacion por defecto, en caso de que nadie envie nada
  public listaPersonajes: Personaje[] = [{
    nombre:"trunks",
    fuerza:7000
  }]

  ngOnInit() { }
}