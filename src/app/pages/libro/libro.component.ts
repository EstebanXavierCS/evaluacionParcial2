import { Component } from '@angular/core';
import { Libro } from '../../models/libro.model';
import { LibroService } from '../../services/libro.service';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-libro',
  imports: [FormsModule],
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css'
})
export class LibroComponent {
 //Propiedades.
 libros: any;
 libro = new Libro();
 
 //Constructor.
 constructor(private libroService:LibroService){
   this.getLibros();
 }

 //Método que hace la petición al service para obtener los libros.
 async getLibros():Promise<void> {
   this.libros = await firstValueFrom(this.libroService.getLibros());
 }

 //Método para insertar un libro desde el form.
 insertarLibro(){
   this.libroService.agregarLibro(this.libro);
   this.getLibros();
   this.libro = new Libro();
 }

 //Método para seleccionar un libro de la tabla.
 selectLibro(libroSeleccionado:Libro){
   this.libro = libroSeleccionado;
 }

 //Método para modificar un libro.
 updateLibro(){
   this.libroService.modificarLibro(this.libro);
   this.libro = new Libro();
   this.getLibros();
 }

 //Método para eliminar un libro.
 deleteLibro(){
   this.libroService.eliminarLibro(this.libro);
   this.libro = new Libro();
   this.getLibros();
 }

 //Método para eliminar un libro.
 cleanLibro(){
   this.libro = new Libro();
   this.getLibros();
 }
}
