import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { NbCardModule, NbSelectModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { GestionproductosinventarioComponent } from './gestionproductosinventario/gestionproductosinventario.component';


@NgModule({
  declarations: [
    CrearComponent,
    ListarComponent,
    GestionproductosinventarioComponent
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    NbSelectModule,
    NbCardModule,
    FormsModule
  ]
})
export class InventarioModule { }
