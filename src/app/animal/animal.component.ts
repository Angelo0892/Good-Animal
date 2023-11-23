import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../models/animal.model';
import { FirestoreService } from '../services/animalStore.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit{

  indice:number = 0;
  mostrarAnimales:Animal [] = [];
  animal:Animal = { nombre: '', cuidado: '', origen: '', imagenUrl: ''};

  constructor(private route: ActivatedRoute, private animalStore:FirestoreService) {
  }

  ngOnInit(): void {
    this.indice = this.route.snapshot.params['id'];

    this.obtenerAnimalUnico(this.indice);
    //console.log() ;

  }

  obtenerAnimalUnico(index: number) {

    this.animalStore.getAnimales().subscribe(mostrarAnimales=>{ 
      this.mostrarAnimales = mostrarAnimales;

      this.animal.nombre = mostrarAnimales[index].nombre;
      this.animal.cuidado = mostrarAnimales[index].cuidado;
      this.animal.origen = mostrarAnimales[index].origen;
      this.animal.imagenUrl = mostrarAnimales[index].imagenUrl;
    });
  }
}
