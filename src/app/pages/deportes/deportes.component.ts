import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { Deporte } from '../../models/deportes.model';
import { DeportesService } from '../../services/deportes.service';

@Component({
  selector: 'app-deportes',
  imports: [FormsModule],
  templateUrl: './deportes.component.html',
  styleUrl: './deportes.component.css'
})
export class DeportesComponent {
//Propiedades.
deportes: any;
deporte = new Deporte();

//Constructor.
constructor(private deporteService: DeportesService){
  this.getDeportes();
}

//Método que hace la petición al service para obtener los deportes.
async getDeportes(): Promise<void> {
  this.deportes = await firstValueFrom(this.deporteService.getDeportes());
}

//Método para insertar un deporte desde el form.
insertarDeporte(){
  this.deporteService.agregarDeporte(this.deporte);
  this.getDeportes();
  this.deporte = new Deporte();
}

//Método para seleccionar un deporte de la tabla.
selectDeporte(deporteSeleccionado: Deporte){
  this.deporte = deporteSeleccionado;
}

//Método para modificar un deporte.
updateDeporte(){
  this.deporteService.modificarDeporte(this.deporte);
  this.deporte = new Deporte();
  this.getDeportes();
}

//Método para eliminar un deporte.
deleteDeporte(){
  this.deporteService.eliminarDeporte(this.deporte);
  this.deporte = new Deporte();
  this.getDeportes();
}

//Método para limpiar el formulario.
cleanDeporte(){
  this.deporte = new Deporte();
  this.getDeportes();
}
}
