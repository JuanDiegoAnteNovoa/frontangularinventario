import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../servicios/producto.service';
import { Producto } from '../../../modelos/producto.model';
import { InventarioproductoService } from '../../../servicios/inventarioproducto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventarioproducto } from '../../../modelos/inventarioproducto.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  private inventariop: Inventarioproducto;
  productoLista: Producto[];
  id_inventario: string;
  nombresColumnas: string[] = ['Nombre_producto', 'Precio', 'Cantidad_producto', 'descripcion'];
  modoCreacion: boolean = true;
  almacenistas: Producto[];

  intentoEnvio: boolean = false;
  elInventarioProducto: Inventarioproducto = {
    
  }

  constructor( private router: Router,private miServicioProducto: ProductoService, private rutaActiva: ActivatedRoute, private miservicioproductoinventario: InventarioproductoService) { }

  ngOnInit(): void {
    this.listar();
    this.id_inventario = this.rutaActiva.snapshot.params.id_inventarioproducto;

  }
  private listar(): void {
    this.miServicioProducto.listar().
      subscribe(data => {
        this.productoLista = data.filter(p => p.esta_inventario === "0");
      });
  }

  
  agregar(): void {
    this.elInventarioProducto.inventario=this.id_inventario;
    console.log(this.elInventarioProducto);
    //if (this.validarDatosCompletos()) {
       this.intentoEnvio = true;
        this.miservicioproductoinventario.crear(this.elInventarioProducto).
         subscribe(data => {
            Swal.fire(
              'Creado',
              'El Inventario ha sido creado correctamente',
              'success'
            )
            this.router.navigate(["pages/inventarioproducto/listar/"+this.id_inventario]);
          });
    //}
  }
  // editar(): void {
  //   this.intentoEnvio = true;
  //   if (this.validarDatosCompletos()) {
  //     console.log(this.elInventario)
  //     this.miServicioInventario.editar(this.elInventario._id, this.elInventario).
  //       subscribe(data => {
  //         Swal.fire(
  //           'Actualizado',
  //           'El Inventario ha sido actualizado correctamente',
  //           'success'
  //         )
  //         this.router.navigate(["pages/inventario/listar"]);
  //       });
  //   }
  // }
  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.elInventarioProducto.cantidad == "" ||
      this.elInventarioProducto.observacion == "") {
      return false;
    } else {
      return true;
    }
  }



  // addtoinventory(id: string) {
  //   console.log(id)
  //   //set value esta_inventario en 1 para no mostrar mas y post para crear el producto en el inventario
  //   //  inventarioproducto:Inventarioproducto;
  //   // inventarioproducto.inventario="64c84be1e10bce7a12a179a5";
  //   // inventarioproducto.producto=id;
  //   // console.log(inventarioproducto);
  //   var x = { producto: id, inventario: this.inventarioproducto_id };
  //   this.inventariop = x;
  //   console.log(this.inventariop);
  //   this.miservicioproductoinventario.crear(this.inventariop).subscribe(
  //     respuesta => {
  //       this.miServicioProducto.getProducto(id).subscribe(producto => {
  //         console.log(producto);
  //         producto.esta_inventario = "1"
  //         console.log(producto);
  //         this.miServicioProducto.editar(id, producto).subscribe();
  //         this.router.navigate(["pages/inventarioproducto/listar/"+this.inventarioproducto_id]);
  //       });
  //     }
  //   );
    



  }

