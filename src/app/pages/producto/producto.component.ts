import { Component } from '@angular/core';
import { Producto } from '../../models/producto.model';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto',
  imports: [FormsModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
//Propiedades.
productos: any;
producto = new Producto();

//Constructor.
constructor(private productoService:ProductoService){
  this.getProductos();
}

//Método que hace la petición al service para obtener los Productos.
async getProductos():Promise<void> {
  this.productos = await firstValueFrom(this.productoService.getProductos());
}

//Método para insertar un Producto desde el form.
insertarProducto(){
  this.productoService.agregarProducto(this.producto);
  this.getProductos();
  this.producto = new Producto();
}

//Método para seleccionar un producto de la tabla.
selectProducto(productoSeleccionado:Producto){
  this.producto = productoSeleccionado;
}

//Método para modificar un producto.
updateProducto(){
  this.productoService.modificarProducto(this.producto);
  this.producto = new Producto();
  this.getProductos();
}

//Método para eliminar un producto.
deleteProducto(){
  this.productoService.eliminarProducto(this.producto);
  this.producto = new Producto();
  this.getProductos();
}

//Método para eliminar un libro.
cleanProducto(){
  this.producto = new Producto();
  this.getProductos();
}
}
