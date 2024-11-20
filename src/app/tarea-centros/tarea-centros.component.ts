import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

//Interfaz instituto
interface Insti{
  nombre:String;
  localidad:String;
  familiasProfesionales:String[];
  logo: String;
}

@Component({
  selector: 'app-tarea-centros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarea-centros.component.html',
  styleUrl: './tarea-centros.component.css'
})
export class TareaCentrosComponent {
  //Creo institutos
  playamar: Insti = {
    nombre: "IES Playamar",
    localidad:"torremolinos",
    familiasProfesionales: ["informatica", "mecanica"],
    logo: "https://iesplayamar.es/wp-content/uploads/2021/09/logo-ies-playamar.png"
  }

  jacaranda: Insti = {
    nombre: "IES Jacaranda",
    localidad:"churriana",
    familiasProfesionales: ["hosteleria", "turismo"],
    logo: "https://pbs.twimg.com/profile_images/3059231666/21dd362313c922734bf3297b69b2da14_400x400.jpeg"
  }

  fuenteLuna:Insti = {
    nombre: "IES Fuenteluna",
    localidad:"Pizarra",
    familiasProfesionales: ["Jardineria"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9keaKlC2R5r-moViNqATin6jBLWsQT2uRnA&s"
  }

  //Creo listas
  public listaInstis: Insti[] = [this.playamar, this.fuenteLuna, this.jacaranda];
  public pilaborrado: Insti[] = [];

  //Funcion que borra el ultimo de la lista y lo pone en la pila
  public borrar() : void{

    this.pilaborrado.push(this.listaInstis[this.listaInstis.length-1]);
    this.listaInstis.pop();

    if(this.num==this.listaInstis.length){
      this.cambioInstiIzq();
    }

    this.actualizarInstis();
  }

  //saca el primero de la pila y lo pone en la lista
  public anadir(){
    this.listaInstis.push(this.pilaborrado[0]);
    this.pilaborrado.shift();

    this.actualizarInstis();
  }
  num = 2;

  nombreActivo= this.listaInstis[this.num].nombre;
  localidadActivo= this.listaInstis[this.num].localidad;
  familiaActivo= this.listaInstis[this.num].familiasProfesionales;
  logoActivo= this.listaInstis[this.num].logo;


  //Mover institutos a la derecha
  public cambioInstider(){

    this.num++;

    if(this.num > this.listaInstis.length-1){
      this.num--;
    }

    this.actualizarInstis();
  }

  //Mover institutos a la izquierda
  public cambioInstiIzq(){

    this.num--;
    if(this.num<0){
      this.num=0;
    }

    this.actualizarInstis();
  }


  //Actualiza los datos que se muestran
  public actualizarInstis(){
    if(this.listaInstis.length > 0){
      this.nombreActivo= this.listaInstis[this.num].nombre;
      this.localidadActivo= this.listaInstis[this.num].localidad;
      this.familiaActivo= this.listaInstis[this.num].familiasProfesionales;
      this.logoActivo= this.listaInstis[this.num].logo;
    }else{
      this.nombreActivo= "No existe institutos para mostrar";
      this.localidadActivo= "No existe institutos para mostrar";
      this.familiaActivo= [];
      this.logoActivo= "";
    }

  }

}
