import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { GestionproductosinventarioComponent } from './gestionproductosinventario/gestionproductosinventario.component';

const routes: Routes = [
  {
    path:'listar',
    component: ListarComponent
    },
    {
    path:'crear',
    component: CrearComponent
    },
    {
      path:'actualizar/:id_inventario',
      component: CrearComponent
    },
    {
      path:'gestion/:id_inventarioproductoid',
      component: GestionproductosinventarioComponent
    },
    {
      path:'actualizar/:id_inventarioproducto',
      component: GestionproductosinventarioComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
