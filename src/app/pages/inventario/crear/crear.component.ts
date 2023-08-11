import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Inventario } from '../../../modelos/inventario.model';
import { InventarioService } from '../../../servicios/inventario.service';
import { Almacenistas } from '../../../modelos/almacenistas.model';
import { AlmacenistasService } from '../../../servicios/almacenistas.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  modoCreacion: boolean = true;
  almacenistas: Almacenistas[];
  id_inventario: string = "";
  intentoEnvio: boolean = false;
  elInventario: Inventario = {
    fecha: "",
    almacenista: "",
    nombreinventario:""
  }

  constructor(private miServicioAlmacenistas: AlmacenistasService, private miServicioInventario: InventarioService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_inventario) {
      this.modoCreacion = false;
      this.id_inventario = this.rutaActiva.snapshot.params.id_inventario;
      this.getInventario(this.id_inventario);
    } else {
      this.modoCreacion = true;

    }
    this.miServicioAlmacenistas.listar().subscribe(data=>{
      this.almacenistas=data;
      console.log(data);
    });
  }

  getInventario(id: string) {
    this.miServicioInventario.getInventario(id).
      subscribe(data => {
        this.elInventario = data;
      });
  }

  agregar(): void {
    console.log(this.elInventario);
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
       this.miServicioInventario.crear(this.elInventario).
         subscribe(data => {
           Swal.fire(
             'Creado',
             'El Inventario ha sido creado correctamente',
             'success'
           )
           this.router.navigate(["pages/inventario/listar"]);
         });
    }
  }
  editar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {
      console.log(this.elInventario)
      this.miServicioInventario.editar(this.elInventario._id, this.elInventario).
        subscribe(data => {
          Swal.fire(
            'Actualizado',
            'El Inventario ha sido actualizado correctamente',
            'success'
          )
          this.router.navigate(["pages/inventario/listar"]);
        });
    }
  }
  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.elInventario.fecha == "" ||
      this.elInventario.almacenista == "") {
      return false;
    } else {
      return true;
    }
  }
}





