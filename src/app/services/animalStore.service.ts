import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../models/animal.model';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  //constructor(private firestore: AngularFirestore) { }

  //private animalCollection: AngularFirestoreCollection<Animal>;

  constructor(private firestore: Firestore) {
    
  }

  getAnimales(): Observable <Animal[]>{

    const animalCollection = collection (this.firestore, 'animales');

    return collectionData(animalCollection, {idField: 'id'})  as Observable <Animal[]>;
    //return this.animalCollection.valueChanges({ idField: 'id' });
  }

  addAnimal(animal: Animal) {
    
    const animalCollection = collection(this.firestore, 'animales');

    return addDoc(animalCollection, animal);
    //return this.animalCollection.add(animal);
  }
}
