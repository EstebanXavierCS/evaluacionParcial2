import { Injectable, inject } from '@angular/core';
import { Deporte } from '../models/deportes.model';
import { addDoc, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { first } from 'rxjs';
import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class DeportesService {

  private db:Firestore = inject(Firestore);

  constructor() { }

  //Método para obtener todos los documentos de la colección.
  getDeportes(){
    const deportesCollection = collection(this.db, 'deportes');
    return collectionData((deportesCollection), {idField: 'id'}).pipe(first());
  }

  //Método para agregar documento a la colección.
  agregarDeporte(deporte:Deporte){
    const deportesCollection = collection(this.db, 'deportes');
    const deporteData = {
      descripcion: deporte.descripcion,
      deporte: deporte.deporte,
      precio: deporte.precio
    };
    addDoc(deportesCollection, deporteData);
  }

  //Método para modificar un documento.
  modificarDeporte(deporte:Deporte) {
    const documentRef = doc(this.db,'deportes',deporte.id);
    updateDoc(documentRef, {
      descripcion: deporte.descripcion,
      deporte: deporte.deporte,
      precio: deporte.precio
    });
  }

  //Método para borrar un documento.
  eliminarDeporte(deporte:Deporte){
    const documentRef = doc(this.db, 'deportes', deporte.id);
    deleteDoc(documentRef);
  }
}
