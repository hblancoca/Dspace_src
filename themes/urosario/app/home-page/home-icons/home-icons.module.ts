import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeIconsComponent } from './home-icons.component';

@NgModule({
  declarations: [HomeIconsComponent],
  imports: [CommonModule],
  exports: [HomeIconsComponent]  // Exporta el componente si quieres usarlo en otros módulos
})
export class HomeIconsModule { }
