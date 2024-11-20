import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaHeroesComponent {
  public nombre = "IES Playamar";
  public localidad = "Torremolinos";
  public familiasProfesionales = ["Informatica y comunicaciones", "Transporte y mantenimiento"]
  public logo = "";
}
