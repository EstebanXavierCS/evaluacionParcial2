import { Injectable, inject } from '@angular/core';
import { Producto } from '../models/producto.model';
import { addDoc, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { first } from 'rxjs';
import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

 private db:Firestore = inject(Firestore);

  constructor() { }

  //Método para obtener todos los documentos de la colección.
  getProductos(){
    const productosCollection = collection(this.db, 'productos');
    return collectionData((productosCollection), {idField: 'id'}).pipe(first());
  }

  //Método para agregar documento a la colección.
  agregarProducto(producto:Producto){
    const productosCollection = collection(this.db, 'productos');
    const productoData = {
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio,
      cantidad: producto.cantidad
    };
    addDoc(productosCollection, productoData);
  }

  //Método para modificar un documento.
  modificarProducto(producto:Producto) {
    const documentRef = doc(this.db,'productos',producto.id);
    updateDoc(documentRef, {
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio,
      cantidad: producto.cantidad
    });
  }

  //Método para borrar un documento.
  eliminarProducto(producto:Producto){
    const documentRef = doc(this.db, 'productos', producto.id);
    deleteDoc(documentRef);
  }
}
