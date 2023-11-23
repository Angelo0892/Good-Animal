import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/animalStore.service';
import { Animal } from '../models/animal.model';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agregar-animal',
  templateUrl: './agregar-animal.component.html',
  styleUrls: ['./agregar-animal.component.css']
})
export class AgregarAnimalComponent implements OnInit{

  formulario:FormGroup;

  nuevoAnimal:Animal = { nombre: '', cuidado: '', origen: '' };

  mostrarAnimales:Animal [] = [];

  constructor(private firestoreService: FirestoreService, private animalStore:FirestoreService) {

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

  agregarAnimal() {

    const response = this.animalStore.addAnimal(this.nuevoAnimal);
  }
}
