import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `<h1>{{title}}</h1>
  <hr>
  <p>Bienvenido a angular</p>
  <h3>Contador: {{contador}}</h3>
  <button (click) = "sumar()">Sumar {{x}}</button>
  <button (click) = "reiniar()">RESTART</button>
  <button (click)="restar()">restar {{x}}</button>
  `,
})

export class ContadorComponent{
  public title = 'Mi primera app de angular';
  public contador = 50;
  public x = 5;

  sumar(): void {
     this.contador+=this.x;
  }

  reiniar(){
    this.contador = 50;

  }

  restar(): void {
    this.contador-=this.x;
 }
}
