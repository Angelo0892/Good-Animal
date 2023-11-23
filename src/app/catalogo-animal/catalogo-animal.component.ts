import { Component } from '@angular/core';
import { Animal } from '../models/animal.model';
import { FirestoreService } from '../services/animalStore.service';

@Component({
  selector: 'app-catalogo-animal',
  templateUrl: './catalogo-animal.component.html',
  styleUrls: ['./catalogo-animal.component.css']
})
export class CatalogoAnimalComponent {

  mostrarAnimales:Animal [] = [];

  constructor(private firestoreService: FirestoreService, private animalStore:FirestoreService) {

  }

  ngOnInit(): void {
    this.animalStore.getAnimales().subscribe(mostrarAnimales=>{ 
      this.mostrarAnimales = mostrarAnimales;
      //console.log(this.mostrarAnimales);
    });
  }

}
