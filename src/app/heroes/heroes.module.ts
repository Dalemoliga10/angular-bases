import { NgModule} from "@angular/core";
import { HeroeComponent } from "./components/heroe/heroe.component";
import { ListaHeroesComponent } from "./components/lista/lista.component";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    HeroeComponent, ListaHeroesComponent
  ],

  exports:[
  HeroeComponent, ListaHeroesComponent
  ],

  //Vale para tante heroe como lista
  imports:[
    CommonModule
  ]


})
export class HeroesModule{

}
