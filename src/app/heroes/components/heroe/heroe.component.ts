import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public nombre = "goku";
  public edad = 35;

  public getDescripcionHeroe() : string{
    return `${this.nombre} - ${this.edad}`;
  }

  private getNombrePrivado() : string{
    return 'kakarot';
  }

  public cambioNombre(){
    this.nombre = "kakarot";
  }

  public cambioEdad(){
    this.edad = 80;
  }

  public reset(){
    this.edad = 35;
    this.nombre = "goku";
  }
}
