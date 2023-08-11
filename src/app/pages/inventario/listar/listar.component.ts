import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Inventario } from '../../../modelos/inventario.model';
import { InventarioService } from '../../../servicios/inventario.service';

import { Router } from '@angular/router';
import { AlmacenistasService } from '../../../servicios/almacenistas.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  inventario : Inventario[];
  nombresColumnas: string[] = ['Fecha','Almacenista',"Nombre Inventario","Opciones"];
  constructor(private miServicioInventario: InventarioService,private miAlmacenistaService:AlmacenistasService , private router: Router) { }
  
  ngOnInit(): void {
    this.listar();
  }

  listar():void{
    this.miServicioInventario.listar().
      subscribe(data => {
      this.inventario=data;
    });
    
  }

  agregar():void{
    console.log("agregando nuevo")
    this.router.navigate(["pages/inventario/crear"]);
  }

  editar(id:string):void{
    console.log("editando a "+id)
    this.router.navigate(["pages/inventario/actualizar/"+id]);
  }

  gestion(id:string):void{
    console.log("editando a "+id)
    this.router.navigate(["pages/inventarioproducto/listar/"+id]);
  }

  eliminar(id:string):void{
    Swal.fire({
      title: 'Eliminar Inventario',
      text: "Está seguro que quiere eliminar el Inventario?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioInventario.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'El Inventario ha sido eliminada correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }
}