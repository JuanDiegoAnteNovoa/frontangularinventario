import { Component, OnInit } from '@angular/core';
import { InventarioproductoService } from '../../../servicios/inventarioproducto.service';
import { Inventarioproducto } from '../../../modelos/inventarioproducto.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-gestionproductosinventario',
  templateUrl: './gestionproductosinventario.component.html',
  styleUrls: ['./gestionproductosinventario.component.scss']
})
export class GestionproductosinventarioComponent implements OnInit {
  inventarioproducto : Inventarioproducto[];
  nombresColumnas : string[] = ['cantidad','descripcion','precio','nombre','opciones'];
  id_inventarioproducto: string = "";
  
  constructor(private miServicioInventarioproducto: InventarioproductoService,private rutaActiva: ActivatedRoute, private router: Router) { }
  
   ngOnInit(): void {
    this.id_inventarioproducto = this.rutaActiva.snapshot.params.id_inventarioproductoid;

    this.miServicioInventarioproducto.listar(this.id_inventarioproducto).
    subscribe(data => {
    this.inventarioproducto=data;
  });
   }
   agregar():void{
    console.log("agregando nuevo")
    this.router.navigate(["pages/inventario/crear"]);
  }
  editar(id:string):void{
    console.log("editando a "+id)
    this.router.navigate(["pages/inventarioproducto/actualizar/"+id]);
  }

   
}
