import { NgModule} from "@angular/core";
import { ContadorComponent } from "./components/contador/Contador.component";


@NgModule({
  declarations: [
    ContadorComponent
  ],

  exports:[
  ContadorComponent
  ]


})
export class ContadorModule{

}
