import { Component, OnInit } from '@angular/core';
import { Inventarioproducto } from '../../../modelos/inventarioproducto.model';
import { InventarioproductoService } from '../../../servicios/inventarioproducto.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductoService } from '../../../servicios/producto.service';
@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  inventarioproducto : Inventarioproducto[];
  nombresColumnas : string[] = ['cantidad','descripcion','precio','nombre','opciones'];
  id_inventarioproducto: string = "";
  
  constructor(private miServicioProducto: ProductoService,private miServicioInventarioproducto: InventarioproductoService,private rutaActiva: ActivatedRoute, private router: Router) { }
  
   ngOnInit(): void {
    this.id_inventarioproducto = this.rutaActiva.snapshot.params.id_inventarioproducto;

    this.miServicioInventarioproducto.listar(this.id_inventarioproducto).
    subscribe(data => {
    this.inventarioproducto=data;
  });
   }
   agregar():void{
    console.log("agregando nuevo")
    this.router.navigate(["pages/inventarioproducto/crear/"+this.id_inventarioproducto]);
  }
  editar(id:string):void{
    console.log("editando a "+id)
    this.router.navigate(["pages/inventarioproducto/actualizar/"+id]);
  }

  eliminar(id:string,idproducto:string):void{
    Swal.fire({
      title: 'Eliminar producto del inventario',
      text: "Está seguro que quiere eliminar el Producto del inventario?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioInventarioproducto.eliminar(id).
          subscribe(data => {
            this.miServicioProducto.getProducto(idproducto).subscribe(producto => {
              producto.esta_inventario = "0"
              this.miServicioProducto.editar(idproducto, producto).subscribe();
            });

            Swal.fire(
              'Eliminado!',
              'El Producto ha sido eliminado correctamente del inventario',
              'success'
            )
            this.ngOnInit();
          });
      }
    });
  }
   
}
