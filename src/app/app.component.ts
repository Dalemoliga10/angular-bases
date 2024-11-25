import { Component } from '@angular/core';
import { DbzModule } from './dbz/dbz.module';
import { ContadorModule } from "./contador/contador.module";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DbzModule],
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
