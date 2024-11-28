import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameComponent } from './pages/main-page.component';
import { dbzAddComponent } from './components/addPersonaje/addPersonaje.component';
import { dbzListaComponent } from './components/lista/lista.component';
//Necesario para que ngModel funcione, poner aqui y en el imports para que el resto lo vea
import { FormsModule } from '@angular/forms';

// No hace falta exportarlo, porque es interno no se ve en el app.component
@NgModule({
  declarations: [NameComponent, dbzAddComponent, dbzListaComponent],
  exports: [NameComponent],
  imports: [CommonModule, FormsModule]
})
export class DbzModule { }
