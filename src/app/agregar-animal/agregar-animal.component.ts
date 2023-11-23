import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/animalStore.service';
import { Animal } from '../models/animal.model';

import { FormControl, FormGroup } from '@angular/forms';
import { StoreService } from '../services/animalImageStore.service';

@Component({
  selector: 'app-agregar-animal',
  templateUrl: './agregar-animal.component.html',
  styleUrls: ['./agregar-animal.component.css']
})
export class AgregarAnimalComponent implements OnInit{

  formulario:FormGroup;

  nuevoAnimal:Animal = { nombre: '', cuidado: '', origen: '', imagenUrl: ''};

  mostrarAnimales:Animal [] = [];

  selectedFile: File | null = null;
  imageURL: string | null = null;

  constructor(private firestoreService: FirestoreService, private animalStore:FirestoreService, private imageUploadService: StoreService) {

    this.formulario = new FormGroup({
      nombre: new FormControl,
      cuidado: new FormControl,
      origen: new FormControl
    });

  }
  ngOnInit(): void {
    this.animalStore.getAnimales().subscribe(mostrarAnimales=>{ 
      this.mostrarAnimales = mostrarAnimales;
      
      //console.log(this.mostrarAnimales);
    });
  }

  onSubmit(){
    console.log("Entro aqui");
  }

  capturarArchivo($event: any){

    this.selectedFile = $event.target.files[0];
  }

  async agregarAnimal() {

    if (this.selectedFile) {
      
      this.imageURL = await this.imageUploadService.uploadImage(this.selectedFile);

      this.nuevoAnimal.imagenUrl = this.imageURL;
      const response = this.animalStore.addAnimal(this.nuevoAnimal);
      //console.log('Imagen subida:', this.imageURL);
      // Aquí puedes realizar otras acciones con la URL de la imagen subida
    } else {
      console.error('Error al subir imagen');
    }
  }
}
