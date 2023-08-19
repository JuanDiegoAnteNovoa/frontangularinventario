import { Producto } from "./producto.model";

export class Inventarioproducto {
    _id?:string;
    inventario?:string;
    producto?:string|Producto;
    cantidad?:string;
    observacion?:string;
    
}
