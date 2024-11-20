import { Component } from '@angular/core';
import { TareaCentrosComponent } from "./tarea-centros/tarea-centros.component";
import { HeroesModule } from './heroes/heroes.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroesModule, TareaCentrosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
