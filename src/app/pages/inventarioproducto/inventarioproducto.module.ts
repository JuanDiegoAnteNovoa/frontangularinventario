import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioproductoRoutingModule } from './inventarioproducto-routing.module';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    InventarioproductoRoutingModule,
    NbCardModule,
    FormsModule
  ]
})
export class InventarioproductoModule { }
