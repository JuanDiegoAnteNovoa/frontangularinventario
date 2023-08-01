import { Component, OnInit } from '@angular/core';
import { Inventarioproducto } from '../../../modelos/inventarioproducto.model';
import { InventarioproductoService } from '../../../servicios/inventarioproducto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  inventarioproducto : Inventarioproducto[];
  nombresColumnas : string[] = ['cantidad','descripcion','precio','nombre','opciones'];
  id_inventarioproducto: string = "";
  
  constructor(private miServicioInventarioproducto: InventarioproductoService,private rutaActiva: ActivatedRoute, private router: Router) { }
  
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

   
}
