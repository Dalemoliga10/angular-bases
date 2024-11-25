import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameComponent } from './pages/main-page.component';

@NgModule({
  declarations: [NameComponent],
  exports: [NameComponent],
  imports: [CommonModule]
})
export class DbzModule { }
